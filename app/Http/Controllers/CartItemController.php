<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartCollection;
use App\Http\Resources\CartItemCollection;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class CartItemController extends Controller
{
    public $cutlery = [];
    public function addItem(Request $request): JsonResponse
    {
        $cart = Cart::where('customer_id', $request->customer_id)->first();

        $item = new CartItem();
        $item->uuid = Uuid::uuid1();
        $item->cart_id = $cart->id;
        $item->product_id = $request->product_id;
        $item->quantity = 1;
        $item->save();

        $this->calculateTotal($cart);

        return response()->json([
            'status' => true,
            'cart' => new CartCollection($cart)
        ]);
    }

    public function increment($id): JsonResponse
    {
        $item = CartItem::find($id);

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Item not found'
            ]);
        }

        $item->quantity += 1;
        $item->save();

        $this->calculateSubTotal($item);

        return response()->json([
            'status' => true,
            'cart' => new CartCollection($item->cart)
        ]);
    }

    public function decrement($id): JsonResponse
    {
        $item = CartItem::find($id);
        $cart = $item->cart;

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Item not found'
            ]);
        }

        if ($item->quantity > 1) {
            $item->quantity -= 1;
            $item->save();
        }else {
            $item->delete();
        }

        $this->calculateTotal($cart);

        return response()->json([
            'status' => true,
            'cart' => new CartCollection($cart)
        ]);
    }

    public function calculateSubTotal(CartItem $item) {
        $item->subtotal = $item->quantity * $item->product->price;
        $item->save();

        $this->calculateTotal($item->cart);
    }

    public function destroy($id): JsonResponse
    {
        $item = CartItem::find($id);
        $cart = $item->cart;

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Item not found'
            ]);
        }

        $item->delete();

        $this->calculateTotal($cart);

        return response()->json([
            'status' => true,
            'cart' => new CartCollection($cart)
        ]);
    }

    public function calculateTotal(Cart $cart) {
        $total = 0;

        foreach ($cart->items as $item) {
            $total += $item->subtotal;
        }

        $cart->total = $total;
        $cart->save();
    }
}

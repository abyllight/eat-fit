<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartItemCollection;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\JsonResponse;

class CartItemController extends Controller
{
    public $cutlery = [];
    public function addItem($customer_id, $product_id): JsonResponse
    {
        $cart = Cart::where('customer_id', $customer_id)->first();

        $item = new CartItem();
        $item->cart_id = $cart->id;
        $item->product_id = $product_id;
        $item->quantity = 1;
        $item->save();

        $this->calculateTotal($cart);

        if (!$cart->hasCutlery()) {
            dd('ad');
        }

        return response()->json([
            'status' => true,
            'item' => new CartItemCollection($item)
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
            'item' => new CartItemCollection($item)
        ]);
    }

    public function decrement($id): JsonResponse
    {
        $item = CartItem::find($id);

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Item not found'
            ]);
        }

        if ($item->quantity > 1) {
            $item->quantity -= 1;
            $item->save();

            $this->calculateSubTotal($item);

            return response()->json([
                'status' => true,
                'item' => new CartItemCollection($item)
            ]);
        }
        $cart = $item->cart;
        $item->delete();

        $this->calculateTotal($cart);

        return response()->json([
            'status' => true
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

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Item not found'
            ]);
        }

        $item->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Item removed'
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

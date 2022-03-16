<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class CartItemController extends Controller
{
    public function addItem(Request $request): JsonResponse
    {
        $cart = Cart::where('customer_id', $request->customer_id)->first();

        $item = new CartItem();
        $item->uuid = Uuid::uuid1();
        $item->cart_id = $cart->id;
        $item->product_id = $request->product_id;
        $item->quantity = 1;
        $item->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function increment(Request $request): JsonResponse
    {
        $item = CartItem::where('uuid', $request->id)->get();

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Item not found'
            ]);
        }

        $item->quantity += 1;
        $item->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function decrement(Request $request): JsonResponse
    {
        $item = CartItem::where('uuid', $request->id)->get();

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Item not found'
            ]);
        }

        if ($item->quantity > 1) {
            $item->quantity -= 1;
            $item->save();

            return response()->json([
                'status' => true
            ]);
        }
        $item->delete();

        return response()->json([
            'status' => true
        ]);
    }

    public function calculateSubTotal(CartItem $item) {
        $item->subtotal = $item->quantity * $item->product->price;
        $item->save();

        $this->calculateTotal($item->cart);
    }

    public function destroy(Request $request): JsonResponse
    {
        $item = CartItem::where('uuid', $request->id)->get();

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Item not found'
            ]);
        }

        $item->delete();

        return response()->json([
            'status' => true
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

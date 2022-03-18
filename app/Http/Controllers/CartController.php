<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartItemCollection;
use App\Models\Cart;
use Illuminate\Http\JsonResponse;

class CartController extends Controller
{
    public function calculateTotal($id) {
        $cart = Cart::find($id);

        $total = 0;

        foreach ($cart->items as $item) {
            $total += $item->subtotal;
        }

        $cart->total = $total;
        $cart->save();
    }

    public function getCartById($id): JsonResponse
    {
        $cart = Cart::where('uuid', $id)->first();

        if (!$cart) {
            return response()->json([
                'status' => false
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => CartItemCollection::collection($cart->items)
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $cart = Cart::where('uuid', $id)->first();

        if (!$cart) {
            return response()->json([
                'status' => false
            ]);
        }

        foreach ($cart->items as $item) {
            $item->delete();
        }

        $cart->delete();

        return response()->json([
            'status' => true
        ]);
    }
}

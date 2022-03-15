<?php

namespace App\Http\Controllers;

use App\Models\Cart;

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
}

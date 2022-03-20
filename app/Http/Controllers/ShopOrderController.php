<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\ShopOrder;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ShopOrderController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $customer = Customer::where('uuid', $request->c_id)->first();

        if (!$customer) {
            return response()->json([
                'status' => false,
                'msg' => 'Customer not found'
            ]);
        }

        $cart = $customer->cart;

        if (!$cart || !$cart->items) {
            return response()->json([
                'status' => false,
                'msg' => 'Customer\'s cart not found'
            ]);
        }

        $today = Carbon::today()->format('Y-m-d');

        foreach ($cart->items as $item) {
            $order = new ShopOrder();
            $order->customer_id = $request->c_id;
            $order->product_id = $item->product_id;
            $order->quantity = $item->quantity;
            $order->status = 1;
            $order->date = $request->date ?? $today;
            $order->time = $request->time;
            $order->meta = $request->meta;
            $order->save();

            $item->delete();
        }

        if ($request->cutlery > 0) {
            $order = new ShopOrder();
            $order->customer_id = $request->c_id;
            $order->product_id = 0;
            $order->quantity = $request->cutlery;
            $order->status = 1;
            $order->save();
        }

        $cart->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Success'
        ]);
    }
}

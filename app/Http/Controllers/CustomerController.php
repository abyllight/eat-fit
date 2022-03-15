<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerCollection;
use App\Models\Cart;
use App\Models\Customer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function store($id): JsonResponse
    {
        $customer = new Customer();
        $customer->uuid = $id;
        $customer->save();

        $cart = new Cart();
        $cart->customer_id = $customer->id;
        $cart->save();

        return response()->json([
            'status' => true,
            'data' => new CustomerCollection($customer)
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $customer = Customer::where('uuid', $id)->first();

        if (!$customer) {
            return response()->json([
                'status' => false,
                'msg' => 'Customer not found'
            ]);
        }

        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->address = $request->address;
        $customer->save();

        return response()->json([
            'status' => true,
            'data' => new CustomerCollection($customer)
        ]);
    }

    public function getCustomerById($id): JsonResponse
    {
        $customer = Customer::where('uuid', $id)->first();

        if (!$customer) {
            return response()->json([
                'status' => false,
                'msg' => 'Customer not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => new CustomerCollection($customer)
        ]);
    }
}

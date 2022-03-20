<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartCollection;
use App\Http\Resources\CartItemCollection;
use App\Http\Resources\CustomerCollection;
use App\Models\Cart;
use App\Models\Customer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class CustomerController extends Controller
{
    public function store($id): Customer
    {
        $customer = new Customer();
        $customer->uuid = $id;
        $customer->save();

        $cart = new Cart();
        $cart->uuid = Uuid::uuid1();
        $cart->customer_id = $customer->id;
        $cart->save();

        return $customer;
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
            $customer = $this->store($id);
        }

        if (!$customer->cart) {
            $cart = new Cart();
            $cart->uuid = Uuid::uuid1();
            $cart->customer_id = $customer->id;
            $cart->save();
        }

        return response()->json([
            'status' => true,
            'user' => new CustomerCollection($customer),
            'cart' => CartItemCollection::collection($customer->cart->items)
        ]);
    }
}

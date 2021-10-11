<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ResourceCollection
     */
    public function index(): ResourceCollection
    {
        return UserCollection::collection(User::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required|unique:users,phone|min:11',
            'roles' => 'required',
            'password' => 'required|min:3',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->password);
        $user->save();

        $user->roles()->attach($request->roles);

        return response()->json([
            'status' => true,
            'msg' => 'User created'
        ]);
    }

    public function edit($id): JsonResponse
    {
        $user = User::find($id);

        if ($user) {
            return response()->json([
                'status' => true,
                'msg' => 'OK',
                'user' => new UserCollection($user)
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'User not found',
            'user' => null
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required|min:11|unique:users,phone,' . $id,
            'roles' => 'required'
        ]);

        if ($request->password) {
            $request->validate([
                'password' => 'required|min:3',
            ]);
        }

        $user = User::find($id);

        if($user) {
            $user->name = $request->name;
            $user->phone = $request->phone;

            if ($request->password) {
                $user->password = Hash::make($request->password);
            }

            $user->save();

            if ($request->roles) {

                $roles = array_map(function ($item) {
                    return $item;
                }, $request->roles);

                $user->roles()->detach();
                $user->roles()->sync($roles);
            }

            return response()->json([
                'status' => true,
                'msg' => 'User updated'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'User not found'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $user = User::find($id);

        if ($user) {
            $user->roles()->detach();
            $user->reports()->detach();

            $orders1 = Order::where('courier1_id', $user->id)->get();
            $orders2 = Order::where('courier2_id', $user->id)->get();

            foreach ($orders1 as $order) {
                $order->courier1_id = 0;
                $order->save();
            }

            foreach ($orders2 as $order) {
                $order->courier2_id = 0;
                $order->save();
            }

            $user->delete();

            return response()->json([
                'status' => true,
                'msg' => 'User deleted'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'User not found'
        ]);
    }

    public function getCouriers()
    {
        return User::couriers();
    }
}

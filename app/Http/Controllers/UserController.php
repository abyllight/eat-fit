<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourierCollection;
use App\Http\Resources\UserCollection;
use App\Models\Courier;
use App\Models\Order;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $user = Auth::user();
        $users = User::where('is_admin', false)->where('city_id', $user->city_id)->orderBy('name')->get();
        return response()->json(UserCollection::collection($users));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $request->phone = User::uglifyMobile($request->phone);

        $request->validate([
            'name' => 'required',
            'phone' => 'required|unique:users,phone|min:11',
            'roles' => 'required',
            'city_id' => 'required',
            'password' => 'required|min:3',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->city_id = $request->city_id;
        $user->kd_id = $request->department_id;
        $user->password = Hash::make($request->password);
        $user->save();

        $user->roles()->attach($request->roles);

        return response()->json([
            'status' => true,
            'msg' => 'User created'
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
        $request->phone = User::uglifyMobile($request->phone);

        $request->validate([
            'name' => 'required',
            'phone' => 'required|min:11|unique:users,phone,' . $id,
            'city_id' => 'required',
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
            $user->city_id = $request->city_id;
            $user->kd_id = $request->department_id;

            if ($request->password) {
                $user->password = Hash::make($request->password);
            }

            $user->save();

            $user->roles()->sync($request->roles);

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
            if ($user->roles->isNotEmpty()){
                $user->roles()->delete();
            }

            if ($user->reports->isNotEmpty()){
                $user->reports()->delete();
            }

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

    public function getCouriers(): ResourceCollection
    {
        return User::getCouriers();
    }
}

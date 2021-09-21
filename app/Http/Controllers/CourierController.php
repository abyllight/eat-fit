<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourierCollection;
use App\Models\Courier;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Hash;

class CourierController extends Controller
{
    public function index(): ResourceCollection
    {
        return CourierCollection::collection(Courier::all());
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required|unique:couriers,phone|min:11',
            'password' => 'required',
        ]);

        $name = $request->name;
        $phone = $request->phone;
        $car = $request->car;
        $password = Hash::make($request->password);

        $user = User::where('phone', $phone)->first();

        if ($user) {
            $password = $user->password;
        }else {
            $user = new User();
            $user->name = $name;
            $user->phone = $phone;
            $user->password = $password;
            $user->save();
        }

        $user->courier()->create([
            'name' => $name,
            'phone' => $phone,
            'car' => $car,
            'password' => $password
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Курьер успешно создан'
        ]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required|min:11|unique:couriers,phone,' . $id,
            'password' => 'required',
        ]);

        $name = $request->name;
        $phone = $request->phone;

        $courier = Courier::find($id);
        $courier->name = $name;
        $courier->phone = $phone;
        $courier->car = $request->car;
        $courier->save();

        $user = User::find($courier->user_id);
        $user->name = $name;
        $user->phone = $phone;
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'Курьер успешно обновлен'
        ]);
    }

    public function updatePassword(Request $request, $id): JsonResponse
    {
        $courier = Courier::find($id);

        if (!$courier) {
            return response()->json([
                'status' => false,
                'message' => 'Курьер не найден'
            ]);
        }

        $password = Hash::make($request->password);

        $courier->password = $password;
        $courier->save();

        $user = User::find($courier->user_id);
        $user->password = $password;
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'Пароль успешно сменен'
        ]);
    }

    public function delete($id): JsonResponse
    {
        Courier::destroy($id);

        return response()->json([
            'status' => true,
            'message' => 'Курьер удален'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request) {

        $request->validate([
            'phone' => 'required|min:11',
            'password' => 'required',
        ]);

        $user = User::where('phone', $request->phone)->first();

        if (!$user) {
            return response()->json([
                'status'  => false,
                'message' => 'Пользователь не найден',
                'errors' => [
                    'phone' => 'Пользователь не найден'
                ]
            ]);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'status'  => false,
                'message' => 'Неверный пароль',
                'errors' => [
                    'password' => 'Неверный пароль'
                ]
            ]);
        }

        return response()->json([
            'status' => true,
            'user' => new UserCollection($user)
        ]);
    }
}

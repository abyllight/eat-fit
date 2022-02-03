<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'phone' => 'required|min:11',
            'password' => 'required',
        ]);

        $credentials['phone'] = User::uglifyMobile($credentials['phone']);

        if (Auth::attempt($credentials)) {
            return response()->json([
                'status' => true,
                'user' => new UserCollection(Auth::user()),
            ]);
        }

        return response()->json([
            'status'  => false,
            'message' => 'Пользователь не найден!',
            'errors' => [
                'phone' => 'Пользователь не найден'
            ]
        ]);
    }

    public function profile(Request $request): JsonResponse
    {
        return response()->json([
            'user' => new UserCollection($request->user())
        ]);
    }

    public function logout(): JsonResponse
    {
        Auth::guard('web')->logout();

        return response()->json([
            'status' => true,
            'msg' => 'Logout'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use function Matrix\trace;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'phone' => 'required|min:11',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json([
                'status' => true,
                'user' => new UserCollection(Auth::user()),
            ]);
        }
        return response()->json([
            'status'  => false,
            'message' => 'Пользователь не найден',
            'errors' => [
                'phone' => 'Пользователь не найден'
            ]
        ]);
    }

    public function profile(Request $request): JsonResponse
    {
        return response()->json([
            'user' => $request->user()
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'status' => true,
            'msg' => 'Logout'
        ]);
    }
}

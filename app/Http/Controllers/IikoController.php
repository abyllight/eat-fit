<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class IikoController extends Controller
{
    public function getAuthToken(): array
    {
        $link = env('IIKO_HOST') . ':' .
            env('IIKO_PORT') . '/resto/api/auth?login=' .
            env('IIKO_LOGIN') . '&pass=' .
            env('IIKO_HASH');

        $response = Http::get($link);

        return [
            'status' => (bool) $response->body(),
            'token' => $response->body()
        ];
    }

    public function logout($token): array
    {
        $link = env('IIKO_HOST') . ':' .
            env('IIKO_PORT') . '/resto/api/logout?key=' . $token;

        $response = Http::get($link);

        return [
            'status' => (bool) $response->body(),
            'msg' => $response->body()
        ];
    }
}

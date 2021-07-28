<?php

namespace App\Http\Controllers;

use App\Models\Cuisine;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class CuisineController extends Controller
{
    public function fetchCuisines(): JsonResponse
    {
        $iiko = new IikoController();

        $auth = $iiko->getAuthToken();

        if (!$auth['status']) {
            return response()->json([
                'status' => false,
                'msg' => 'Проблема с авторизацией'
            ]);
        }

        $token = $auth['token'];

        $link = env('IIKO_HOST') . ':' .
            env('IIKO_PORT') . '/resto/api/v2/entities/products/group/list?key=' . $token;

        $response = Http::get($link);

        $data = $response->json();

        if ($data) {
            foreach ($data as $item) {
                if (substr($item['name'], 0, 2) === '! ') {
                    Cuisine::updateOrCreate(
                        ['iiko_id' => $item['id']],
                        ['name' => $item['name']]
                    );
                }
            }
        }

        $logout = $iiko->logout($token);

        if (!$logout['status']) {
            return response()->json([
                'status' => false,
                'msg' => 'Проблема с logout'
            ]);
        }

        return response()->json([
            'status' => (bool)$data,
            'msg' => 'Данные получены'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Cuisine;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    public function index(): JsonResponse
    {
        /*$cuisine = Cuisine::where('is_on_duty', true)->first();
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();
        $link = '/resto/api/v2/entities/products/list?types=DISH&parentIds=' . $cuisine->iiko_id . '&key=';
        $dishes = $iiko->doRequest($token, $link);

        if (is_array($dishes)) {
            foreach ($dishes as $dish) {
                $first = substr($dish['name'], 0, 1);

                if (!is_numeric($first)) {
                    continue;
                }

                $first = (int)$first;
                dd($first, $dish);
            }
        }
        return response()->json($cuisine);*/
    }
}

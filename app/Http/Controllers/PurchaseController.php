<?php

namespace App\Http\Controllers;

use App\Models\Cuisine;
use App\Models\Ingredient;
use App\Models\Ration;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    public function index(): JsonResponse
    {
        $cuisine = Cuisine::where('is_on_duty', true)->first();
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();
        $link = '/resto/api/v2/entities/products/list?types=DISH&parentIds=' . $cuisine->iiko_id . '&key=';
        $dishes = $iiko->doRequest($token, $link);
        $today = Carbon::today()->format('Y-m-d');

        $rations = Ration::where('is_required', true)->get();
        $r_numbers = $rations->map(function ($r) {
            return $r->iiko_id;
        });

        $array = [];

        if (is_array($dishes)) {
            foreach ($dishes as $dish) {
                $first = substr($dish['name'], 0, 1);
                $t = substr($dish['name'], 2, 1);
                if (!is_numeric($first)) {
                    continue;
                }

                $first = (int)$first;
                $t = (int)$t;

                if (!in_array($first, $r_numbers->toArray())){
                    continue;
                }

                $link = '/resto/api/v2/assemblyCharts/getPrepared?date=' . $today . '&productId=' . $dish['id'] . '&key=';
                $ingredients = $iiko->doRequest($token, $link);

                if (is_array($ingredients)) {
                    $ingredients = $ingredients['preparedCharts'][0]['items'];

                    $i = [
                        'r' => $first,
                        't' => $t
                    ];
                    foreach ($ingredients as $ingredient) {
                        $i['items'][] = [
                            'id' => $ingredient['productId'],
                            'amount' => $ingredient['amount']
                        ];
                    }
                    $array[] = $i;
                }else {
                    return response()->json([
                        'status' => false,
                        'msg' => $ingredients. 'asds'
                    ]);
                }
            }

        }
        return response()->json($cuisine);
    }
}

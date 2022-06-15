<?php

namespace App\Http\Controllers;

use App\Http\Resources\PurchaseCollection;
use App\Models\Cuisine;
use App\Models\Ingredient;
use App\Models\Order;
use App\Models\Purchase;
use App\Models\Ration;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class PurchaseController extends Controller
{
    public function index(): JsonResponse
    {
        $purchase = Purchase::whereDate('date', Carbon::tomorrow())->first();
        return response()->json(new PurchaseCollection($purchase));
    }

    public function calculateIngredients(): JsonResponse
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

        $s = Order::where('is_active', true)->where('type', 1)->whereIn('size', [1, 2])->count();
        $m = Order::where('is_active', true)->where('type', 1)->whereIn('size', [3])->count();
        $l = Order::where('is_active', true)->where('type', 1)->whereIn('size', [4, 5])->count();

        $purchase = Purchase::whereDate('date', Carbon::tomorrow())->first();

        if(!$purchase) {
            $purchase = new Purchase();
            $purchase->cuisine_id = $cuisine->id;
            $purchase->date = Carbon::tomorrow()->toDateString();
        }else {
            $purchase->cuisine_id = $cuisine->id;
        }

        $purchase->s = $s;
        $purchase->m = $m;
        $purchase->l = $l;
        $purchase->save();

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

                    if ($t === 1) {
                        $count = $s;
                    }elseif ($t === 2) {
                        $count = $m;
                    }else{
                        $count = $l;
                    }

                    foreach ($ingredients as $ingredient) {
                        $ing = Ingredient::where('iiko_id', $ingredient['productId'])->first();
                        if (!$ing) continue;

                        $i['items'][] = [
                            'id' => $ing->id,
                            'amount' => $ingredient['amount'],
                            'count' => $ingredient['amount'] * $count
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
            $result = [];

            foreach ($array as $item) {
                foreach ($item['items'] as $v) {

                    $index = array_search($v['id'], array_keys($result));

                    if ($index) {
                        $result[$v['id']]['total'] += $v['count'];
                    }else {
                        $result[$v['id']] = [
                            'total' => $v['count']
                        ];
                    }

                    $result[$v['id']]['total'] = round($result[$v['id']]['total'], 4);
                }
            }

            $purchase->ingredients()->sync($result);
        }

        return response()->json([
            'status' => true,
            'msg' => 'Success!'
        ]);
    }
}

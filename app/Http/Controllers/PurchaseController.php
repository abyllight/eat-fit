<?php

namespace App\Http\Controllers;

use App\Http\Resources\PurchaseCollection;
use App\Models\Cuisine;
use App\Models\Ingredient;
use App\Models\Order;
use App\Models\Purchase;
use App\Models\PurchaseIngredient;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PurchaseController extends Controller
{
    public function index(): JsonResponse
    {
        $cuisine = Cuisine::where('is_on_duty', true)->first();

        $purchase = Purchase::whereDate('date', $cuisine->date)->first();
        return response()->json(new PurchaseCollection($purchase));
    }

    public function calculateIngredients(): JsonResponse
    {
        $cuisine = Cuisine::where('is_on_duty', true)->first();
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();
        $today = Carbon::today()->format('Y-m-d');

        $purchase = Purchase::whereDate('date', $cuisine->date)->first();

        if(!$purchase) {
            $purchase = new Purchase();
            $purchase->cuisine_id = $cuisine->id;
            $purchase->date = $cuisine->date;
        }elseif($purchase->cuisine_id !== $cuisine->id) {
            $purchase->cuisine_id = $cuisine->id;
            $purchase->ingredients()->delete();
        }

        $purchase->save();
        $purchase->sizes()->delete();

        PurchaseIngredient::where('purchase_id', $purchase->id)
            ->update(['total' => 0]);

        foreach ($cuisine->sizes as $size) {
            $count = Order::where('is_active', true)
                ->where('type', Order::EAT_FIT_LITE)
                ->where('size', $size->type)
                ->where('city_id', Auth::user()->city_id)
                ->count();

            $purchase->sizes()->create([
                'type' => $size->type,
                'name' => $size->name,
                'total' => $count
            ]);

            $link = '/resto/api/v2/assemblyCharts/getPrepared?date=' . $today . '&productId=' . $size->iiko_id . '&key=';
            $ingredients = $iiko->doRequest($token, $link);

            foreach ($ingredients['preparedCharts'][0]['items'] as $i) {
                $ing = Ingredient::where('iiko_id', $i['productId'])->first();
                if (!$ing) continue;

                $pi = PurchaseIngredient::where('purchase_id', $purchase->id)->where('ingredient_id', $ing->id)->first();

                $total = $i['amount'] * $count;

                if ($pi) {
                    $pi->total = $pi->total + $total;
                    $pi->save();
                }else {
                    $purchase->ingredients()->attach($ing->id, [
                        'total' => $total
                    ]);
                }
            }
        }
        return response()->json([
            'status' => true,
            'msg' => 'Success!'
        ]);
    }

    public function enterLeftNumber(Request $request): JsonResponse
    {
        $pi = PurchaseIngredient::where('purchase_id', $request->p_id)->where('ingredient_id', $request->i_id)->first();

        $pi->left = $request->left;
        $pi->diff = $pi->total - $request->left;
        $pi->save();

        return response()->json([
            'status' => true,
            'msg' => 'Остаток сохранен'
        ]);
    }

    public function done(Request $request) {
        $pi = PurchaseIngredient::where('purchase_id', $request->p_id)->where('ingredient_id', $request->i_id)->first();

        $pi->done =! $pi->done;
        $pi->save();
    }
}

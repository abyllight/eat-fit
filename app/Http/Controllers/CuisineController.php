<?php

namespace App\Http\Controllers;

use App\Http\Resources\CuisineCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Ration;
use App\Models\Week;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use function Matrix\trace;

class CuisineController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(CuisineCollection::collection(Cuisine::orderBy('name')->get()));
    }

    public function fetchCuisines(): JsonResponse
    {
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();
        $link = '/resto/api/v2/entities/products/group/list?key=';
        $cuisines = $iiko->doRequest($token, $link);

        $blacklist = [
            'e94384fa-07d1-4690-a7de-7219f6261c8e',
            'b3835a97-aa97-4921-9ac4-e827864a0ef5',
            'bce1cdd3-a155-4328-a8a9-e879501d91b0',
            'fb41dbf4-4b29-4ac2-9899-4d0074d43046',
        ];

        if (is_array($cuisines)) {
            foreach ($cuisines as $cuisine) {
                if (substr($cuisine['name'], 0, 2) === '! ' && !in_array($cuisine['id'], $blacklist)) {
                    Cuisine::updateOrCreate(
                        ['iiko_id' => $cuisine['id']],
                        [
                            'iiko_name' => substr($cuisine['name'], 2),
                            'name' => substr($cuisine['name'], 2)
                        ]
                    );
                }
            }
        }else {
            return response()->json([
                'status' => false,
                'msg' => $cuisines
            ]);
        }

        $iiko->logout($token);

        $cuisines = Cuisine::where('is_on_duty', true)->first();

        if (!$cuisines) {
            $duty = Cuisine::find(1);
            $duty->is_on_duty = true;
            $duty->save();
        }

        return response()->json([
            'status' => true,
            'msg' => 'Кухни получены'
        ]);
    }

    public function setCuisine(Request $request): JsonResponse
    {
        $duty = Cuisine::find($request->id);
        $current = Cuisine::where('is_on_duty', true)->first();

        if ($duty && $current){
            $duty->is_on_duty = true;
            $duty->save();

            $current->is_on_duty = false;
            $current->save();
        }

        return response()->json(new CuisineCollection($duty));
    }

    public function getDutyCuisine(): JsonResponse
    {
        return response()->json(Cuisine::where('is_on_duty', true)->first());
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\CuisineCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Week;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use function Matrix\trace;

class CuisineController extends Controller
{
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
            '36fd39fe-a1c5-444e-8685-dba3b85354cd'
        ];

        if (is_array($cuisines)) {
            foreach ($cuisines as $cuisine) {
                if (substr($cuisine['name'], 0, 2) === '! ' && !in_array($cuisine['id'], $blacklist)) {
                    Cuisine::updateOrCreate(
                        ['i_id' => $cuisine['id']],
                        [
                            'i_name' => substr($cuisine['name'], 2),
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

        return response()->json([
            'status' => true,
            'msg' => 'Кухни получены'
        ]);
    }

    public function fetchDishes(): JsonResponse
    {
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();

        $cuisines = Cuisine::all();

        foreach ($cuisines as $cuisine) {
            $link = '/resto/api/v2/entities/products/list?types=DISH&parentIds=' . $cuisine->i_id . '&key=';
            $dishes = $iiko->doRequest($token, $link);
            $array = [];

            if (is_array($dishes)){
                foreach ($dishes as $dish) {
                    $first = substr($dish['name'], 0, 1);
                    if (!in_array($first, $array) && is_numeric($first)) {
                        Dish::updateOrCreate(
                            ['i_id' => $dish['id']],
                            [
                                'i_name' => substr($dish['name'], 4),
                                'name' => substr($dish['name'], 4),
                                'time' => (int) $first,
                                'cuisine_id' => $cuisine->id,
                                'is_custom' => false
                            ]
                        );
                    }
                    array_push($array, $first);
                }
            }else {
                return response()->json([
                    'status' => false,
                    'msg' => $dishes
                ]);
            }
        }

        return response()->json([
            'status' => true,
            'msg' => 'Блюда получены'
        ]);
    }

    public function fetchIngredients(Request $request): JsonResponse
    {
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();

        $dishes = Dish::where('cuisine_id', $request->id)->get();

        foreach ($dishes as $dish){
            $link = '/resto/api/v2/assemblyCharts/getPrepared?date=2021-10-12&productId=' . $dish->i_id . '&key=';
            $ingredients = $iiko->doRequest($token, $link);

            if (is_array($ingredients)) {
                $ingredients = $ingredients['preparedCharts'][0]['items'];

                foreach ($ingredients as $ingredient) {
                    $link2 = '/resto/api/v2/entities/products/list?types=GOODS&ids=' . $ingredient['productId'] . '&key=';
                    $goods = $iiko->doRequest($token, $link2);

                    if ($goods) {
                        $i = Ingredient::updateOrCreate(
                            ['i_id' => $goods[0]['id']],
                            ['i_name' => $goods[0]['name'], 'name' => $goods[0]['name']]
                        );

                        $dish->ingredients()->syncWithoutDetaching($i, false);
                    }
                }
            }else {
                return response()->json([
                    'status' => false,
                    'msg' => $ingredients
                ]);
            }
        }

        return response()->json([
            'status' => true,
            'msg' => 'Ингредиенты получены'
        ]);
    }

    public function setCuisine(Request $request): JsonResponse
    {
        $week = Week::find(1);
        $week->cuisine_id = $request->id;
        $week->save();

        return response()->json(new CuisineCollection(Cuisine::find($request->id)));
    }

    public function updateDish(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'time' => 'gt:0'
        ]);

        $dish = Dish::find($request->id);

        if($dish) {
            $dish->name = $request->name;

            if ($request->has('time')){
                $dish->time = $request->time;
            }

            if ($request->has('description')){
                $dish->description = $request->description;
            }

            if ($request->has('ingredients')){
                $dish->ingredients()->sync($request->ingredients);
            }

            $dish->save();

            return response()->json([
                'status' => true,
                'msg' => 'Блюдо обновлено'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Dish not found'
        ]);
    }

    public function createDish(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'time' => 'required|gt:0'
        ]);

        $dish = new Dish();
        $dish->name = $request->name;
        $dish->time = $request->time;
        $dish->description = $request->description;
        $dish->cuisine_id = 0;
        $dish->is_custom = true;
        $dish->save();

        $dish->ingredients()->sync($request->ingredients);

        return response()->json([
            'status' => true,
            'msg' => 'Блюдо добавлено'
        ]);
    }

    public function deleteDish(Request $request): JsonResponse
    {
        $dish = Dish::find($request->id);
        if ($dish) {
            $dish->ingredients()->detach();
            $dish->delete();

            return response()->json([
                'status' => true,
                'msg' => 'Блюдо удалено'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Dish not found'
        ]);
    }
}

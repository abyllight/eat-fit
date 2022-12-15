<?php

namespace App\Http\Controllers;

use App\Http\Resources\IngredientCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\DishIngredient;
use App\Models\DishIngredientSize;
use App\Models\Ingredient;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class IngredientController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(IngredientCollection::collection(Ingredient::orderBy('name')->get()));
    }

    public function fetchIngredients($id): JsonResponse
    {
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();
        $today = Carbon::today()->format('Y-m-d');

        $cuisine = Cuisine::find($id);

        if (!$cuisine) {
            return response()->json([
                'status' => false,
                'msg' => 'Cuisine not found'
            ]);
        }

        $dishes = $cuisine->dishes;

        if (!$dishes) {
            return response()->json([
                'status' => false,
                'msg' => 'Cuisine has no dishes'
            ]);
        }

        foreach ($dishes as $dish) {
            $link = '/resto/api/v2/assemblyCharts/getPrepared?date='.$today.'&productId=' . $dish->iiko_id . '&key=';
            $ingredients = $iiko->doRequest($token, $link);

            if (is_array($ingredients)) {
                $ingredients = $ingredients['preparedCharts'][0]['items'];

                DishIngredient::where('dish_id', $dish->id)->update(['is_original' => false]);

                foreach ($ingredients as $ingredient) {
                    $link2 = '/resto/api/v2/entities/products/list?types=GOODS&ids=' . $ingredient['productId'] . '&key=';
                    $goods = $iiko->doRequest($token, $link2);

                    if ($goods) {
                        $i = Ingredient::updateOrCreate(
                            ['iiko_id' => $goods[0]['id']],
                            ['iiko_name' => $goods[0]['name']]
                        );

                        if (!$i->name) {
                            $i->name = $goods[0]['name'];
                            $i->save();
                        }

                        DishIngredient::updateOrCreate(
                            [
                                'dish_id' => $dish->id,
                                'ingredient_id' => $i->id
                            ], ['is_original' => true]
                        );
                    }
                }
            }else {
                return response()->json([
                    'status' => false,
                    'msg' => $ingredients. ' error'
                ]);
            }
        }

        return response()->json([
            'status' => true,
            'msg' => 'Ингредиенты получены'
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required'
        ]);

        $ingredient = new Ingredient();
        $ingredient->name = $request->name;
        $ingredient->description = $request->description;
        $ingredient->save();

        $ingredient->categories()->sync($request->category_ids);

        return response()->json([
            'status' => true,
            'msg' => 'Ингредиент добавлен'
        ]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required'
        ]);

        $ingredient = Ingredient::find($id);

        if (!$ingredient) {
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $ingredient->name = $request->name;
        $ingredient->description = $request->description;
        $ingredient->save();

        $ingredient->categories()->sync($request->category_ids);

        return response()->json([
            'status' => true,
            'msg' => 'Ингредиент редактирован'
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $ingredient = Ingredient::find($id);

        if (!$ingredient) {
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $ingredient->categories()->detach();
        $ingredient->dishes()->detach();
        $ingredient->custom_dishes()->detach();
        $ingredient->categories()->detach();
        $ingredient->blacklist()->detach();
        $ingredient->selects()->detach();

        $ingredient->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Ингредиент удален'
        ]);
    }

    public function setAnalog(Request $request){
        $analog = Ingredient::find($request->analog_id);
        $ingredient = Ingredient::find($request->id);

        if (!$analog || !$ingredient){
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $ingredient->analog_id = $request->analog_id;
        $ingredient->save();

        return response()->json([
            'status' => true,
            'msg' => 'Analog added!'
        ]);
    }
}

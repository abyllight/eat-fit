<?php

namespace App\Http\Controllers;

use App\Http\Resources\DishCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Ration;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DishController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(DishCollection::collection(Dish::where('is_custom', true)->orderBy('ration_id')->orderBy('name')->get()));
    }

    public function fetchDishes(): JsonResponse
    {
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();

        $cuisines = Cuisine::all();

        foreach ($cuisines as $cuisine) {
            $link = '/resto/api/v2/entities/products/list?types=DISH&parentIds=' . $cuisine->iiko_id . '&key=';
            $dishes = $iiko->doRequest($token, $link);
            $array = [];

            if (is_array($dishes)){
                foreach ($dishes as $dish) {
                    $first = substr($dish['name'], 0, 1);
                    if (!in_array($first, $array) && is_numeric($first)) {
                        Dish::updateOrCreate(
                            ['ration_id' => (int)$first],
                            [
                                'iiko_name' => substr($dish['name'], 4),
                                'name' => substr($dish['name'], 4),
                                'iiko_id' => $dish['id'],
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

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'ration_id' => 'required',
            'department_id' => 'required',
            //'code' => 'required',
            'ingredient_ids' => 'required'
        ]);

        $dish = new Dish();
        $dish->name = $request->name;
        $dish->ration_id = $request->ration_id;
        $dish->code = $request->code;
        $dish->department_id = $request->department_id;
        $dish->description = $request->description;
        $dish->cuisine_id = $request->has('cuisine_id') ? $request->cuisine_id : 0;
        $dish->is_custom = $request->has('is_custom') ? $request->is_custom : true;
        $dish->save();

        $dish->ingredients()->sync($request->ingredient_ids);

        return response()->json([
            'status' => true,
            'msg' => 'Блюдо добавлено'
        ]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'ration_id' => 'required',
            'department_id' => 'required',
            //'code' => 'required',
            'ingredient_ids' => 'required'
        ]);

        $dish = Dish::find($id);

        if($dish) {
            $dish->name = $request->name;
            $dish->ration_id = $request->ration_id;
            $dish->code = $request->code;
            $dish->department_id = $request->department_id;
            $dish->description = $request->description;
            $dish->cuisine_id = $request->has('cuisine_id') ? $request->cuisine_id : 0;

            $dish->save();

            $dish->custom_ingredients()->sync($request->ingredient_ids);

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

    public function destroy($id): JsonResponse
    {
        $dish = Dish::find($id);

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

    public function getDishesByRation($id): JsonResponse
    {
        $cuisine = Cuisine::where('is_on_duty', true)->first();
        $dish = $cuisine->dishes->where('ration_id', $id)->first();
        $dishes = Dish::where('ration_id', $id)->get();
        if ($dish){
            $dishes->prepend($dish);
        }
        return response()->json(DishCollection::collection($dishes));
    }

    public function getDishesByRations()
    {
        $cuisine = Cuisine::where('is_on_duty', true)->first();
        $rations = Ration::where('is_required', true)->get();
        $dishes = collect();

        foreach ($rations as $ration){
            $arr = Dish::where('ration_id', $ration->id)->where('is_custom', true)->get();
            $dish = $cuisine->dishes->where('ration_id', $ration->id)->first();
            $arr->prepend($dish);

            $dishes->push($arr);
        }

        return response()->json($dishes);
    }

    public function getDishesByCuisine($id)
    {
        $cuisine = Cuisine::find($id);

        if (!$cuisine){
            return response()->json([
                'status' => false,
                'msg' => 'Cuisine not found'
            ]);
        }

        $dishes = DishCollection::collection($cuisine->dishes->sortBy('ration_id'));

        return response()->json($dishes);
    }
}

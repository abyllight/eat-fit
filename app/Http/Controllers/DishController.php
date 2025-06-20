<?php

namespace App\Http\Controllers;

use App\Http\Resources\DishCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\DishIngredient;
use App\Models\DishSize;
use App\Models\Ration;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DishController extends Controller
{
    public function index(Request $request)
    {
        $items = Dish::where('is_custom', true);

        if ($request->name) {
            $items->where('name', 'like', '%' . $request->query('name') . '%');
        }

         $items = $items->orderBy('ration_id')
            ->orderBy('name')
            ->paginate(10);
        return DishCollection::collection($items);
    }

    public function show($id): JsonResponse
    {
        return response()->json(new DishCollection(Dish::find($id)));
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'ration_id' => 'required',
            //'department_id' => 'required',
            'ingredient_ids' => 'required'
        ]);

        $dish = new Dish();
        $dish->name = $request->name;
        $dish->ration_id = $request->ration_id;
        //$dish->code = $request->code;
        $dish->department_id = $request->department_id;
        $dish->description = $request->description;
        $dish->cuisine_id = $request->has('cuisine_id') ? $request->cuisine_id : 0;
        $dish->is_custom = $request->has('is_custom') ? $request->is_custom : true;
        $dish->save();

        $dish->ingredients()->sync($request->ingredient_ids);

        if ($request->sizes) {
            foreach ($request->sizes as $size) {
                $ds = new DishSize();
                $ds->dish_id = $dish->id;
                $ds->size = $size['id'];
                $ds->weight = $size['val'];
                $ds->save();
            }
        }

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
            'ingredient_ids' => 'required'
        ]);

        $dish = Dish::find($id);

        if($dish) {
            $dish->name = $request->name;
            $dish->ration_id = $request->ration_id;
            $dish->department_id = $request->department_id;
            $dish->description = $request->description;
            $dish->cuisine_id = $request->cuisine_id;

            $dish->save();

            if ($request->ingredient_ids) {

                if (!$request->is_custom) {
                    DishIngredient::where('dish_id', $dish->id)->update(['is_visible' => false]);

                    foreach ($request->ingredient_ids as $ingredient) {
                        $di = DishIngredient::where('dish_id', $dish->id)->where('ingredient_id', $ingredient)->first();

                        if ($di) {
                            $di->is_visible = true;
                            $di->save();
                        } else {
                            $dish->ingredients()->attach($ingredient);
                        }
                    }
                }else {
                    $dish->ingredients()->sync($request->ingredient_ids);
                }
            }

            $dish->sizes()->delete();

            foreach ($request->sizes as $size) {
                $ds = new DishSize();
                $ds->dish_id = $dish->id;
                $ds->size = $size['id'];
                $ds->weight = $size['val'];
                $ds->save();
            }

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

    public function fetchDishesByCuisineId($id): JsonResponse
    {
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();

        $cuisine = Cuisine::find($id);
        $c = $cuisine->sizes->first();

        $today = Carbon::today()->format('Y-m-d');

        $link = '/resto/api/v2/assemblyCharts/getAssembled?date=' . $today . '&productId=' . $c->iiko_id . '&key=';
        $dishes = $iiko->doRequest($token, $link);

        foreach ($dishes['assemblyCharts'][0]['items'] as $dish) {

            $l = '/resto/api/v2/entities/products/list?types=DISH&ids=' . $dish['productId'] . '&key=';
            $response = $iiko->doRequest($token, $l);

            $first = substr($response[0]['name'], 0, 1);
            $first = (int) $first;
            $name = substr($response[0]['name'], 4);

            $r = Ration::where('iiko_id', $first)->first();

            if (!$r) {
                return response()->json([
                    'status' => false,
                    'msg' => 'Нет рациона с iiko № = ' . $first
                ]);
            }

            $d = Dish::updateOrCreate(
                ['ration_id' => $r->id, 'cuisine_id' => $cuisine->id],
                [
                    'iiko_name' => $name,
                    'iiko_id' => $response[0]['id']
                ]
            );

            if (!$d->name){
                $d->name = $d->iiko_name;
                $d->save();
            }
        }

        return response()->json([
            'status' => true,
            'msg' => 'Блюда получены'
        ]);
    }

    public function getDishesByRation($id): JsonResponse
    {
        $cuisine = Cuisine::where('is_on_duty', true)->first();
        $dish = $cuisine->dishes->where('ration_id', $id)->first();
        $dishes = Dish::where('ration_id', $id)->get()->sortBy('name');
        if ($dish){
            $dishes->prepend($dish);
        }
        return response()->json(DishCollection::collection($dishes));
    }

    public function getDishesByRations(): JsonResponse
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
}

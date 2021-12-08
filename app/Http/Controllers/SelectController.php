<?php

namespace App\Http\Controllers;

use App\Http\Resources\IngredientCollection;
use App\Http\Resources\SelectCollection;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Select;
use Illuminate\Http\Request;

class SelectController extends Controller
{
    public function setDishToSelect($select_id, $dish_id){
        $select = Select::find($select_id);
        $dish = Dish::find($dish_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        if (!$dish){
            return response()->json([
                'status' => false,
                'msg' => 'Dish not found'
            ]);
        }

        $select->dish_id = $dish_id;
        $select->ingredients()->sync($dish->getIngredientIds());
        $select->save();

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function setDescriptionToSelect($select_id, Request $request){
        $select = Select::find($select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->description = $request->description;
        $select->save();

        return response()->json([
            'status' => true,
            'msg' => 'Информация сохранена',
            'description' => $select->description
        ]);
    }

    public function addIngredientFromSelect(Request $request){
        $select = Select::find($request->select_id);
        $ingredient = Ingredient::find($request->ingredient_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        if (!$ingredient){
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $select->ingredients()->attach($request->ingredient_id);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function removeIngredientFromSelect(Request $request){
        $select = Select::find($request->select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->ingredients()->detach($request->ingredient_id);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function replaceIngredientFromSelect(Request $request){
        $select = Select::find($request->select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $ingredient = Ingredient::find($request->ingredient_id);
        $ingredient->analog_id = $request->analog_id;
        $ingredient->save();

        $select->ingredients()->detach($request->ingredient_id);
        $select->ingredients()->attach($request->analog_id);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'select' => new SelectCollection($select),
            'ingredient' => new IngredientCollection($ingredient)
        ]);
    }

    public function returnIngredientFromSelect(Request $request){
        $select = Select::find($request->select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->ingredients()->detach($request->analog_id);
        $select->ingredients()->attach($request->ingredient_id);

        $ingredient = Ingredient::find($request->ingredient_id);
        $ingredient->analog_id = null;
        $ingredient->save();

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'select' => new SelectCollection($select),
            'ingredient' => new IngredientCollection($ingredient)
        ]);
    }
}

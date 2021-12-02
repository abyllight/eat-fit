<?php

namespace App\Http\Controllers;

use App\Http\Resources\SelectCollection;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Select;

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

    public function addIngredientFromSelect($select_id, $ingredient_id){
        $select = Select::find($select_id);
        $ingredient = Ingredient::find($ingredient_id);

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

        $select->ingredients()->attach($ingredient_id);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function removeIngredientFromSelect($select_id, $ingredient_id){
        $select = Select::find($select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->ingredients()->detach($ingredient_id);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }
}

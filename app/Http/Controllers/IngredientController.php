<?php

namespace App\Http\Controllers;

use App\Http\Resources\IngredientCollection;
use App\Models\Ingredient;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class IngredientController extends Controller
{
    public function index(): ResourceCollection
    {
        return IngredientCollection::collection(Ingredient::orderBy('name')->get());
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required'
        ]);

        $ingredient = new Ingredient();
        $ingredient->name = $request->name;
        $ingredient->save();

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
        $ingredient->save();

        return response()->json([
            'status' => true,
            'msg' => 'Ингредиент редактирован'
        ]);
    }

    public function delete($id): JsonResponse
    {
        $ingredient = Ingredient::find($id);

        if (!$ingredient) {
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $ingredient->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Ингредиент удален'
        ]);
    }
}

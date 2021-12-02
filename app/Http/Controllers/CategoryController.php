<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(CategoryCollection::collection(Category::orderBy('name')->get()));
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required'
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();

        $category->ingredients()->sync($request->ingredient_ids);

        return response()->json([
            'status' => true,
            'msg' => 'Категория добавлена'
        ]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required',
        ]);

        $category = Category::find($id);

        if($category) {
            $category->name = $request->name;
            $category->description = $request->description;
            $category->ingredients()->sync($request->ingredient_ids);

            $category->save();

            return response()->json([
                'status' => true,
                'msg' => 'Категория обновлена'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Category not found'
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $category = Category::find($id);

        if ($category) {
            $category->ingredients()->detach();
            $category->delete();

            return response()->json([
                'status' => true,
                'msg' => 'Категория удалена'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Category not found'
        ]);
    }
}

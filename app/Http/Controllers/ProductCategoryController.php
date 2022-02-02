<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(ProductCategory::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required'
        ]);

        $category = new ProductCategory();
        $category->title = $request->title;
        $category->is_active = true;

        if ($request->has('image') && $request->image !== null){
            $request->validate([
                'image' => 'image|mimes:jpeg,jpg,png|max:10000'
            ]);

            $category->image = $request->file('image')->store('categories', 'public');
        }

        $category->save();

        return response()->json([
            'status' => true,
            'msg' => 'Категория добавлена'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'title' => 'required'
        ]);

        $category = ProductCategory::find($id);

        if (!$category){
            return response()->json([
                'status' => false,
                'msg' => 'Категория не найдена'
            ]);
        }

        if ($request->has('image') && $request->image !== null){
            $request->validate([
                'image' => 'image|mimes:jpeg,jpg,png|max:10000'
            ]);

            Storage::disk('public')->delete($category->image);
            $category->image = $request->file('image')->store('categories', 'public');
        }

        $category->title = $request->title;
        $category->save();

        return response()->json([
            'status' => true,
            'msg' => 'Категория редактирована'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $category = ProductCategory::find($id);

        if (!$category){
            return response()->json([
                'status' => false,
                'msg' => 'Категория не найдена'
            ]);
        }

        foreach ($category->products as $product){
            $product->category_id = null;
            $product->save();
        }

        Storage::disk('public')->delete($category->image);

        $category->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Категория удалена'
        ]);
    }
}

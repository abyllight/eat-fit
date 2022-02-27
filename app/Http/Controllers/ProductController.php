<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function getProducts(): JsonResponse
    {
        return response()->json(ProductCollection::collection(Product::all()));
    }

    public function getProduct($id): JsonResponse
    {
        $product = Product::find($id);

        if (!$product){
            return response()->json([
                'status' => false,
                'msg' => 'Продукт не найден'
            ]);
        }

        return response()->json(new ProductCollection($product));
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(ProductCollection::collection(Product::all()));
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
            'title' => 'required',
            'category_id' => 'required',
            'brand_id' => 'required',
            'image' => 'image|required|max:10000',
            'price' => 'required'
        ]);

        $product = new Product();
        $product->title = $request->title;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->description = $request->description;
        $product->composition = $request->composition;
        $product->image = $request->file('image')->store('products', 'public');
        $product->price = $request->price;
        $product->wholesale_price = $request->wholesale_price;
        $product->weight = $request->weight;
        $product->kcal = $request->kcal;
        $product->fat = $request->fat;
        $product->protein = $request->protein;
        $product->carbohydrate = $request->carbohydrate;
        $product->is_active = true;
        $product->save();

        return response()->json([
            'status' => true,
            'msg' => 'Продукт добавлен'
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
            'title' => 'required',
            'category_id' => 'required',
            'brand_id' => 'required',
            'price' => 'required'
        ]);

        $product = Product::find($id);

        if (!$product){
            return response()->json([
                'status' => false,
                'msg' => 'Продукт не найден'
            ]);
        }

        if ($request->has('image') && $request->image !== null && $request->image !== "null" && $request->image !== $product->image){
            $request->validate([
                'image' => 'image|required|max:10000'
            ]);

            Storage::disk('public')->delete($product->image);
            $product->image = $request->file('image')->store('products', 'public');
        }

        $product->title = $request->title;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->description = $request->description;
        $product->composition = $request->composition;
        $product->price = $request->price;
        $product->wholesale_price = $request->wholesale_price;
        $product->weight = $request->weight;
        $product->kcal = $request->kcal;
        $product->fat = $request->fat;
        $product->protein = $request->protein;
        $product->carbohydrate = $request->carbohydrate;
        $product->save();

        return response()->json([
            'status' => true,
            'msg' => 'Продукт редактирован'
        ]);
    }

    public function activate($id): JsonResponse
    {
        $product = Product::find($id);

        if (!$product){
            return response()->json([
                'status' => false,
                'msg' => 'Продукт не найден'
            ]);
        }

        $product->is_active = !$product->is_active;
        $product->save();

        return response()->json([
            'status' => true,
            'msg' => 'Изменен статус продукта'
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
        $product = Product::find($id);

        if (!$product){
            return response()->json([
                'status' => false,
                'msg' => 'Продукт не найден'
            ]);
        }

        $product->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Продукт удален'
        ]);
    }
}

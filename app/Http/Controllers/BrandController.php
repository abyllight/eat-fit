<?php

namespace App\Http\Controllers;

use App\Http\Resources\BrandCollection;
use App\Models\Brand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BrandController extends Controller
{
    public function getBrands(): JsonResponse
    {
        return response()->json(BrandCollection::collection(Brand::all()));
    }

    public function getBrand($id): JsonResponse
    {
        $brand = Brand::find($id);

        if (!$brand){
            return response()->json([
                'status' => false,
                'msg' => 'Brand не найден'
            ]);
        }

        return response()->json(new BrandCollection($brand));
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(Brand::all());
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

        $brand = new Brand();
        $brand->title = $request->title;
        $brand->is_active = true;

        if ($request->has('image') && $request->image !== null && $request->image !== "null"){
            $request->validate([
                'image' => 'image|mimes:jpeg,jpg,png|max:10000'
            ]);

            $brand->image = $request->file('image')->store('brands', 'public');
        }

        $brand->save();

        return response()->json([
            'status' => true,
            'msg' => 'Брэнд добавлен'
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

        $brand = Brand::find($id);

        if (!$brand){
            return response()->json([
                'status' => false,
                'msg' => 'Брэнд не найден'
            ]);
        }

        if ($request->has('image') && $request->image !== null && $request->image !== "null" && $request->image !== $brand->image){
            $request->validate([
                'image' => 'image|mimes:jpeg,jpg,png|max:10000'
            ]);

            Storage::disk('public')->delete($brand->image);
            $brand->image = $request->file('image')->store('brands', 'public');
        }

        $brand->title = $request->title;
        $brand->save();

        return response()->json([
            'status' => true,
            'msg' => 'Брэнд редактирован'
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
        $brand = Brand::find($id);

        if (!$brand){
            return response()->json([
                'status' => false,
                'msg' => 'Брэнд не найден'
            ]);
        }

        foreach ($brand->products as $product){
            $product->brand_id = null;
            $product->save();
        }

        Storage::disk('public')->delete($brand->image);

        $brand->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Брэнд удален'
        ]);
    }
}

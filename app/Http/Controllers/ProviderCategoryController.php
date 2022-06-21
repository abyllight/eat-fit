<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProviderCategoryCollection;
use App\Models\PCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProviderCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $categories = PCategory::where('city_id',  Auth::user()->city_id)->get();
        return response()->json(ProviderCategoryCollection::collection($categories));
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
            'name' => 'required',
            'ingredients' => 'required'
        ]);

        $item = new PCategory();
        $item->name = $request->name;
        $item->city_id = Auth::user()->city_id;

        $item->save();

        $item->ingredients()->sync($request->ingredients);

        return response()->json([
            'status' => true,
            'msg' => 'Категория добавлена'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'ingredients' => 'required'
        ]);

        $item = PCategory::find($id);

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Category not found!'
            ]);
        }

        $item->name = $request->name;
        $item->city_id = Auth::user()->city_id;

        $item->save();

        $item->ingredients()->sync($request->ingredients);

        return response()->json([
            'status' => true,
            'msg' => 'Категория обновлена!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $item = PCategory::find($id);

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Category not found'
            ]);
        }

        $item->ingredients()->detach();
        $item->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Category deleted'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleCollection;
use App\Models\BuilderCategory;
use App\Models\Promocode;
use App\Models\Role;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BuilderCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(BuilderCategory::all());
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
            'name' => 'required|unique:builder_categories',
            'slug' => 'required|unique:builder_categories'
        ]);

        $item = new BuilderCategory();
        $item->name = $request->name;
        $item->slug = $request->slug;
        $item->is_active = true;
        $item->save();

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
            'name' => 'required|unique:builder_categories,name,' . $id,
            'slug' => 'required|unique:builder_categories,slug,' . $id
        ]);

        $item = BuilderCategory::find($id);

        if ($item) {
            $item->name = $request->name;
            $item->slug = $request->slug;
            $item->save();

            return response()->json([
                'status' => true,
                'msg' => 'Category updated'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Category not found'
        ]);
    }

    public function activate(int $id): JsonResponse
    {
        $item = BuilderCategory::find($id);

        if ($item) {
            $item->is_active = !$item->is_active;
            $item->save();

            return response()->json([
                'status' => true,
                'msg' => $item->is_active ? 'активирован' : 'деактивирован'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Category not found'
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
        $item = BuilderCategory::find($id);

        if ($item) {

            $item->delete();

            return response()->json([
                'status' => true,
                'msg' => 'Category deleted'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Category not found'
        ]);
    }
}

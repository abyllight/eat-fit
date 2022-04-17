<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleCollection;
use App\Models\BuilderCategory;
use App\Models\BuilderVariable;
use App\Models\Role;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class BuilderValueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(BuilderVariable::all());
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
            'category_id' => 'required',
            'name' => 'required|unique:builder_values',
            'slug' => 'required|unique:builder_values',
            'image' => 'image|required|max:10000'
        ]);

        $item = new BuilderVariable();
        $item->category_id = $request->category_id;
        $item->name = $request->name;
        $item->slug = $request->slug;
        $item->image = $request->file('image')->store('b_values', 'public');
        $item->save();

        return response()->json([
            'status' => true,
            'msg' => 'Value добавлена'
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
            'category_id' => 'required',
            'name' => 'required|unique:builder_values,name,' . $id,
            'slug' => 'required|unique:builder_values,slug,' . $id
        ]);

        $item = BuilderVariable::find($id);

        if ($item) {
            if ($request->has('image') && $request->image !== null && $request->image !== "null" && $request->image !== $item->image){
                $request->validate([
                    'image' => 'image|required|max:10000'
                ]);

                Storage::disk('public')->delete($item->image);
                $item->image = $request->file('image')->store('b_values', 'public');
            }

            $item->category_id = $request->category_id;
            $item->name = $request->name;
            $item->slug = $request->slug;
            $item->save();

            return response()->json([
                'status' => true,
                'msg' => 'Value updated'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Value not found'
        ]);
    }

    public function activate(int $id): JsonResponse
    {
        $item = BuilderVariable::find($id);

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
            'msg' => 'Value not found'
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
        $item = BuilderVariable::find($id);

        if ($item) {

            $item->delete();

            return response()->json([
                'status' => true,
                'msg' => 'Value deleted'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Value not found'
        ]);
    }
}

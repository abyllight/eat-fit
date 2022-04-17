<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleCollection;
use App\Models\BuilderCategory;
use App\Models\BuilderMix;
use App\Models\BuilderVariable;
use App\Models\Role;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class BuilderMixController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(BuilderMix::all());
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
            'slug' => 'required|unique:builder_values',
            'image' => 'image|required|max:10000'
        ]);

        $item = new BuilderMix();
        $item->slug = $request->slug;
        $item->image = $request->file('image')->store('b_mixes', 'public');
        $item->save();

        return response()->json([
            'status' => true,
            'msg' => 'Mix добавлена'
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
            'slug' => 'required|unique:builder_values,slug,' . $id
        ]);

        $item = BuilderMix::find($id);

        if ($item) {

            if ($request->has('image') && $request->image !== null && $request->image !== "null" && $request->image !== $item->image){
                $request->validate([
                    'image' => 'image|required|max:10000'
                ]);

                Storage::disk('public')->delete($item->image);
                $item->image = $request->file('image')->store('b_mixes', 'public');
            }

            $item->slug = $request->slug;
            $item->save();

            return response()->json([
                'status' => true,
                'msg' => 'Mix updated'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Mix not found'
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
        $item = BuilderMix::find($id);

        if ($item) {

            $item->delete();

            return response()->json([
                'status' => true,
                'msg' => 'Mix deleted'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Mix not found'
        ]);
    }
}

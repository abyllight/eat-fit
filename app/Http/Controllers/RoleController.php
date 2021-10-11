<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleCollection;
use App\Models\Role;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(RoleCollection::collection(Role::all()));
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
            'name' => 'required|unique:roles',
            'slug' => 'required|unique:roles'
        ]);

        $role = new Role();
        $role->name = $request->name;
        $role->slug = $request->slug;
        $role->save();

        return response()->json([
            'status' => true,
            'msg' => 'Role created'
        ]);
    }

    public function edit($id): JsonResponse
    {
        $role = Role::find($id);

        if ($role) {
            return response()->json([
                'status' => true,
                'msg' => 'OK',
                'role' => $role
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Role not found',
            'role' => null
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
            'name' => 'required|unique:roles,name,' . $id,
            'slug' => 'required|unique:roles,slug,' . $id
        ]);

        $role = Role::find($id);

        if ($role) {
            $role->name = $request->name;
            $role->slug = $request->slug;
            $role->save();

            return response()->json([
                'status' => true,
                'msg' => 'Role updated'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Role not found'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy(int $id): JsonResponse
    {
        $role = Role::find($id);

        if ($role) {
            $role->delete();

            return response()->json([
                'status' => true,
                'msg' => 'Role deleted'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Role not found'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProviderCollection;
use App\Http\Resources\RoleCollection;
use App\Models\Provider;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $providers = Provider::where('city_id',  Auth::user()->city_id)->get();
        return response()->json(ProviderCollection::collection($providers));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $request->phone = User::uglifyMobile($request->phone);

        $request->validate([
            'name' => 'required',
            'phone' => 'required|min:11',
            'city_id' => 'required'
        ]);

        $item = new Provider();
        $item->name = $request->name;
        $item->phone = $request->phone;
        $item->city_id = $request->city_id;
        $item->address = $request->address;
        $item->description = $request->description;

        $item->save();

        return response()->json([
            'status' => true,
            'msg' => 'Поставщик добавлен'
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
        $request->phone = User::uglifyMobile($request->phone);

        $request->validate([
            'name' => 'required',
            'phone' => 'required|min:11',
            'city_id' => 'required'
        ]);

        $item = Provider::find($id);

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Provider not found!'
            ]);
        }

        $item->name = $request->name;
        $item->phone = $request->phone;
        $item->city_id = $request->city_id;
        $item->address = $request->address;
        $item->description = $request->description;

        $item->save();

        return response()->json([
            'status' => true,
            'msg' => 'Поставщик обновлен!'
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
        $item = Provider::find($id);

        if (!$item) {
            return response()->json([
                'status' => false,
                'msg' => 'Provider not found'
            ]);
        }

        $item->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Provider deleted'
        ]);
    }
}

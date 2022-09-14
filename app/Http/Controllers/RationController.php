<?php

namespace App\Http\Controllers;

use App\Http\Resources\RationCollection;
use App\Models\Cuisine;
use App\Models\Ration;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RationController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(RationCollection::collection(Ration::all()));
    }

    public function getRequiredRations(): JsonResponse
    {
        return response()->json(RationCollection::collection(Ration::where('is_required', true)->get()));
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'code' => 'required',
            'department_id' => 'required'
        ]);

        $ration = new Ration();
        $ration->name = $request->name;
        $ration->code = $request->code;
        $ration->department_id = $request->department_id;
        $ration->is_required = $request->is_required;
        $ration->save();

        return response()->json([
            'status' => true,
            'msg' => 'Добавлен новый рацион'
        ]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'code' => 'required',
            'department_id' => 'required'
        ]);

        $ration = Ration::find($id);

        if ($ration){
            $ration->code = $request->code;
            $ration->department_id = $request->department_id;
            $ration->name = $request->name;
            $ration->is_required = $request->is_required;
            $ration->save();

            return response()->json([
                'status' => true,
                'msg' => 'Рацион обновлен'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Рацион не найден'
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $ration = Ration::find($id);

        if ($ration){
            $ration->delete();

            return response()->json([
                'status' => true,
                'msg' => 'Рацион удален'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Рацион не найден'
        ]);
    }
}

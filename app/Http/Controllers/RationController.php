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
        return response()->json(RationCollection::collection(Ration::orderBy('position')->get()));
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'code' => 'required',
            'department_id' => 'required',
            'iiko_id' => 'unique:rations,iiko_id'
        ]);

        $ration = new Ration();
        $ration->name = $request->name;
        $ration->code = $request->code;
        $ration->iiko_id = $request->iiko_id;
        $ration->department_id = $request->department_id;
        $ration->tableware_id = $request->tableware_id;
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
            'department_id' => 'required',
            'iiko_id' => 'unique:rations,iiko_id,' . $id
        ]);

        $ration = Ration::find($id);

        if ($ration){
            $ration->code = $request->code;
            $ration->department_id = $request->department_id;
            $ration->name = $request->name;
            $ration->iiko_id = $request->iiko_id;
            $ration->tableware_id = $request->tableware_id;
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
            $dishes = $ration->dishes;

            if ($dishes) {
                foreach ($dishes as $dish) {
                    $dish->ration_id = null;
                    $dish->save();
                }
            }

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

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

    public function getRequired($id): JsonResponse
    {
        $cuisine = Cuisine::find($id);

        if (!$cuisine){
            return response()->json([
                'status' => true,
                'msg' => 'Кухня не найдена'
            ]);
        }

        $rations = Ration::where('is_required', true)->get();
        $dish_rations = $cuisine->dishes->map(function ($item){
            return $item->ration;
        });
        $diff = $rations->diff($dish_rations);

        return response()->json(RationCollection::collection($diff->sortBy('position')));
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required'
        ]);

        $ration = new Ration();
        $ration->name = $request->name;
        $ration->is_required = $request->is_required;
        $ration->position = Ration::max('position') + 1;
        $ration->save();

        return response()->json([
            'status' => true,
            'msg' => 'Добавлен новый рацион'
        ]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required'
        ]);

        $ration = Ration::find($id);

        if ($ration){

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

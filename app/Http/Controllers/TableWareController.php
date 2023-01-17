<?php

namespace App\Http\Controllers;

use App\Models\TableWare;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class TableWareController extends Controller
{
    public function index(): JsonResponse
    {
        $tableware = TableWare::all();

        return response()->json([
            'status' => true,
            'data' => $tableware
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required'
        ]);

        $tableware = new TableWare();
        $tableware->name = $request->name;

        if ($request->has('img') && !$request->img) {
            $tableware->img = $request->file('img')->store('tableware', 'public');
        }

        $tableware->size = $request->size;
        $tableware->save();

        return response()->json([
            'status' => true,
            'msg' => 'Посуда успешно добавлена'
        ]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required'
        ]);

        $tableware = TableWare::find($id);

        if (!$tableware) {
            return response()->json([
                'status' => true,
                'msg' => 'Посуда не найдена'
            ]);
        }

        $tableware->name = $request->name;
        $tableware->size = $request->size;

        if ($request->has('img') && !$request->img){
            $request->validate([
                'img' => 'image|required|max:10000',
            ]);

            Storage::disk('public')->delete($tableware->img);
            $tableware->img = $request->file('img')->store('tableware', 'public');
        }

        $tableware->save();

        return response()->json([
            'status' => true,
            'msg' => 'Данные посуды обновлены'
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $tableware = TableWare::find($id);

        if (!$tableware) {
            return response()->json([
                'status' => true,
                'msg' => 'Посуда не найдена'
            ]);
        }

        if ($tableware->rations()->exists()){
            foreach ($tableware->rations as $ration) {
                $ration->tableware_id = null;
                $ration->save();
            }
        }

        if ($tableware->selects()->exists()){
            foreach ($tableware->selects as $select) {
                $select->tableware_id = null;
                $select->save();
            }
        }

        $tableware->delete();

        return response()->json([
            'status' => true,
            'msg' => 'Tableware deleted'
        ]);
    }
}

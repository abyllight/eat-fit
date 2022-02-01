<?php

namespace App\Http\Controllers;

use App\Models\Promocode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PromocodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(Promocode::orderBy('name')->get());
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
            'name' => 'required|unique:promocodes,name',
            'code' => 'required|unique:promocodes,code',
            'sum' => 'required|min:1',
            'date_from' => 'required|date|date_format:Y-m-d|after_or_equal:today',
            'date_to' => 'required|date|date_format:Y-m-d|after_or_equal:date_from',
        ]);

        $promocode = new Promocode();
        $promocode->name = $request->name;
        $promocode->code = $request->code;
        $promocode->sum = $request->sum;
        $promocode->is_fixed = $request->is_fixed;
        $promocode->date_to = $request->date_to;
        $promocode->date_from = $request->date_from;
        $promocode->is_active = true;
        $promocode->save();

        return response()->json([
            'status' => true,
            'msg' => 'Промокод успешно добавлен'
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
            'name' => 'required|unique:promocodes,name,' . $id,
            'code' => 'required|unique:promocodes,code,' . $id,
            'sum' => 'required|min:1',
            'date_from' => 'required|date|date_format:Y-m-d|after_or_equal:today',
            'date_to' => 'required|date|date_format:Y-m-d|after_or_equal:date_from',
        ]);

        $promocode = Promocode::find($id);

        if ($promocode) {
            $promocode->name = $request->name;
            $promocode->code = $request->code;
            $promocode->sum = $request->sum;
            $promocode->is_fixed = $request->is_fixed;
            $promocode->date_to = $request->date_to;
            $promocode->date_from = $request->date_from;
            $promocode->save();

            return response()->json([
                'status' => true,
                'msg' => 'Промокод успешно обновлен'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Промокод не найден'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function activate(int $id): JsonResponse
    {
        $promocode = Promocode::find($id);

        if ($promocode) {
            $promocode->is_active = !$promocode->is_active;
            $promocode->save();

            return response()->json([
                'status' => true,
                'msg' => $promocode->is_active ? 'Промокод активирован' : 'Промокод деактивирован'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Промокод не найден'
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
        $promocode = Promocode::find($id);

        if ($promocode) {
            $promocode->delete();

            return response()->json([
                'status' => true,
                'msg' => 'Промокод удален'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Промокод не найден'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $promocode
     * @return JsonResponse
     */
    public function check(string $promocode): JsonResponse
    {
        $promocode = Promocode::where('code', $promocode)->first();

        if ($promocode) {
            return response()->json([
                'status' => true,
                'msg' => 'Промокод применен'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Промокод не найден'
        ]);
    }
}

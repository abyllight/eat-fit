<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderSelectCollection;
use App\Models\Cuisine;
use App\Models\Order;
use App\Models\Ration;
use Illuminate\Http\Request;

class StatController extends Controller
{
    public function index() {
        $items = Order::where('type', Order::EAT_FIT_LITE)
            ->where('is_active', true)
            ->get();

        $lite = [
            'total' => $items->count(),
            'xs'    => $items->where('size', Order::XS)->count(),
            's'     => $items->where('size', Order::S)->count(),
            'm'     => $items->where('size', Order::M)->count(),
            'l'     => $items->where('size', Order::L)->count(),
            'xl'    => $items->where('size', Order::XL)->count()
        ];

        $items = Order::whereIn('type', [Order::EAT_FIT_SELECT, Order::EAT_FIT_SELECT_MAX])
            ->where('is_active', true)
            ->get();

        $rations = Ration::where('is_extra', false)->get();

        $select = [
            'total' => $items->count(),
            'xs'    => $items->where('size', Order::XS)->count(),
            's'     => $items->where('size', Order::S)->count(),
            'm'     => $items->where('size', Order::M)->count(),
            'l'     => $items->where('size', Order::L)->count(),
            'xl'    => $items->where('size', Order::XL)->count()
        ];

        return response()->json([
            'status' => true,
            'lite' => $lite,
            'select' => $select
        ]);
    }
}

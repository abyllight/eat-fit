<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Ration;
use App\Models\Select;

class RaskladController extends Controller
{
    public function index() {
        $sizes = [
            [
                'id' => Order::XS,
                'name' => 'XS'
            ],
            [
                'id' => Order::S,
                'name' => 'S'
            ],
            [
                'id' => Order::M,
                'name' => 'M'
            ],
            [
                'id' => Order::L,
                'name' => 'L'
            ],
            [
                'id' => Order::XL,
                'name' => 'Xl'
            ]
        ];

        $arr = [];
        $rations = Ration::all();

        foreach ($sizes as $size) {

            $orders = Order::whereIn('type', [Order::EAT_FIT_SELECT,Order::EAT_FIT_SELECT_MAX])
                ->where('is_active', true)
                ->where('size', $size['id'])
                ->orderBy('name')
                ->get();

            $arr[] = [
                'size' => $size['name'],
                'orders' => []
            ];
        }

        foreach ($rations as $ration) {
            $arr[] = [
                'r_name' => $ration->name
            ];

            $selects = Select::whereDate('created_at', Select::max('created_at'))
                ->where('ration_id', 1)
                ->orderBy('ration_id')
                ->get()
                ->groupBy(['code']);
        }

    }
}

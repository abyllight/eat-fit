<?php

namespace App\Http\Controllers;

use App\Models\Select;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BroadcastMenuController extends Controller
{
    public function index() {
        $selects = Select::whereDate('created_at', Carbon::today())->get()->groupBy('order_id');
        $text = '';

        foreach ($selects as $select) {

        }
    }
}

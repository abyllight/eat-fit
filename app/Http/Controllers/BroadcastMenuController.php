<?php

namespace App\Http\Controllers;

use App\Models\Cuisine;
use Illuminate\Http\Request;

class BroadcastMenuController extends Controller
{
    public function index() {
        $cuisines = Cuisine::all();

        return response()->json([
            'status' => true,
            'data' => $cuisines
        ]);
    }

    public function addImage(Request $request) {
        $cuisine = Cuisine::find($request->c_id);

        if ($request->type === 1) {

        }
    }
}

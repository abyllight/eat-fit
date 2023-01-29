<?php

namespace App\Http\Controllers;

use App\Models\Select;
use App\Models\UserGroup;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CardGroupController extends Controller
{
    public function index() {
        Select::generateCode();

        $user = Auth::user();
        $arr = [];
        $groups = [];

        $select_groups = Select::whereDate('created_at', Carbon::today())->where('group_id', null);

        if ($user->kd_id !== null) {
            $select_groups = $select_groups->where('dep_id', $user->kd_id);
        }

        $select_groups = $select_groups->get()->groupBy('code');

        foreach ($select_groups as $key => $group) {
            $arr[$key] = [
                'code' => $group[0]->code,
                'dep_id' => $user->kd_id,
                'color' => $this->getColor($group[0]->status),
                'dish_name' => $group[0]->dish_name,
                'description' => $group[0]->description,
                'ingredients' => $group[0]->ingredients
            ];

            foreach ($group as $item) {
                $arr[$key]['items'][] = [
                    'id' => $item->id,
                    'weight' => $item->weight,
                    'is_prepared' => $item->is_prepared
                ];
            }
        }

        foreach ($user->groups as $i => $group) {
            $selects = $group->selects->groupBy('code');

            $groups[$i] = [
                'id' => $group->id,
                'name' => $group->name
            ];

            foreach ($selects as $key => $select) {
                $groups[$i]['cards'][$key] = [
                    'code' => $select[0]->code,
                    'dep_id' => $user->kd_id,
                    'color' => $this->getColor($select[0]->status),
                    'dish_name' => $select[0]->dish_name,
                    'description' => $select[0]->description,
                    'ingredients' => $select[0]->ingredients
                ];

                foreach ($select as $item) {
                    $groups[$i]['cards'][$key]['items'][] = [
                        'id' => $item->id,
                        'weight' => $item->weight,
                        'is_prepared' => $item->is_prepared
                    ];
                }
            }
        }

        return response()->json([
            'status' => true,
            'cards' => $arr,
            'groups' => $groups
        ]);
    }

    public function getColor($status): string
    {
        $color = 'lime lighten-2';

        if ($status === Select::REPLACEMENT){
            $color = 'red lighten-3';
        }

        if ($status=== Select::WITHOUT){
            $color = 'yellow accent-4';
        }

        if ($status === Select::EXTRA){
            $color = 'light-blue accent-1';
        }

        return $color;
    }

    public function store(Request $request): JsonResponse
    {
        $group = new UserGroup();
        $group->user_id = Auth::user()->id;
        $group->name = $request->name;
        $group->save();

        return response()->json(Auth::user()->groups);
    }

    public function destroy($id): JsonResponse
    {
        $group = UserGroup::find($id);

        $selects = Select::where('group_id', $id)->get();

        foreach ($selects as $select) {
            $select->group_id = null;
            $select->save();
        }

        $group->delete();

        return response()->json(Auth::user()->groups);
    }

    public function changeDepartment(Request $request) {
        $items = $request->items;

        foreach ($items as $item) {
            $select = Select::find($item['id']);

            $select->group_id = null;
            $select->dep_id = $request->dep_id;
            $select->save();
        }
    }

    public function sortCards(Request $request) {
        $selects = Select::whereDate('created_at', Carbon::today())->where('code', $request->code)->get();

        $g_id = $request->g_id === '0' ? null : $request->g_id;

        foreach ($selects as $select) {
            $select->group_id = $g_id;
            $select->save();
        }
    }
}

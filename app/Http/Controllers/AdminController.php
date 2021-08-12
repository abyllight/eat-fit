<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use App\Models\Week;
use Illuminate\Http\JsonResponse;

class AdminController extends Controller
{
    public function webhook(): JsonResponse
    {
        try {
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $success = $amo->lead->apiList([
                'limit_rows'=>500,
                'status' => 142,
                'date_create' => [
                    'from' => 1626285600,
                    'to' => 1627668000
                ]
            ]);
            return response()->json(count($success));
            //стоимость курса 456321
            foreach ($success as $item){
                $course = null;

                foreach ($item['custom_fields'] as $field){
                    if ($field['id'] === 456321){
                        $course = (int)$field["values"][0]["value"];
                    }
                }
                //dump($item['name'], $item['price'], $course);
                if($course != null || $course == 0){
                    $lead = $amo->lead;
                    $lead['price'] = $course;
                    $lead->apiUpdate((int)$item['id']);
                }
            }
            return response()->json('Success');
        }catch (\AmoCRM\Exception $e){
            return response()->json($e->getMessage());
        }
    }

    public function setWeek() {
        $week = Week::find(1);

        $week->is_weekend = !$week->is_weekend;
        $week->save();
    }
}

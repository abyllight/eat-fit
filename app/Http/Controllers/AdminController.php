<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use App\Http\Resources\CuisineCollection;
use App\Jobs\PlusOne;
use App\Models\Order;
use App\Models\Week;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class AdminController extends Controller
{
    public function webhook(): JsonResponse
    {
        try {
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $success = $amo->lead->apiList([
                'limit_rows' => 500,
                'status' => 142,
                'date_create' => [
                    'from' => strtotime(Carbon::yesterday()),
                    'to' => strtotime(Carbon::now())
                ]
            ]);

            //return response()->json(count($success));

            if (count($success) <= 0) {
                return response()->json('Success');
            }
            //стоимость курса 456321
            foreach ($success as $item) {
                $course = null;

                foreach ($item['custom_fields'] as $field) {
                    if ($field['id'] === 456321) {
                        $course = (int)$field["values"][0]["value"];
                    }
                }
                //var_dump($item['name'], $item['price'], $course);
                if($course != null || $course == 0) {
                    $lead = $amo->lead;
                    $lead['price'] = $course;
                    $lead->apiUpdate((int)$item['id']);
                }
            }
            return response()->json('Success');
        }catch (\AmoCRM\Exception $e){
            return response()->json([
                'code' => $e->getCode(),
                'msg' => $e->getMessage()
            ]);
        }
    }

    public function getWeek(): JsonResponse
    {
        $week = Week::find(1);

        return response()->json([
            'is_weekend' => $week->is_weekend
        ]);
    }

    public function setWeek() {
        $week = Week::find(1);

        $week->is_weekend = !$week->is_weekend;
        $week->save();
    }
}

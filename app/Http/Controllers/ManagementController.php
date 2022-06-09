<?php

namespace App\Http\Controllers;

use App\Models\Management;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use AmoCRM\Client;
use AmoCRM\Exception;

class ManagementController extends Controller
{
    public function index(): JsonResponse
    {
        $plus = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', 1)->exists();
        $trial = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', 2)->exists();
        $work = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', 3)->exists();

        return response()->json([
            'plus' => $plus,
            'trial' => $trial,
            'work' => $work
        ]);
    }

    public function plusOne(): JsonResponse
    {
        dd('');
        try {
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $delivered = $amo->lead->apiList([
                'limit_rows' => 500,
                'status' => 27248140, //Delivered
            ]);

            foreach ($delivered as $value) {

                $day = 0;
                $course = 0;

                foreach ($value['custom_fields'] as $field) {
                    switch ($field["id"]) {
                        case '328089': //Day
                            $day = (int) $field["values"][0]["value"];
                            break;
                        case '321235': //Course
                            $course = (int) $field["values"][0]["value"];
                            break;
                    }
                }

                if($day >= $course) {
                    $lead = $amo->lead;
                    $lead['status_id'] = 16567015;
                    $lead->apiUpdate((int) $value['id'], 'now');

                }else if($day === 3 || $day === 11 || $day === 17 || $day === $course-1){
                    $day++;
                    $lead = $amo->lead;
                    $lead->addCustomField(328089, $day);
                    $lead->apiUpdate((int) $value['id'], 'now');

                    $task = $amo->task;
                    $task['element_id'] = $value['id'];
                    $task['element_type'] = 2;
                    $task['task_type'] = 1;
                    $task['text'] = 'Получить обратную связь от клиента';
                    $task['complete_till'] = '23:59';
                    $task['responsible_user_id'] = $value['responsible_user_id'];
                    $task->apiAdd();
                }else {
                    $day++;
                    $lead = $amo->lead;
                    $lead->addCustomField(328089, $day);
                    $lead->apiUpdate((int)$value['id'], 'now');
                }
            }

            $management = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', 1)->first();

            if(!$management){
                $m = new Management();
                $m->type = 1;
                $m->save();
            }

            return response()->json([
                'status' => true
            ]);
        } catch(Exception $e){
            return response()->json([
                'status' => false,
                'msg' => $e->getCode() . '. ' . $e->getMessage()
            ]);
        }
    }

    public function shift(int $status, int $type): JsonResponse
    {
        try{
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $items = $amo->lead->apiList([
                'limit_rows' => 500,
                'status' => $status,
            ]);

            foreach ($items as $item){
                $budget = (int)$item['price'];
                $otrabotano = null;

                $order = Order::where('amo_id', $item['id'])->orderBy('created_at','desc')->first();

                foreach ($item['custom_fields'] as $field){
                    if ($field['id'] === 495367){
                        $otrabotano = (int)$field["values"][0]["value"];
                    }
                }

                $lead = $amo->lead;

                if ($otrabotano != null){
                    $otrabotano += $budget;

                    $lead->addCustomField(495367,
                        $otrabotano
                    );
                }else{
                    $lead->addCustomField(495367,
                        $budget
                    );
                }

                if($order && $order->user) {
                    $lead->addCustomField(489499,
                        $order->user->phone
                    );
                    $lead->addCustomField(489497,
                        $order->user->name
                    );
                }

                $lead->apiUpdate((int)$item['id'], 'now');
            }

            $management = Management::whereDate('created_at', Carbon::now()->toDateString())->where('action', 2)->first();

            if(!$management){
                $m = new Management();
                $m->type = $type;
                $m->save();
            }

            return response()->json([
                'status' => true,
                'msg' => 'Success!'
            ]);
        }catch(Exception $e){
            return response()->json([
                'status' => false,
                'msg' => $e->getCode() . '. ' . $e->getMessage()
            ]);
        }
    }

    public function shiftTrial(): JsonResponse
    {
        $status = 16536847;
        $type = 2;
        return $this->shift($status, $type);
    }

    public function shiftWork(): JsonResponse
    {
        $status = 16566964;
        $type = 3;
        return $this->shift($status, $type);
    }
}

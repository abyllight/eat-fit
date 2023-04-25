<?php

namespace App\Http\Controllers;

use App\Models\Management;
use App\Models\Order;
use App\Models\Report;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use AmoCRM\Client;
use AmoCRM\Exception;

class ManagementController extends Controller
{
    public function index(): JsonResponse
    {
        $plus = Management::whereDate('created_at', Carbon::now()->toDateString())
            ->where('type', Management::PLUS_TYPE)
            ->exists();

        $saturday = Management::whereDate('created_at', Carbon::now()->toDateString())
            ->where('type', Management::PLUS_SATURDAY_TYPE)
            ->exists();

        $trial = Management::whereDate('created_at', Carbon::now()->toDateString())
            ->where('type', Management::TRIAL_TYPE)
            ->exists();

        $work = Management::whereDate('created_at', Carbon::now()->toDateString())
            ->where('type', Management::WORK_TYPE)
            ->exists();

        $select = Management::whereDate('created_at', Carbon::now()->toDateString())
            ->where('type', Management::SEND_SELECT_TYPE)
            ->exists();

        return response()->json([
            'plus' => $plus,
            'trial' => $trial,
            'work' => $work,
            'saturday' => $saturday,
            'select' => $select
        ]);
    }

    public function getFact(): JsonResponse
    {
        $fact = Management::whereDate('created_at', Carbon::now()->toDateString())
            ->where('type', Management::FACT_TYPE)
            ->exists();

        return response()->json([
            'fact' => $fact,
        ]);
    }


    public function plusOne(int $status, int $type, bool $has_extra = false): array
    {
        try {
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $array = $amo->lead->apiList([
                'limit_rows' => 500,
                'status' => $status
            ]);

            foreach ($array as $value) {

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

                $lead = $amo->lead;

                if($day >= $course) {
                    $lead['status_id'] = 16567015; // Обратная связь
                }else if(($day == 1 && $course >=2) || $day === 7 || $day === 12 || $day === 18){
                    $day++;
                    $lead->addCustomField(328089, $day);

                    $task = $amo->task;
                    $task['element_id'] = $value['id'];
                    $task['element_type'] = 2;
                    $task['task_type'] = 1;
                    $task['text'] = 'Получить обратную связь от клиента A';
                    $task['complete_till'] = '23:59';
                    $task['responsible_user_id'] = $value['responsible_user_id'];
                    $task->apiAdd();
                }else {
                    $day++;
                    $lead->addCustomField(328089, $day);
                }

                if ($has_extra) {
                    $budget = (int)$value['price'];
                    $otrabotano = null;

                    foreach ($value['custom_fields'] as $field){
                        if ($field['id'] === 495367) { //Отработано
                            $otrabotano = (int)$field["values"][0]["value"];
                        }
                    }

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
                }

                $lead->apiUpdate((int)$value['id'], 'now');
            }

            $management = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', $type)->first();

            if(!$management){
                $m = new Management();
                $m->type = $type;
                $m->save();
            }

            return [
                'status' => true
            ];
        } catch(Exception $e){
            return [
                'status' => false,
                'msg' => $e->getCode() . '. ' . $e->getMessage()
            ];
        }
    }

    public function plusOneMain(): JsonResponse
    {
        $result = $this->plusOne(Management::PLUS_ONE_STATUS, Management::PLUS_TYPE, false);

        if (!$result['status']) {
            return response()->json([
                'status' => false,
                'msg' => $result['msg']
            ]);
        }

        return response()->json([
            'status' => true,
            'msg' => 'Success'
        ]);
    }

    public function plusOneSaturday(): JsonResponse
    {
        $result = $this->plusOne(Management::PLUS_ONE_SATURDAY_STATUS, Management::PLUS_SATURDAY_TYPE, true);

        if (!$result['status']) {
            return response()->json([
                'status' => false,
                'msg' => $result['msg']
            ]);
        }

        return response()->json([
            'status' => true,
            'msg' => 'Success'
        ]);
    }

    public function shiftOtkat(int $status, int $type): JsonResponse
    {
        try{
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $items = $amo->lead->apiList([
                'limit_rows' => 500,
                'id' => 31733463,
            ]);
            dd($items);
            foreach ($items as $item){
                $budget = (int)$item['price'];
                $otrabotano = null;

                $order = Order::where('amo_id', $item['id'])->orderBy('created_at','desc')->first();

                foreach ($item['custom_fields'] as $field){
                    if ($field['id'] === 495367){ //Отработано
                        $otrabotano = (int)$field["values"][0]["value"];
                    }
                }

                $lead = $amo->lead;

                if ($otrabotano != null){
                    $otrabotano -= $budget;

                    $lead->addCustomField(495367,
                        $otrabotano
                    );
                }else{
                    $lead->addCustomField(495367,
                        $budget
                    );
                }

                if($order && $order->courier) {
                    $lead->addCustomField(489499,
                        $order->courier->phone
                    );
                    $lead->addCustomField(489497,
                        $order->courier->name
                    );
                }

                $lead->apiUpdate((int)$item['id'], 'now');
            }

            $management = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', $type)->first();

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
                    if ($field['id'] === 495367){ //Отработано
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

                if($order && $order->courier) {
                    $lead->addCustomField(489499,
                        $order->courier->phone
                    );
                    $lead->addCustomField(489497,
                        $order->courier->name
                    );
                }

                $lead->apiUpdate((int)$item['id'], 'now');
            }

            $management = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', $type)->first();

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
        $status = Management::TRIAL_STATUS;
        $type = Management::TRIAL_TYPE;

        return $this->shift($status, $type);
    }

    public function shiftWork(): JsonResponse
    {
        $status = Management::WORK_STATUS;
        $type = Management::WORK_TYPE;

        return $this->shift($status, $type);
    }

    public function sendSelect(): JsonResponse
    {
        $status = Management::SEND_SELECT_STATUS;
        $type = Management::SEND_SELECT_TYPE;

        return $this->sendMenu($status, $type);
    }

    public function sendMenu(int $status, int $type): JsonResponse
    {
        try{
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $items = $amo->lead->apiList([
                'limit_rows' => 500,
                'status' => $status,
            ]);
            $orders = Order::where('is_active', true)->where('type', Order::EAT_FIT_SELECT)->get();
            $order = Order::find(489);

            $selects = $order->select()->whereDate('created_at', Carbon::today())->get();

            $text = $order->name;
            foreach ($selects as $select) {
                $text.= '';
            }
            dd($items);
            foreach ($items as $item){
                $budget = (int)$item['price'];
                $otrabotano = null;

                $order = Order::where('amo_id', $item['id'])->orderBy('created_at','desc')->first();

                foreach ($item['custom_fields'] as $field){
                    if ($field['id'] === 495367){ //Отработано
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

                if($order && $order->courier) {
                    $lead->addCustomField(489499,
                        $order->courier->phone
                    );
                    $lead->addCustomField(489497,
                        $order->courier->name
                    );
                }

                $lead->apiUpdate((int)$item['id'], 'now');
            }

            $management = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', $type)->first();

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

    public function payFact(): JsonResponse
    {
        try{
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $reports = Report::whereDate('created_at', Carbon::now()->toDateString())->get();

            foreach ($reports as $report) {
                if ($report->amount) {
                    $amount = (int) $report->amount;

                    $target = $amo->lead->apiList([
                        'id' => $report->order->amo_id
                    ]);

                    $fact = null;

                    foreach ($target[0]['custom_fields'] as $field) {
                        if ($field['id'] === 321139) { //fact
                            $fact = (int)$field["values"][0]["value"];
                        }
                    }

                    $lead = $amo->lead;
                    $lead->addCustomField(321139, $fact + $amount); //Fact
                    $lead->addCustomField(869811, null); //Tip oplaty
                    $lead->addCustomField(466107, false); //Check oplaty
                    $lead->addCustomField(885893, ''); //Comment oplaty

                    $lead->apiUpdate($report->order->amo_id, 'now');
                }
            }

            $management = Management::whereDate('created_at', Carbon::now()->toDateString())
                ->where('type', Management::FACT_TYPE)->first();

            if(!$management){
                $m = new Management();
                $m->type = Management::FACT_TYPE;
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
}

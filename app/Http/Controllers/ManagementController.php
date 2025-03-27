<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Management;
use App\Models\Order;
use App\Models\Report;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use AmoCRM\Client;
use AmoCRM\Exception;
use Illuminate\Support\Facades\Auth;

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
        $city_id = Auth::user()->city_id ?? City::ASTANA;
        $fact_type = $city_id === City::ASTANA ? Management::FACT_TYPE : Management::FACT_TYPE_ALMATY;

        $fact = Management::whereDate('created_at', Carbon::now()->toDateString())
            ->where('type', $fact_type)
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
                }else if(($day === 1 && $course > 2) || $day === 12 || $day === 18){
                    $day++;
                    $lead->addCustomField(328089, $day);

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

    public function shiftOtkat(): JsonResponse
    {
        dd('safd');
        try{
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));
            $ids = [33569457,
                33569289,
                33569233,
                33568003,
                33568001,
                33567881,
                33567857,
                33567795,
                33567717,
                33567355,
                33567311,
                33567001,
                33566781,
                33563997,
                33563945,
                33563819,
                33563511,
                33563269,
                33563259,
                33563185,
                33562177,
                33561867,
                33561809,
                33561557,
                33561207,
                33560673,
                33560453,
                33560107,
                33555617,
                33555415,
                33552617,
                33549275,
                33547781,
                33547755,
                33547689,
                33547561,
                33546483,
                33546277,
                33546111,
                33545071,
                33544517,
                33544427,
                33543993,
                33541979,
                33541923,
                33541367,
                33540001,
                33539713,
                33538691,
                33538141,
                33538119,
                33537497,
                33536603,
                33534841,
                33534807,
                33532765,
                33532683,
                33532287,
                33532089,
                33532087,
                33531921,
                33530081,
                33524515,
                33524509,
                33524007,
                33523663,
                33523613,
                33523595,
                33523097,
                33522093,
                33522091,
                33521963,
                33521917,
                33520961,
                33520509,
                33520381,
                33517391,
                33516643,
                33515727,
                33514821,
                33513289,
                33512815,
                33511383,
                33511231,
                33507791,
                33507769,
                33507761,
                33507747,
                33507737,
                33507723,
                33507715,
                33507689,
                33507433,
                33507085,
                33506973,
                33506791,
                33505807,
                33501119,
                33500549,
                33500455,
                33500365,
                33499087,
                33498763,
                33498331,
                33497771,
                33496875,
                33495845,
                33495725,
                33493435,
                33493431,
                33489455,
                33489453,
                33489093,
                33487975,
                33487619,
                33487549,
                33487013,
                33486883,
                33486871,
                33486855,
                33486351,
                33486343,
                33485495,
                33483255,
                33482001,
                33480257,
                33479189,
                33478299,
                33476693,
                33475099,
                33475063,
                33473857,
                33473161,
                33472725,
                33472691,
                33467893,
                33464931,
                33463479,
                33458507,
                33458473,
                33455177,
                33454511,
                33449887,
                33445865,
                33440797,
                33428929,
                33419795,
                33418263,
                33417893,
                33406643,
                33396027,
                33393147,
                33348669,
                33240271,
                32704259,
                32302741,
                31478439];
            foreach ($ids as $id) {
                $items = $amo->lead->apiList([
                    'limit_rows' => 500,
                    'id' => $id,
                ]);
                //dd($items);
                foreach ($items as $item){
                    $budget = (int)$item['price'];
                    $otrabotano = null;

                    //$order = Order::where('amo_id', $item['id'])->orderBy('created_at','desc')->first();

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

                    /*if($order && $order->courier) {
                        $lead->addCustomField(489499,
                            $order->courier->phone
                        );
                        $lead->addCustomField(489497,
                            $order->courier->name
                        );
                    }*/

                    $lead->apiUpdate((int)$item['id'], 'now');
                }
            }

            /*$management = Management::whereDate('created_at', Carbon::now()->toDateString())->where('type', $type)->first();

            if(!$management){
                $m = new Management();
                $m->type = $type;
                $m->save();
            }*/

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

    public function shiftTrialOtkat(): JsonResponse
    {
        $status = Management::TRIAL_STATUS;
        $type = Management::TRIAL_TYPE;

        return $this->shiftOtkat($status, $type);
    }

    public function shiftWorkOtkat(): JsonResponse
    {
        $status = Management::WORK_STATUS;
        $type = Management::WORK_TYPE;

        return $this->shiftOtkat($status, $type);
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

            $city_id = Auth::user()->city_id ?? City::ASTANA;
            $fact_type = $city_id === City::ASTANA ? Management::FACT_TYPE : Management::FACT_TYPE_ALMATY;

            $reports = Report::whereDate('created_at', Carbon::now()->toDateString())
                ->with('order')
                ->whereRelation('order', 'city_id', '=', $city_id)
                ->get();

            foreach ($reports as $report) {
                if ($report->amount) {
                    $target = $amo->lead->apiList([
                        'id' => $report->order->amo_id
                    ]);

                    $amount = (int) $report->amount;
                    $fact = 0;

                    foreach ($target[0]['custom_fields'] as $field) {
                        if ($field['id'] === 321139) { //fact
                            $fact = (int)$field["values"][0]["value"];
                        }
                    }

                    $lead = $amo->lead;
                    $lead->addCustomField(321139, $fact + $amount); //Fact
                    $lead->addCustomField(869811, null); //Tip oplaty
                    $lead->addCustomField(466107, false); //Check oplaty
                    $lead->addCustomField(888763, ''); //Comment oplaty1
                    $lead->addCustomField(889029, ''); //Comment oplaty

                    $lead->apiUpdate($report->order->amo_id, 'now');
                }

                if ($report->order->pay_comment && stripos($report->order->pay_comment, 'ланч') !== false) {
                    $lead = $amo->lead;
                    $lead->addCustomField(888763, ''); //Comment oplaty1
                    $lead->addCustomField(889029, ''); //Comment oplaty
                    $lead->apiUpdate($report->order->amo_id, 'now');
                }
            }

            $management = Management::whereDate('created_at', Carbon::now()->toDateString())
                ->where('type', $fact_type)->first();

            if(!$management){
                $m = new Management();
                $m->type = $fact_type;
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

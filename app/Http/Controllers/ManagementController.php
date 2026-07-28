<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Management;
use App\Models\Order;
use App\Models\Report;
use App\Services\AmoCrmService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use AmoCRM\Client;
use AmoCRM\Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

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
            $amo = new AmoCrmService();

            $array = $amo->getLeadsByStatus(793612, $status, 500);

            foreach ($array as $value) {

                $day = 0;
                $course = 0;

                foreach ($value['custom_fields_values'] as $field) {
                    switch ($field["field_id"]) {
                        case '328089': //Day
                            $day = (int) $field["values"][0]["value"];
                            break;
                        case '321235': //Course
                            $course = (int) $field["values"][0]["value"];
                            break;
                    }
                }

                $leadId = (int) $value['id'];
                $updatePayload = [];

                if($day >= $course) {
                    $updatePayload['status_id'] = 16567015; // Обратная связь
                }else if(($day === 1 && $course > 2) || $day === 12 || $day === 18){
                    $day++;
                    $updatePayload['custom_fields_values'][] = [
                        'field_id' => 328089,
                        'values'   => [['value' => $day]],
                    ];

                    $taskPayload = [
                        [
                            'entity_id'          => $leadId,
                            'entity_type'        => 'leads',
                            'task_type_id'       => 1, // Call
                            'text'               => 'Получить обратную связь от клиента',
                            'complete_till'      => strtotime('23:59'),
                            'responsible_user_id'=> $value['responsible_user_id'],
                        ]
                    ];

                    Http::withHeaders([
                        'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                        'Content-Type'  => 'application/json',
                    ])->post("https://eatandfitkz.amocrm.ru/api/v4/tasks", $taskPayload);
                }else {
                    $day++;
                    $updatePayload['custom_fields_values'][] = [
                        'field_id' => 328089,
                        'values'   => [['value' => $day]],
                    ];
                }

                if ($has_extra) {
                    $budget = (int)$value['price'];
                    $otrabotano = null;

                    foreach ($value['custom_fields_values'] as $field) {
                        if ($field['field_id'] === 495367) { // Отработано
                            $otrabotano = (int) $field["values"][0]["value"];
                        }
                    }

                    if ($otrabotano !== null) {
                        $otrabotano += $budget;
                    } else {
                        $otrabotano = $budget;
                    }

                    $updatePayload['custom_fields_values'][] = [
                        'field_id' => 495367,
                        'values'   => [['value' => $otrabotano]],
                    ];
                }

                if (!empty($updatePayload)) {
                    Http::withHeaders([
                        'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                        'Content-Type'  => 'application/json',
                    ])->patch("https://eatandfitkz.amocrm.ru/api/v4/leads/{$leadId}", $updatePayload);
                }
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
        set_time_limit(0);

        dd('safd');
        try{
            //$amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));
            $ids = [
                34671975,
                34671933,
                34671753,
                34671547,
                34671271,
                34670819,
                34670805,
                34670501,
                34670493,
                34670417,
                34670095,
                34666429,
                34666133,
                34665043,
                34664583,
                34664271,
                34663197,
                34662245,
                34661817,
                34661807,
                34661743,
                34661043,
                34659411,
                34658695,
                34658355,
                34658249,
                34657663,
                34656365,
                34655085,
                34653733,
                34651831,
                34651147,
                34650433,
                34649671,
                34649401,
                34649001,
                34648629,
                34647593,
                34647037,
                34646825,
                34646455,
                34645597,
                34644727,
                34644385,
                34641227,
                34640429,
                34639035,
                34638815,
                34636495,
                34636315,
                34636091,
                34635657,
                34635463,
                34634275,
                34633109,
                34633089,
                34630937,
                34630827,
                34630055,
                34629555,
                34629185,
                34628805,
                34627609,
                34624305,
                34621667,
                34618853,
                34615171,
                34611511,
                34610081,
                34608935,
                34608853,
                34604611,
                34604595,
                34601189,
                34596895,
                34594151,
                34593597,
                34593553,
                34589955,
                34589525,
                34589399,
                34588189,
                34563725,
                34553389,
                34552385,
                34541085,
                34538753,
                34488415,
                34487229,
                34428511,
                34410277,
                34366703,
                34306187,
                33522683
            ];
            foreach ($ids as $id) {
                $item = Http::withHeaders([
                    'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                    'Content-Type'  => 'application/json',
                ])->get(rtrim(env('AMOCRM_BASE_URL')) . '/api/v4/leads/' . $id)->json();
                $budget = (int)$item['price'];
                $otrabotano = null;

                if (!empty($item['custom_fields_values'])) {
                    foreach ($item['custom_fields_values'] as $field) {
                        if ($field['field_id'] === 495367) {
                            $otrabotano = (int)$field['values'][0]['value'];
                        }
                    }
                }

                if ($otrabotano !== null) {
                    $otrabotano -= $budget;
                } else {
                    $otrabotano = $budget;
                }

                $payload = [
                    'custom_fields_values' => [
                        [
                            'field_id' => 495367,
                            'values' => [
                                ['value' => $otrabotano],
                            ]
                        ]
                    ]
                ];

                Http::withHeaders([
                    'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                    'Content-Type'  => 'application/json',
                ])->patch("https://eatandfitkz.amocrm.ru/api/v4/leads/{$item['id']}", $payload);
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
            $amo = new AmoCrmService();

            $items = $amo->getLeadsByStatus(793612, $status, 500);

            foreach ($items as $item) {
                $budget = (int)$item['price'];

                $otrabotano = null;

                $order = Order::where('amo_id', $item['id'])->orderBy('created_at','desc')->first();

                foreach ($item['custom_fields_values'] as $field){
                    if ($field['field_id'] === 495367){ //Отработано
                        $otrabotano = (int)$field["values"][0]["value"];
                    }
                }
                $customFields = [];

                // Field 495367
                $customFields[] = [
                    'field_id' => 495367,
                    'values'   => [
                        ['value' => $otrabotano !== null ? $otrabotano + $budget : $budget]
                    ]
                ];

                // If courier exists
                if ($order && $order->courier) {
                    $customFields[] = [
                        'field_id' => 489499,
                        'values'   => [
                            ['value' => $order->courier->phone]
                        ]
                    ];
                    $customFields[] = [
                        'field_id' => 489497,
                        'values'   => [
                            ['value' => $order->courier->name]
                        ]
                    ];
                }

                Http::withHeaders([
                    'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                    'Content-Type'  => 'application/json',
                ])->patch("https://eatandfitkz.amocrm.ru/api/v4/leads/{$item['id']}", [
                    'custom_fields_values' => $customFields
                ]);
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
            $city_id = Auth::user()->city_id ?? City::ASTANA;
            $fact_type = $city_id === City::ASTANA ? Management::FACT_TYPE : Management::FACT_TYPE_ALMATY;

            $reports = Report::whereDate('created_at', Carbon::now()->toDateString())
                ->with('order')
                ->whereRelation('order', 'city_id', '=', $city_id)
                ->get();

            foreach ($reports as $report) {
                if ($report->amount) {
                    $response = Http::withHeaders([
                        'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                    ])->get("https://eatandfitkz.amocrm.ru/api/v4/leads/{$report->order->amo_id}");

                    if ($response->failed()) {
                        Log::error('Failed to fetch lead', ['id' => 34085789, 'resp' => $response->json()]);
                        continue;
                    }

                    $leadData = $response->json();
                    $customFields = $leadData['custom_fields_values'] ?? [];

                    $fact = 0;

                    foreach ($customFields as $field) {
                        if ($field['field_id'] === 321139 && !empty($field['values'][0]['value'])) { // fact
                            $fact = (int)$field['values'][0]['value'];
                        }
                    }

                    $payload = [
                        'custom_fields_values' => [
                            [
                                'field_id' => 321139, // Fact
                                'values' => [['value' => $fact + 0]]
                            ],
                            /*[
                                'field_id' => 869811, // Tip oplaty
                                'values' => [['value' => '']] // reset
                            ],*/
                            [
                                'field_id' => 466107, // Check oplaty
                                'values' => [['value' => false]]
                            ],
                            [
                                'field_id' => 888763, // Comment oplaty1
                                'values' => [['value' => '']]
                            ],
                            [
                                'field_id' => 889029, // Comment oplaty
                                'values' => [['value' => '']]
                            ]
                        ]
                    ];

                    Http::withHeaders([
                        'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                    ])->patch("https://eatandfitkz.amocrm.ru/api/v4/leads/34085789", $payload);
                }

                if ($report->order->pay_comment && stripos($report->order->pay_comment, 'ланч') !== false) {
                    $payload = [
                        'id' => (int) $report->order->amo_id,
                        'custom_fields_values' => [
                            [
                                'field_id' => 888763,
                                'values' => [['value' => '']]
                            ],
                            [
                                'field_id' => 889029,
                                'values' => [['value' => '']]
                            ]
                        ]
                    ];

                    Http::withHeaders([
                        'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                    ])->patch("https://eatandfitkz.amocrm.ru/api/v4/leads/{$report->order->amo_id}", [$payload]);
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

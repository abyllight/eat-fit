<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use AmoCRM\Exception;
use App\Http\Resources\PaymentCollection;
use App\Models\OrderHistory;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $history = OrderHistory::whereDate('created_at', $request->date ?? Carbon::now());
        $t = $history->get();
        $refs = $history->get();
        if ($request->pay_type) {
            $history = $history->where('pay_type', $request->pay_type);
        }

        if ($request->has_diff === 'true') {
            $history = $history->where('fact_diff', '!=', 0);
        }

        $history = $history->orderBy('name')->get();

        $types = Payment::CUSTOM_PAYMENTS;

        $total = [];
        $refunds = [];
        $t = $t->where('pay_fact', '>', 0);
        $refs = $refs->where('pay_fact', '<', 0);

        foreach ($types as $type) {
            $total[] = [
                'name' => $type['name'],
                'sum' => $t->where('pay_type', $type['id'])->sum('pay_fact')
            ];

            $refunds[] = [
                'name' => $type['name'],
                'sum' => $refs->where('pay_type', $type['id'])->sum('pay_fact')
            ];
        }

        return response()->json([
            'status' => true,
            'types' => $types,
            'items' => PaymentCollection::collection($history),
            'refunds' => $refunds,
            'total' => $total
        ]);
    }

    public function getLeads() {
        try {
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $bezsubbot = $amo->lead->apiList([
                'status'     => 25893415,
                'limit_rows' => 400
            ]);

            $vrabote = $amo->lead->apiList([
                'status'     => 16566964,
                'limit_rows' => 400
            ]);

            $doljniki = $amo->lead->apiList([
                'status'     => 28443097,
                'limit_rows' => 400
            ]);

            $krazboru = $amo->lead->apiList([
                'status'     => 24407536,
                'limit_rows' => 400
            ]);

            $obratnayasvyaz = $amo->lead->apiList([
                'status'     => 16567015,
                'limit_rows' => 400
            ]);

            $pauza = $amo->lead->apiList([
                'status'     => 16583479,
                'limit_rows' => 400
            ]);

            $probnayadostavka = $amo->lead->apiList([
                'status'     => 16536847,
                'limit_rows' => 400
            ]);

            $array = array_merge($bezsubbot, $vrabote, $doljniki, $krazboru, $obratnayasvyaz, $pauza, $probnayadostavka);

            OrderHistory::whereDate('created_at', Carbon::today())
                ->where('pay_fact', null)
                ->orWhere('status', Payment::INIT)
                ->delete();

            foreach ($array as $item) {
                $name = $item['name'];
                $fact = 0;
                $course = 0;
                $old_id = null;

                foreach ($item['custom_fields'] as $field) {
                    switch ($field['id']) {
                        case '456321': //Стоимость Курса
                            $course = (int)$field["values"][0]["value"];
                            break;
                        case '321139': //Факт оплата
                            $fact = (int)$field["values"][0]["value"];
                            break;
                        case '886601': //ID staroy sdelki
                            $old_id = $field["values"][0]["value"];
                            break;
                    }
                }

                if ($old_id) {
                    $found_old = OrderHistory::where('old_amo_id', $old_id)->first();
                    if ($found_old) {
                        $found_old->delete();
                    }
                }

                $found = OrderHistory::where('amo_id', $item['id'])->first();

                if ($found) {
                    $found->name = $name;
                    $found->fact = $fact;
                    $found->course = $course;
                    $found->save();
                }else {
                    $h = new OrderHistory();
                    $h->amo_id = $item['id'];
                    $h->name = $name;
                    $h->course = $course;
                    $h->fact = $fact;
                    if ($fact > $course) {
                        $h->status = Payment::BIGGER_THAN_COURSE;
                        $h->old_amo_id = $item['id'];
                        $h->fact_diff = $fact - $course;
                        //886601 ID staroy sdelki
                        $lead = $amo->lead;
                        $lead->addCustomField(886601, $item['id']);
                        $lead->apiUpdate((int)$item['id'], 'now');

                        //Task
                        /*$task = $amo->task;
                        $task['element_id'] = $item['id'];
                        $task['element_type'] = 2;
                        $task['task_type'] = 1;
                        $task['text'] = 'Сверх оплата';
                        $task['complete_till'] = '23:59';
                        $task['responsible_user_id'] = $item['responsible_user_id'];
                        $task->apiAdd();*/
                    }else {
                        $h->status = Payment::INIT;
                    }
                    $h->save();
                }


            }
        }catch (\AmoCRM\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ]);
        }
    }

    public function setPayFact(Request $request) {
        $order = OrderHistory::find($request->id);

        try {
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $lead = $amo->lead;

            $lead->addCustomField(321139, $order->fact + $request->pay_fact); //Fact
            if ($request->pay_fact < 0) {
                $lead['status'] = 142;
            }
            $lead->apiUpdate($order->amo_id, 'now');

            $order->pay_type = $request->pay_type;
            $order->pay_fact = $request->pay_fact;
            $order->save();

            return response([
                'status'  => true,
                'message' => 'Success'
            ]);
        }catch (Exception $e) {
            return response([
                'status'  => false,
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            ]);
        }
    }
}

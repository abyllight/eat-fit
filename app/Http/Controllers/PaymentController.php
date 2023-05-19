<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use AmoCRM\Exception;
use App\Http\Resources\PaymentCollection;
use App\Models\Order;
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

        if ($request->pay_type) {
            $history = $history->where('pay_type', $request->pay_type);
        }

        $history = $history->orderBy('name')->get();
        $types = Payment::CUSTOM_PAYMENTS;

        return response()->json([
            'status' => true,
            'types' => $types,
            'items' => PaymentCollection::collection($history)
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

            OrderHistory::whereDate('created_at', Carbon::today())->where('pay_fact', null)->delete();

            foreach ($array as $item) {
                $found = OrderHistory::where('amo_id', $item['id'])->first();

                if ($found) continue;

                $h = new OrderHistory();
                $h->amo_id = $item['id'];
                $h->name = $item['name'];
                $h->save();
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

            $target = $amo->lead->apiList([
                'id' => $order->amo_id
            ]);

            $fact = 0;

            foreach ($target[0]['custom_fields'] as $field) {
                if ($field['id'] === 321139) { //fact
                    $fact = (int)$field["values"][0]["value"];
                }
            }

            $lead->addCustomField(321139, $fact + $request->pay_fact); //Fact
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

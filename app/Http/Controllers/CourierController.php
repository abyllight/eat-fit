<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use App\Http\Resources\OrderCollection;
use App\Models\Order;
use App\Models\Report;
use App\Models\User;
use App\Models\Week;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourierController extends Controller
{
    public function index()
    {
        $is_weekend = Week::isWeekend();
        $courier = $is_weekend ? 'courier2_id' : 'courier1_id';

        $orders = Order::where($courier, Auth::id())->where('is_active', true)->orderBy('position')->get();

        return response()->json([
            'status' => true,
            'data' => OrderCollection::collection($orders)
        ]);
    }

    public function notify(Request $request): JsonResponse
    {
        $order = Order::find($request->order_id);
        $user = Auth::user();
        $phone = $user->phone;
        $phone = User::beautifyMobile($phone);

        if ($order){
            try {
                $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

                $lead = $amo->lead;
                $lead['status_id'] = 27248140;
                $lead->addCustomField(489499,
                    $phone
                );
                $lead->addCustomField(489497,
                    $user->name
                );
                $lead->apiUpdate($order->amo_id, 'now');

                $now = Carbon::now();
                $founded_report = Report::where('order_id', $order->id)
                                ->where('courier_id', $user->id)
                                ->whereDate('created_at', $now->toDateString())
                                ->first();

                if ($founded_report){
                    if($founded_report->notified_at === null){
                        $founded_report->notified_at = $now;
                        $founded_report->notification_status = $this->getStatus($founded_report->order->getTime(), $now);
                        $founded_report->save();
                    }
                }else{
                    $report = new Report();
                    $report->order_id = $order->id;
                    $report->courier_id = $user->id;
                    $report->notified_at = $now;
                    $report->notification_status = $this->getStatus($report->order->getTime(), $now);
                    $report->save();
                }

                return response()->json([
                    'status' => true,
                    'msg' => 'Клиент уведомлен'
                ]);
            }catch(\AmoCRM\Exception $e){
                return response()->json([
                    'status' => false,
                    'msg' => $e->getMessage()
                ]);
            }
        }

        return response()->json([
            'status' => false,
            'msg' => 'Заказ не найден'
        ]);
    }

    public function report(Request $request): JsonResponse
    {
        $order = Order::find($request->order_id);
        $now = Carbon::now();

        if ($order) {
            $founded_report = Report::where('order_id', $order->id)
                ->where('courier_id', Auth::user()->id)
                ->whereDate('created_at', $now->toDateString())
                ->first();

            if($founded_report){
                $founded_report->report_status = $request->status;
                $founded_report->comment = $request->comment;
                $founded_report->amount = $request->amount;
                $founded_report->payment_type = $request->payment_type;

                if($founded_report->reported_at === null){
                    $founded_report->reported_at = $now;
                }

                $founded_report->save();

            }else{
                $new = new Report;
                $new->order_id = $request->order_id;
                $new->courier_id = Auth::user()->id;
                $new->report_status = $request->status;
                $new->comment = $request->comment;
                $new->reported_at = $now;
                $new->payment_type = $request->payment_type;
                $new->amount = $request->amount;

                $new->save();
            }

            return response()->json([
                'status' => true,
                'msg' => 'Отчет отправлен'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Заказ не найден'
        ]);
    }

    public function getStatus(string $interval, Carbon $now): string
    {
        $explode = explode('-', $interval);
        $start = (float)$explode[0] * 100;
        $end = (float)$explode[1] * 100;
        $time = (float)$now->format('H.i') * 100;

        switch(true){
            case $time >= $start && $time <= $end:
                $status = 'вовремя';
                break;
            case $time < $start:
                $status = 'рано';
                break;
            case $time > $end:
                $status = 'поздно';
                break;
            default:
                $status = 'незвестно';
        }

        return $status;
    }
}

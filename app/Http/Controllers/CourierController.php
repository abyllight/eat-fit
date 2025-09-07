<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use App\Http\Resources\MyOrderCollection;
use App\Http\Resources\OrderLogisticCollection;
use App\Models\Courier;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Report;
use App\Models\User;
use App\Models\Week;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class CourierController extends Controller
{
    public function index(): JsonResponse
    {
        $is_weekend = Week::isWeekend();
        $courier = $is_weekend ? 'courier2_id' : 'courier1_id';

        $orders = Order::where($courier, Auth::id())->where('is_active', true)->orderBy('courier_position')->get();

        $payment_types = Auth::user()->city_id === Order::ASTANA ? Payment::ASTANA_PAYMENT_TYPES : Payment::ALMATY_PAYMENT_TYPES;

        return response()->json([
            'status' => true,
            'data' => MyOrderCollection::collection($orders),
            'payment_types' => $payment_types
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
                $payload = [];
                $payload['status_id'] = 27248140;
                $payload['custom_fields_values'][] = [
                    'field_id' => 489499,
                    'values'   => [['value' => $phone]],
                ];

                $payload['custom_fields_values'][] = [
                    'field_id' => 489497,
                    'values'   => [['value' => $user->name]],
                ];

                Http::withHeaders([
                    'Authorization' => 'Bearer ' . env('AMO_ADMIN_LONG_TOKEN'),
                    'Content-Type'  => 'application/json',
                ])->patch("https://eatandfitkz.amocrm.ru/api/v4/leads/{$order->amo_id}", $payload);

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
                    $report->city_id = $user->city_id;
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
        $user = Auth::user();
        $order = Order::find($request->order_id);
        $now = Carbon::now();

        if ($order) {
            $founded_report = Report::where('order_id', $order->id)
                ->where('courier_id', $user->id)
                ->whereDate('created_at', $now->toDateString())
                ->first();

            if($founded_report){
                $founded_report->report_status = (int)$request->status;
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
                $new->city_id = $user->city_id;
                $new->courier_id = Auth::user()->id;
                $new->report_status = $request->status;
                $new->report_time_status = $this->getStatus($order->getTime(),$now);
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

        if (count($explode) < 2){
            return 3;
        }

        $start = (float)$explode[0] * 100;
        $end = (float)$explode[1] * 100;
        $time = (float)$now->format('H.i') * 100;

        switch(true){
            case $time >= $start && $time <= $end:
                $status = 0;
                break;
            case $time < $start:
                $status = 1;
                break;
            case $time > $end:
                $status = 2;
                break;
            default:
                $status = 3;
        }

        return $status;
    }
}

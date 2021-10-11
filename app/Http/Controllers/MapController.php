<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Models\Order;
use App\Models\Week;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MapController extends Controller
{
    protected $link = 'https://geocode-maps.yandex.ru/1.x/?apikey=df752091-7d67-4202-af5c-322b09947c85&geocode=';

    public function filter(Request $request): JsonResponse
    {
        $intervals = $request->intervals;
        $user_id = $request->user_id;
        $is_weekend = Week::isWeekend();

        $lat = $is_weekend ? 'lat2' : 'lat1';
        $lng = $is_weekend ? 'lng2' : 'lng1';
        $courier = $is_weekend ? 'courier2_id' : 'courier1_id';

        $query = Order::where('is_active', true)
            ->whereNotNull($lat)
            ->whereNotNull($lng)
            ->whereIn('interval', $intervals);

        if ($user_id) {
            $query = $query->where($courier, $user_id);
        }

        $query = $query->get();

        $collection = OrderCollection::collection($query);

        return response()->json($collection);
    }

    public function geocode(): JsonResponse
    {
        $is_weekend = Week::isWeekend();

        return $this->geocode_type($is_weekend);
    }

    public function geocode_type(bool $is_weekend): JsonResponse
    {
        $coords = $is_weekend ? 'lat2' : 'lat1';
        $orders = Order::where('is_active', true)->where($coords, null)->get();

        if (count($orders) === 0) {
            return response()->json([
                'status' => true,
                'message' => 'Все адреса уже геокодированы'
            ]);
        }

        $context = stream_context_create(array('ssl'=>array(
            'verify_peer' => false,
            "verify_peer_name"=>false
        )));

        libxml_set_streams_context($context);

        foreach ($orders as $order) {
            $yaddress = $is_weekend ? $order->yaddress2 : $order->yaddress1;

            if ($yaddress) {
                $xml = simplexml_load_file($this->link . urlencode($yaddress));
                $lat_lng = explode(" ", $xml->GeoObjectCollection->featureMember->GeoObject->Point->pos);

                if (!$lat_lng) {
                    return response()->json([
                        'status' => false,
                        'message' => 'Не удалось геокодировать адрес' . $order->name . ' ' . $yaddress
                    ]);
                }

                if ($is_weekend) {
                    $order->lat2 = $lat_lng[1];
                    $order->lng2 = $lat_lng[0];
                }else {
                    $order->lat1 = $lat_lng[1];
                    $order->lng1 = $lat_lng[0];

                    if($order->yaddress1 === $order->yaddress2){
                        $order->lat2 = $lat_lng[1];
                        $order->lng2 = $lat_lng[0];
                    }
                }
                $order->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Адреса успешно геокодированы'
        ]);
    }

    public function setInterval(): JsonResponse {

        Order::where('is_active', true)->update(['interval' => 0]);

        $is_weekend = Week::isWeekend();

        $time_val = $is_weekend ? 'time2' : 'time1';
        $orders = Order::where('is_active', true)->orderBy($time_val)->get()->groupBy([$time_val]);

        if (count($orders) === 0) {
            return response()->json([
                'status' => true,
                'message' => 'Нет заказов с заполненым временем'
            ]);
        }

        $intervals = [
            [630, 700],
            [700, 730],
            [730, 800],
            [800, 830],
            [830, 900],
            [900, 930],
            [930, 1000]
        ];

        $checkint = collect();

        foreach ($orders as $value) {
            $time = $value[0][$time_val];
            if (!$time) continue;

            $pieces = explode("-", $time);
            $dfrom  = intval((float) $pieces[0] * 100);
            $dto    = intval((float) $pieces[1] * 100);
            $dfrom  = $dfrom ?? null;
            $dto    = $dto ?? null;

            for($i = 0; $i < count($intervals); $i++) {

                if($dfrom >= $intervals[$i][0] && $dfrom < $intervals[$i][1]) {

                    for ($j = $i; $j < count($intervals); $j++){

                        if($dto > $intervals[$j][0] && $dto <= $intervals[$j][1]) {

                            if($j === $i) {
                                foreach($value as $v) {
                                    $v->interval = $j + 1;
                                    $v->save();
                                }
                            }else{
                                for ($a = $i; $a <= $j; $a++) {
                                    $checkint->push([
                                        'time' => $time,
                                        'i'    => $a + 1
                                    ]);
                                }
                            }
                        }
                    }
                }
            }
        }

        foreach ($checkint->groupBy('time') as $value) {

            $orders = Order::where('is_active', true)->where($time_val, $value[0]['time'])->get();

            foreach($orders as $val) {

                $almost = collect();

                foreach ($value as $i) {

                    $uzhe = Order::where('is_active', true)->where('interval', $i['i'])->count();

                    $almost->push([
                        'i'   => $i['i'],
                        'num' => $uzhe
                    ]);
                }

                $min = $almost->where('num', $almost->min('num'))->last()['i'];
                $val->interval = $min;
                $val->save();
            }
        }

        Order::where('is_active', true)->whereNull('interval')->update([
            'interval' => 0
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Успешно отсортировано'
        ]);
    }

    public function setCourier(Request $request) {
        $is_weekend = Week::isWeekend();
        $position   = Order::max('position') ?? 0;
        $order      = Order::find($request->order_id);
        $courier_id = $is_weekend ? $order->courier2_id : $order->courier1_id;
        $c_id       = $request->courier_id;

        if($courier_id === 0){
            $position = $position + 1;
        }

        if ($courier_id === $c_id) {
            $position = $order->position;
        }

        if ($c_id === 0) {
            $position = null;
        }

        $order->position = $position;
        $is_weekend ? $order->courier2_id = $c_id : $order->courier1_id = $c_id;

        $order->save();

        return response()->json($order->courier);
    }
}

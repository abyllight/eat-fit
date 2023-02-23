<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use AmoCRM\Exception;
use App\Models\Cuisine;
use App\Models\Management;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BroadcastMenuController extends Controller
{
    public function index() {
        $cuisines = Cuisine::all();

        return response()->json([
            'status' => true,
            'data' => $cuisines
        ]);
    }

    public function addImage(Request $request) {
        $cuisine = Cuisine::find($request->c_id);

        if ($request->type === 1) {

        }
    }

    public function performText(): array
    {
        $orders = Order::where('is_active', true)->where('type', Order::EAT_FIT_SELECT)->get();
        $duty_cuisine = Cuisine::where('is_on_duty', true)->first();

        $arr = [];

        foreach ($orders as $order) {
            $text = $duty_cuisine->name . PHP_EOL;
            $selects = $order->select()->whereDate('created_at', Carbon::today())->get()->sortBy('ration_id');

            foreach ($selects as $select) {
                $text .= $select->ration->name . PHP_EOL;
                $text .= $select->dish_name . PHP_EOL . PHP_EOL;
            }

            $arr[] = [
                'id' => $order->amo_id,
                'name' => $order->name,
                'text' => $text
            ];
        }

        return $arr;
    }
    public function selectIndex(): JsonResponse
    {
        $duty_cuisine = Cuisine::where('is_on_duty', true)->first();

        return response()->json([
            'status' => true,
            'cuisine' => $duty_cuisine->name,
            'data' => $this->performText()
        ]);
    }

    public function sendMenu(): JsonResponse
    {
        $status = Management::SEND_SELECT_STATUS;
        $type = Management::SEND_SELECT_TYPE;

        try{
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            //$data = $this->performText();
            //$orders = Order::where('is_active', true)->where('type', Order::EAT_FIT_SELECT)->get();
            $duty_cuisine = Cuisine::where('is_on_duty', true)->first();
            $order = Order::find(271);
            $selects = $order->select()->whereDate('created_at', Carbon::today())->get()->sortBy('ration_id');

            $text = 'Test11'.'%0D%0A';

            foreach ($selects as $select) {
                $text .= $select->ration->name.'%0D%0A';
            }

            $lead = $amo->lead;
            $lead['status_id'] = $status;
            $lead->addCustomField(884607, $text);

            $lead->apiUpdate(30641287, 'now');
            /*foreach ($data as $item){

                $lead = $amo->lead;
                $lead['status_id'] = $status;
                $lead->addCustomField(884607,
                    $item['text']
                );

                $lead->apiUpdate(30641287, 'now');
            }*/

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
}

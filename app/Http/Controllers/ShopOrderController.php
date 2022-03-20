<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use App\Models\Customer;
use App\Models\ShopOrder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ShopOrderController extends Controller
{
    public function store($c_id, $cutlery): JsonResponse
    {
        $customer = Customer::where('uuid', $c_id)->first();

        if (!$customer) {
            return response()->json([
                'status' => false,
                'msg' => 'Customer not found'
            ]);
        }

        $cart = $customer->cart;

        if (!$cart || !$cart->items) {
            return response()->json([
                'status' => false,
                'msg' => 'Customer\'s cart not found'
            ]);
        }

        foreach ($cart->items as $item) {
            $order = new ShopOrder();
            $order->customer_id = $customer->id;
            $order->product_id = $item->product_id;
            $order->quantity = $item->quantity;
            $order->status = 1;
            $order->meta = $item->meta;
            $order->save();

            $item->delete();
        }

        if ($cutlery > 0) {
            $order = new ShopOrder();
            $order->customer_id = $c_id;
            $order->product_id = 0;
            $order->quantity = $cutlery;
            $order->status = 1;
            $order->save();
        }

        $cart->delete();
    }

    public function placeOrder(Request $request): JsonResponse
    {
        $name = $request->user['name'];
        $phone = $request->user['phone'];
        $address = $request->user['address'];
        $time = $request->time;
        $payment_method = $request->user['payment'];
        $total = $request->total;
        $wholesale = $request->wholesale ?? 0;
        $cart = $request->cart;
        $products = 'Приборы - '. $request->cutlery . 'шт,' . PHP_EOL;

        if ($cart) {
            foreach ($cart as $item) {
                $q = $item['q'];
                $products .= $item['title'] . ' - ' . $q;
                if (end($cart) !== $item) {
                    $products .= ', '.PHP_EOL;
                }
            }
        }

        try {
            Log::info('creating amo request for: ' . $name . '(' . $phone . ')', $cart);
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $lead = $amo->lead;
            $lead['name'] = $name;
            $lead['status_id'] = 40592377; //Заказ поступил
            $lead['pipeline_id'] = 4359841; //EatFitGo
            $lead['tags'] = 'Заявка с сайта';
            $lead['price'] = $wholesale;

            if ($payment_method === 'card') {
                $lead->addCustomField(321139, $total); //Фактический оплачено
                $lead->addCustomField(869811, '969831'); //Оплачено картой на сайте
            }elseif ($payment_method === 'kaspi_pay') {
                $lead->addCustomField(869811, '968303'); //kaspi pay
            }else{
                $lead->addCustomField(869811, '968307'); //Расчетный счет
            }

            $lead->addCustomField(456321, $payment_method === 'cashless' ? $wholesale : $total); //Стоимость курса
            $lead->addCustomField(478771, $phone); //Телефон для звонков
            $lead->addCustomField(478763, $address); //Адрес
            $lead->addCustomField(478765, $address); //Адрес доп
            $lead->addCustomField(373971, $time); //Время доставки
            $lead->addCustomField(478705, $time); //Время доставки доп
            $lead->addCustomField(321277, $products); //Комм. кухня
            $lead->addCustomField(327953,  '929511'
            ); //Size
            $lead->addCustomField(321197,  '833911'
            ); //Type
            $id = $lead->apiAdd();

            $contact = $amo->contact;
            $contact['name'] = $name;
            $contact->setLinkedLeadsId($id);
            $contact->addCustomField(306229, [
                [$phone, '635201']
            ]);

            $contact->apiAdd();

            Log::info('Order placed successfully');

            $this->store($request->c_id, $request->cutlery);

            return response()->json([
                'status' => true,
                'message' => 'Заказ успешно создан'
            ]);

        }catch (\AmoCRM\Exception $e) {
            Log::alert('amo request failed'. $name . '(' . $phone . ')', $cart);
            return response()->json([
                'status' => false,
                'message' => $e->getCode(). ' ' . $e->getMessage()
            ]);
        }
    }
}

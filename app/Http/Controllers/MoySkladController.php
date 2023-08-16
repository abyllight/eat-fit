<?php

namespace App\Http\Controllers;

use App\Models\MoySklad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MoySkladController extends Controller
{
    public function doAuth() {
        $login = env('MOYSKLAD_LOGIN');
        $pass = env('MOYSKLAD_PASS');

        $req = Http::withBasicAuth($login, $pass)->post('https://online.moysklad.ru/api/remap/1.2/security/token');
        return $req->json()['access_token'];
    }

    public function doWebhook(Request $request) {
        $url = $request->query('requestId');
        $type = $request->get('events');

        $moy_sklad = new MoySklad();
        $moy_sklad->url = $url;
        $moy_sklad->data = $type;
        $moy_sklad->save();
        if ($url) {
            //$access_token = $this->doAuth();
            /*$customer_order = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token
            ])->get($url);*/


        }
        /*$create_retail_demand = Http::withHeaders([
            'Authorization' => 'Bearer ' . $access_token,
            'Content-Type' => 'application/json'
        ])->post('https://online.moysklad.ru/api/remap/1.2/entity/retaildemand', [
            'retailShift' => [
                'meta' => [
                    'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/retailshift/65cb872f-3ac7-11ee-0a80-06a8003aa0c9',
                    'type' => 'retailshift',
                    'mediaType' => 'application/json'
                ]
            ]
        ]);

        dd($create_retail_demand->json());*/


       /* $customer_order = $customer_order->json();
        $store = $customer_order['store']['meta']['href'];
        dd($store);
        $shifts = Http::withHeaders([
            'Authorization' => 'Bearer ' . $access_token
        ])->get('https://online.moysklad.ru/api/remap/1.2/entity/retailshift', [
            'filter' => [
                'store' => $store
            ]
        ]);
        dd($shifts->json());*/
        /*$positions = Http::withHeaders([
            'Authorization' => 'Bearer ' . $access_token
        ])->get('https://online.moysklad.ru/api/remap/1.2/entity/customerorder/76b27555-3b24-11ee-0a80-0e9600019926/positions');
        //dd($positions->json());*/
        //dd($positions->json());


    }
}

<?php

namespace App\Http\Controllers;

use App\Models\MoySklad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MoySkladController extends Controller
{
    public function doAuth() {
        $login = env('MOYSKLAD_LOGIN');
        $pass = env('MOYSKLAD_PASS');

        $req = Http::withBasicAuth($login, $pass)->post('https://online.moysklad.ru/api/remap/1.2/security/token');
        return $req->json()['access_token'];
    }

    //Source
    //https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/e8ce5c74-8cd4-11ed-0a80-0ec600de235f

    //Sale responsible
    //https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/a712b5ef-e0d4-11ed-0a80-0f3f0015d063

    //Setup responsible
    //https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/54ecd644-215f-11ee-0a80-10fe001e6aed

    //director https://online.moysklad.ru/api/remap/1.2/entity/employee/1f6007c8-31a6-11ed-0a80-09cb0037328c
    //ne uto4nil https://online.moysklad.ru/api/remap/1.2/entity/customentity/8447381f-8cd1-11ed-0a80-014000e2ec30/df10c6db-8cd5-11ed-0a80-0ffb00dcc0b3
    public function doWebhook(Request $request) {
            $access_token = $this->doAuth();
            $last_order = null;

            if ($request->query('id')) {
                $last_order = Http::withHeaders([
                    'Authorization' => 'Bearer ' . $access_token
                ])->get('https://online.moysklad.ru/api/remap/1.2/entity/customerorder/');

                $last_order = $last_order->json();
            }

            if ($last_order) {
                $store = array_key_exists('store', $last_order) ? $last_order['store']['meta']['href'] : null;
                //dd($store, $last_order);
                if ($store) {
                    $retail_store = Http::withHeaders([
                        'Authorization' => 'Bearer ' . $access_token
                    ])->get('https://online.moysklad.ru/api/remap/1.2/entity/retailstore', [
                        'limit' => 1,
                        'filter' => 'store=' . $store
                    ]);

                    $retail_store = $retail_store->json();
                    if ($retail_store) {
                        $retail_store = $retail_store['rows'][0];

                        $retail_shift = Http::withHeaders([
                            'Authorization' => 'Bearer ' . $access_token
                        ])->get('https://online.moysklad.ru/api/remap/1.2/entity/retailshift', [
                            'order' => 'moment,desc',
                            'limit' => 1,
                            'filter' => 'retailStore=' . $retail_store['meta']['href']
                        ]);

                        $retail_shift = $retail_shift->json();
                        if ($retail_shift) {
                            $retail_shift = $retail_shift['rows'][0];

                            $attributes = [
                                [//source
                                    'meta' => [
                                        'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/e8ce5c74-8cd4-11ed-0a80-0ec600de235f',
                                        'type' => 'attributemetadata',
                                        'mediaType' => 'application/json'
                                    ],
                                    'value' => [
                                        'meta' => [
                                            'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/customentity/8447381f-8cd1-11ed-0a80-014000e2ec30/df10c6db-8cd5-11ed-0a80-0ffb00dcc0b3',
                                            "metadataHref" => "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/8447381f-8cd1-11ed-0a80-014000e2ec30",
                                            "type" => "customentity",
                                            "mediaType" => "application/json",
                                            "uuidHref" => "https://online.moysklad.ru/app/#custom_8447381f-8cd1-11ed-0a80-014000e2ec30/edit?id=df10c6db-8cd5-11ed-0a80-0ffb00dcc0b3"
                                        ]
                                    ]
                                ],
                                [//sale
                                    'meta' => [
                                        'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/a712b5ef-e0d4-11ed-0a80-0f3f0015d063',
                                        'type' => 'attributemetadata',
                                        'mediaType' => 'application/json'
                                    ],
                                    'value' => [
                                        'meta' => [
                                            'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/employee/1f6007c8-31a6-11ed-0a80-09cb0037328c',
                                            "metadataHref" => "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                                            "type" => "employee",
                                            "mediaType" => "application/json",
                                            "uuidHref" => "https://online.moysklad.ru/app/#employee/edit?id=1f6007c8-31a6-11ed-0a80-09cb0037328c"
                                        ]
                                    ]
                                ],
                                [//setup
                                    'meta' => [
                                        'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/54ecd644-215f-11ee-0a80-10fe001e6aed',
                                        'type' => 'attributemetadata',
                                        'mediaType' => 'application/json'
                                    ],
                                    'value' => [
                                        'meta' => [
                                            'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/employee/1f6007c8-31a6-11ed-0a80-09cb0037328c',
                                            "metadataHref" => "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                                            "type" => "employee",
                                            "mediaType" => "application/json",
                                            "uuidHref" => "https://online.moysklad.ru/app/#employee/edit?id=1f6007c8-31a6-11ed-0a80-09cb0037328c"
                                        ]
                                    ]
                                ]
                            ];

                            //source 872a58d7-9980-11ed-0a80-0c3c001c7e62
                            //setup 833ff40e-df58-11ed-0a80-0f3a0009403a
                            //sale 164fb8bb-e0d4-11ed-0a80-04cf0014dd06
                            if (array_key_exists('attributes', $last_order)) {
                                foreach ($last_order['attributes'] as $attribute) {
                                    //source
                                    if ($attribute['id'] === '872a58d7-9980-11ed-0a80-0c3c001c7e62') {
                                        $attributes[0]['value']['meta']['href'] = $attribute['value']['meta']['href'];
                                        $attributes[0]['value']['meta']['metadataHref'] = $attribute['value']['meta']['metadataHref'];
                                        $attributes[0]['value']['meta']['uuidHref'] = $attribute['value']['meta']['uuidHref'];
                                    }

                                    //sale
                                    if ($attribute['id'] === '164fb8bb-e0d4-11ed-0a80-04cf0014dd06') {
                                        $attributes[1]['value']['meta']['href'] = $attribute['value']['meta']['href'];
                                        $attributes[1]['value']['meta']['metadataHref'] = $attribute['value']['meta']['metadataHref'];
                                        $attributes[1]['value']['meta']['uuidHref'] = $attribute['value']['meta']['uuidHref'];
                                    }

                                    //setup
                                    if ($attribute['id'] === '833ff40e-df58-11ed-0a80-0f3a0009403a') {
                                        $attributes[2]['value']['meta']['href'] = $attribute['value']['meta']['href'];
                                        $attributes[2]['value']['meta']['metadataHref'] = $attribute['value']['meta']['metadataHref'];
                                        $attributes[2]['value']['meta']['uuidHref'] = $attribute['value']['meta']['uuidHref'];
                                    }
                                }
                            }

                            $agent = array_key_exists('agent', $last_order) ? $last_order['agent'] : null;

                            $create_retail_demand = Http::withHeaders([
                                'Authorization' => 'Bearer ' . $access_token,
                                'Content-Type' => 'application/json'
                            ])->post('https://online.moysklad.ru/api/remap/1.2/entity/retaildemand', [
                                'retailShift' => [
                                    'meta' => [
                                        'href' => $retail_shift['meta']['href'],
                                        'type' => 'retailshift',
                                        'mediaType' => 'application/json'
                                    ]
                                ],
                                'attributes' => $attributes,
                                'agent' => $agent,
                                'vatEnabled' => false
                            ]);

                            $retail_demand = $create_retail_demand->json();

                            if (array_key_exists('positions', $last_order)) {
                                $positions = Http::withHeaders([
                                    'Authorization' => 'Bearer ' . $access_token
                                ])->get($last_order['meta']['href'] . '/positions');
                                $positions = $positions->json();

                                if (count($positions['rows']) > 0) {
                                    $positions = $positions['rows'];
                                    //dd($positions);
                                    $positions = array_map(function ($x) {
                                        unset($x['meta']);
                                        unset($x['id']);
                                        return $x;
                                    }, $positions);

                                    Http::withHeaders([
                                        'Authorization' => 'Bearer ' . $access_token,
                                        'Content-Type' => 'application/json'
                                    ])->post($retail_demand['meta']['href'] . '/positions', [
                                        $positions
                                    ]);

                                    Log::alert('RETAIL demand successfully created ' . $last_order['id']);
                                    return response()->json('Retail demand successfully created');
                                }
                            }
                        }

                        Log::alert('Retail shift not found ' . $last_order['id']);
                        return response()->json('Retail shift not found');
                    }

                    Log::alert('Retail store not found ' . $last_order['id']);
                    return response()->json('Retail store not found');
                }

                Log::alert('store not found ' . $last_order['id']);
                return response()->json('Store not found');
            }

            return response()->json('Retail demand created');
    }
}

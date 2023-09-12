<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
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
    public function createRetailDemand(Request $request): JsonResponse
    {
            $access_token = $this->doAuth();
            $last_order = null;

            if ($request->query('id')) {
                $last_order = Http::withHeaders([
                    'Authorization' => 'Bearer ' . $access_token
                ])->get('https://online.moysklad.ru/api/remap/1.2/entity/customerorder/' . $request->query('id'));

                $last_order = $last_order->json();
            }

            if ($last_order) {
                $store = array_key_exists('store', $last_order) ? $last_order['store']['meta']['href'] : null;

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
                            $cash = 0.0;
                            $no_cash = 0.0;
                            $qr = 0.0;
                            $positions = null;
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
                                ],
                            ];

                            //source 872a58d7-9980-11ed-0a80-0c3c001c7e62
                            //setup 833ff40e-df58-11ed-0a80-0f3a0009403a
                            //sale 164fb8bb-e0d4-11ed-0a80-04cf0014dd06
                            //owner 0b1fbffe-3a10-11ee-0a80-08b000260921
                            //payment method e9e86f71-4344-11ee-0a80-0ee900395ef1
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

                                    //Payment method
                                    if ($attribute['id'] === 'e9e86f71-4344-11ee-0a80-0ee900395ef1') {
                                        $payment_method = $attribute['value']['name'];

                                        if ($payment_method === 'Картой') {
                                            $no_cash = (float)$last_order['sum'];
                                        }

                                        if ($payment_method === 'Наличными') {
                                            $cash = (float)$last_order['sum'];
                                        }

                                        if ($payment_method === 'По QR-коду') {
                                            $qr = (float)$last_order['sum'];
                                        }
                                    }
                                }
                            }

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
                                'customerOrder' => $last_order,
                                'vatEnabled' => false,
                                'positions' => $positions,
                                'qrSum' => $qr,
                                'cashSum' => $cash,
                                'noCashSum' => $no_cash,
                                'prepaymentCashSum' => 0.0,
                                'prepaymentNoCashSum' => 0.0,
                                'prepaymentQrSum' => 0.0,
                            ]);

                            Log::alert('Retail demand created ' . $last_order['id']);
                            return response()->json('Retail demand created');
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

            return response()->json('Order not found');
    }

    public function setOwnerToCustomerOrder(Request $request): JsonResponse
    {
        $access_token = $this->doAuth();
        $last_order = null;

        if ($request->query('id')) {
            $last_order = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token
            ])->get('https://online.moysklad.ru/api/remap/1.2/entity/customerorder/' . $request->query('id'));

            $last_order = $last_order->json();
        }

        if ($last_order) {
            if (array_key_exists('attributes', $last_order)) {
                foreach ($last_order['attributes'] as $attribute) {

                    //test responsible
                    if ($attribute['id'] === '0b1fbffe-3a10-11ee-0a80-08b000260921') {
                        $full_name = $attribute['value']['name'];
                        $full_name = explode(' ',$full_name);

                        $employee = Http::withHeaders([
                            'Authorization' => 'Bearer ' . $access_token
                        ])->get('https://online.moysklad.ru/api/remap/1.2/entity/employee', [
                            'limit' => 1,
                            'filter' => 'firstName=' . $full_name[0]. ';lastName=' . $full_name[1]
                        ]);

                        $employee = $employee->json();

                        if ($employee) {
                            $employee = $employee['rows'][0];

                            Http::withHeaders([
                                'Authorization' => 'Bearer ' . $access_token
                            ])->put('https://online.moysklad.ru/api/remap/1.2/entity/customerorder/2cb93285-426b-11ee-0a80-13bd0021bd3c', [
                                'owner' => [
                                    'meta' => $employee['meta']
                                ]
                            ]);

                            Log::alert('Customer order updated ' . $last_order['id']);
                            return response()->json('Customer order updated');

                        }else {
                            Log::alert('Employee not found ' . $last_order['id']);
                            return response()->json('Employee not found');
                        }
                    }
                }
            }
        }

        return response()->json('Order not found');
    }

    public function getNewAccessToken() {
        $amo = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->post('https://avtosvetkzinboxru373.amocrm.ru/oauth2/access_token', [
                'client_id' => env('AMO_ID'),
                'client_secret' => env('AMO_SECRET'),
                'grant_type' => 'refresh_token',
                'refresh_token' => env('AMOCRM_REFRESH_TOKEN'),
                'redirect_uri' => 'https://back.eatandfit.kz/api/moysklad-amo'
            ]);

        if ($amo->status() === 200 || $amo->status() === 201) {
            $amo = $amo->json();
            putenv('AMOCRM_ACCESS_TOKEN=' . $amo['access_token']);
            putenv('AMOCRM_REFRESH_TOKEN=' . $amo['refresh_token']);
        }
    }
    public function createCustomerOrder(Request $request): JsonResponse
    {
        //Log::alert('Request ' . $request);
        /*$amo = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->post('https://avtosvetkzinboxru373.amocrm.ru/oauth2/access_token', [
            'client_id' => env('AMO_ID'),
            'client_secret' => env('AMO_SECRET'),
            'grant_type' => 'authorization_code',
            'code' => 'def502002f1cd264b6a807fa6d6e71b72cbbc1a1a5e612f9fe51619f71f9b733581696551c9260aca98a0a92c958987a2fbcf7875b038562a3c1372feac772bdcb6edd14ddff018972e31a0242e1a9b61b1cdca892eaba2319f239a2ecad812fd3a80a1613211526593978b0e61dbd62485223f31ee50731b3932a953c19d9a8f696cad83ce2990e76dda83f3738edac2a33a7d3daea29861889d41d032101c6989bbc2bb76e7787a63f82d3e1d43984627cc7029e09f98223e0cda8baa8054fbca03a1dcdf87b9baf6eff3a47907b7b8000dc0f60c4696fadc0ac2fd34f04258fcbe1361e98ebfeedbfd5556a74689a0ca1e2214707aecc24c501f9bacb24043d696ecdc63453d97017085330ac3c227fcc68650e6c50c5e7d564f99fd9288e152f1fb79934604c9b0548d5f10d00b9265bb8df555a264ecfc85137cda33466dc95218395471252f82b84118a8787de904e1ede1cf9fec415a0bfaa3b2b48bf62222a8087ef9e793cff23024e20e32956d0253698b9c3c887ccb7388fac90e099bfe2e6535b66dd57d4042e0eef27d09bf37d5f7222ecfc4a95dd29f803ee1ef451598cca5d086d7df5d54adec6554b33fb50445fb678a7ce77dad0240561492a6f6a2e8b30602a9f9df1292159e68de57a910f782435148157a1c009365d7ccb41c96555bd8bae7d83388ff4ddb2fba53d6a3e3e08630995f61b42',
            'redirect_uri' => 'https://back.eatandfit.kz/api/moysklad-amo'
        ]);

        $amo_access_token = $amo->json();
        dd($amo_access_token);*/
        //$this->getNewAccessToken();
        $id = $request->leads['status'][0]['id'];
        $lead = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('AMOCRM_ACCESS_TOKEN')
        ])->get('https://avtosvetkzinboxru373.amocrm.ru/api/v4/leads/' . $id, [
            'with' => 'contacts'
        ]);

        if ($lead->status() === 401) {
            $this->getNewAccessToken();

            $lead = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('AMOCRM_ACCESS_TOKEN')
            ])->get('https://avtosvetkzinboxru373.amocrm.ru/api/v4/leads/' . $id, [
                'with' => 'contacts'
            ]);
        }

        $lead = $lead->json();
        //dd($lead);
        $phone = null;

        //Get contact phone
        if (array_key_exists('contacts', $lead['_embedded'])) {
            if (count($lead['_embedded']['contacts']) > 0) {
                $contact_id = $lead['_embedded']['contacts'][0]['id'];
                $contact = Http::withHeaders([
                    'Authorization' => 'Bearer ' . env('AMOCRM_ACCESS_TOKEN')
                ])->get('https://avtosvetkzinboxru373.amocrm.ru/api/v4/contacts/' . $contact_id);

                if ($contact->status() === 200) {
                    $contact = $contact->json();

                    if (array_key_exists('custom_fields_values', $contact)
                        && count($contact['custom_fields_values']) > 0
                    ) {
                        foreach ($contact['custom_fields_values'] as $field) {
                            if ($field['field_id'] === 2468443) {
                                $phone = $field['values'][0]['value'];
                            }
                        }
                    }
                }
            }
        }

        $access_token = $this->doAuth();
        $agent = null;

        if ($phone) {
            $found_agent = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token,
                'Content-Type' => 'application/json'
            ])->get('https://online.moysklad.ru/api/remap/1.2/entity/counterparty', [
                'filter' => 'phone=' . $phone
            ]);

            $found_agent = $found_agent->json();

            if (array_key_exists('rows', $found_agent) && count($found_agent['rows']) > 0) {
                $agent = $found_agent['rows'][0]['meta'];
            }
        }else {
            $new_agent = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token,
                'Content-Type' => 'application/json'
            ])->post('https://online.moysklad.ru/api/remap/1.2/entity/counterparty', [
                'name' => Carbon::now()
            ]);

            $new_agent = $new_agent->json();
            $agent = $new_agent['meta'];
        }

        if ($agent) {
            $attributes = [];
            $store = null;

            foreach ($lead['custom_fields_values'] as $field) {
                //Sklad
                if ($field['field_id'] === 2469455) {
                    $store_id = $field['values'][0]['enum_code'];
                    $store = [
                        'meta' => [
                            'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/store/' . $store_id,
                            "metadataHref" => "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                            "type" => "store",
                            "mediaType" => "application/json"
                        ]
                    ];
                }

                //Marka
                if ($field['field_id'] === 2609137) {
                    $found_mark = Http::withHeaders([
                        'Authorization' => 'Bearer ' . $access_token,
                        'Content-Type' => 'application/json'
                    ])->get('https://online.moysklad.ru/api/remap/1.2/entity/customentity/4018fdab-5206-11ed-0a80-0703001e621a', [
                        'filter' => 'name=' . $field['values'][0]['value']
                    ]);

                    if ($found_mark->status() === 200) {
                        $found_mark = $found_mark->json();

                        if (array_key_exists('rows', $found_mark) && count($found_mark['rows']) > 0) {
                            $attributes[] = [
                                'meta' => [
                                    'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/497d37c2-5206-11ed-0a80-0e0d001d7351',
                                    'type' => 'attributemetadata',
                                    'mediaType' => 'application/json'
                                ],
                                'value' => [
                                    'meta' => $found_mark['rows'][0]['meta']
                                ]
                            ];
                        }
                    }
                }

                //Model
                if ($field['field_id'] === 2609143) {
                    $attributes[] = [
                        'meta' => [
                            'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/368eda5c-5209-11ed-0a80-05c2001d72a8',
                            'type' => 'attributemetadata',
                            'mediaType' => 'application/json'
                        ],
                        'value' => $field['values'][0]['value']
                    ];
                }

                //Source
                if ($field['field_id'] === 2609149) {
                    $found_source = Http::withHeaders([
                        'Authorization' => 'Bearer ' . $access_token,
                        'Content-Type' => 'application/json'
                    ])->get('https://online.moysklad.ru/api/remap/1.2/entity/customentity/8447381f-8cd1-11ed-0a80-014000e2ec30', [
                        'filter' => 'name=' . $field['values'][0]['value']
                    ]);

                    if ($found_source->status() === 200) {
                        $found_source = $found_source->json();

                        if (array_key_exists('rows', $found_source) && count($found_source['rows']) > 0) {
                            $attributes[] = [
                                'meta' => [
                                    'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/872a58d7-9980-11ed-0a80-0c3c001c7e62',
                                    'type' => 'attributemetadata',
                                    'mediaType' => 'application/json'
                                ],
                                'value' => [
                                    'meta' => $found_source['rows'][0]['meta']
                                ]
                            ];
                        }
                    }
                }

                /*//Setup test
                if ($field['field_id'] === 2609149) {
                    $found_source = Http::withHeaders([
                        'Authorization' => 'Bearer ' . $access_token,
                        'Content-Type' => 'application/json'
                    ])->get('https://online.moysklad.ru/api/remap/1.2/entity/customentity/8447381f-8cd1-11ed-0a80-014000e2ec30', [
                        'filter' => 'name=' . $field['values'][0]['value']
                    ]);

                    if ($found_source->status() === 200) {
                        $found_source = $found_source->json();

                        if (array_key_exists('rows', $found_source) && count($found_source['rows']) > 0) {
                            $attributes[] = [
                                'meta' => [
                                    'href' => 'https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/0b1fbffe-3a10-11ee-0a80-08b000260921',
                                    'type' => 'attributemetadata',
                                    'mediaType' => 'application/json'
                                ],
                                'value' => [
                                    'meta' => $found_source['rows'][0]['meta']
                                ]
                            ];
                        }
                    }
                }*/
            }

            $new_order = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token,
                'Content-Type' => 'application/json'
            ])->post('https://online.moysklad.ru/api/remap/1.2/entity/customerorder', [
                'organization' => [
                    "meta" => [
                        "href" => "https://online.moysklad.ru/api/remap/1.2/entity/organization/1f71907c-31a6-11ed-0a80-09cb003732d1",
                        "type" => "organization",
                        "mediaType" => "application/json"
                    ]
                ],
                'applicable' => true,
                'agent' => [
                    'meta' => $agent
                ],
                'store' => $store,
                'attributes' => $attributes
            ]);

            if ($new_order->status() === 200 || $new_order->status() === 201) {
                $new_order = $new_order->json();
                Log::alert('Customer order created ' . $new_order['id']);
                return response()->json('Agent trouble');
            }
        }else {
            Log::alert('Agent trouble ' . $lead['id']);
            return response()->json('Agent trouble');
        }

        return response()->json('Customer order creation end');
    }
}

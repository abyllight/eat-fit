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

        $req = Http::withBasicAuth($login, $pass)
            ->withHeaders([
                'Accept-Encoding' => 'gzip'
            ])->post('https://api.moysklad.ru/api/remap/1.2/security/token');

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
                'Authorization' => 'Bearer ' . $access_token,
                'Accept-Encoding' => 'gzip'
            ])->get('https://api.moysklad.ru/api/remap/1.2/entity/customerorder/' . $request->query('id'));

            $last_order = $last_order->json();
        }

        if ($last_order) {
            $store = array_key_exists('store', $last_order) ? $last_order['store']['meta']['href'] : null;

            if ($store) {
                $retail_store = Http::withHeaders([
                    'Authorization' => 'Bearer ' . $access_token,
                    'Accept-Encoding' => 'gzip'
                ])->get('https://api.moysklad.ru/api/remap/1.2/entity/retailstore', [
                    'limit' => 1,
                    'filter' => 'store=' . $store
                ]);

                $retail_store = $retail_store->json();

                if ($retail_store && array_key_exists('rows', $retail_store) && count($retail_store['rows']) > 0) {
                    $retail_store = $retail_store['rows'][0];

                    $retail_shift = Http::withHeaders([
                        'Authorization' => 'Bearer ' . $access_token,
                        'Accept-Encoding' => 'gzip'
                    ])->get('https://api.moysklad.ru/api/remap/1.2/entity/retailshift', [
                        'order' => 'moment,desc',
                        'limit' => 1,
                        'filter' => 'retailStore=' . $retail_store['meta']['href']
                    ]);

                    $retail_shift = $retail_shift->json();

                    if (array_key_exists('rows', $retail_shift) && count($retail_shift['rows']) > 0) {
                        $retail_shift = $retail_shift['rows'][0];
                        $cash = 0.0;
                        $no_cash = 0.0;
                        $qr = 0.0;
                        $positions = null;
                        $owner = null;
                        $attributes = [
                            [//source
                                'meta' => [
                                    'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/e8ce5c74-8cd4-11ed-0a80-0ec600de235f',
                                    'type' => 'attributemetadata',
                                    'mediaType' => 'application/json'
                                ],
                                'value' => [
                                    'meta' => [
                                        'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customentity/8447381f-8cd1-11ed-0a80-014000e2ec30/df10c6db-8cd5-11ed-0a80-0ffb00dcc0b3',
                                        "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/8447381f-8cd1-11ed-0a80-014000e2ec30",
                                        "type" => "customentity",
                                        "mediaType" => "application/json",
                                        "uuidHref" => "https://api.moysklad.ru/app/#custom_8447381f-8cd1-11ed-0a80-014000e2ec30/edit?id=df10c6db-8cd5-11ed-0a80-0ffb00dcc0b3"
                                    ]
                                ]
                            ],
                            /*[//sale
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
                            ],*/
                            [//setup
                                'meta' => [
                                    'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/54ecd644-215f-11ee-0a80-10fe001e6aed',
                                    'type' => 'attributemetadata',
                                    'mediaType' => 'application/json'
                                ],
                                'value' => [
                                    'meta' => [
                                        'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/employee/1f6007c8-31a6-11ed-0a80-09cb0037328c',
                                        "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                                        "type" => "employee",
                                        "mediaType" => "application/json",
                                        "uuidHref" => "https://api.moysklad.ru/app/#employee/edit?id=1f6007c8-31a6-11ed-0a80-09cb0037328c"
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

                                /*//sale
                                if ($attribute['id'] === '164fb8bb-e0d4-11ed-0a80-04cf0014dd06') {
                                    $attributes[1]['value']['meta']['href'] = $attribute['value']['meta']['href'];
                                    $attributes[1]['value']['meta']['metadataHref'] = $attribute['value']['meta']['metadataHref'];
                                    $attributes[1]['value']['meta']['uuidHref'] = $attribute['value']['meta']['uuidHref'];
                                }*/

                                //setup
                                if ($attribute['id'] === '833ff40e-df58-11ed-0a80-0f3a0009403a') {
                                    $attributes[1]['value']['meta']['href'] = $attribute['value']['meta']['href'];
                                    $attributes[1]['value']['meta']['metadataHref'] = $attribute['value']['meta']['metadataHref'];
                                    $attributes[1]['value']['meta']['uuidHref'] = $attribute['value']['meta']['uuidHref'];
                                }

                                //Payment method
                                if ($attribute['id'] === 'e9e86f71-4344-11ee-0a80-0ee900395ef1') {
                                    $payment_method = $attribute['value']['name'];

                                    if ($payment_method === 'Картой' || $payment_method === 'Банковский перевод') {
                                        $no_cash = (float)$last_order['sum'];
                                    }

                                    if ($payment_method === 'Наличными') {
                                        $cash = (float)$last_order['sum'];
                                    }

                                    if ($payment_method === 'Рассрочка') {
                                        $qr = (float)$last_order['sum'];
                                    }
                                }
                            }
                        }

                        if (array_key_exists('positions', $last_order)) {
                            $positions = Http::withHeaders([
                                'Authorization' => 'Bearer ' . $access_token,
                                'Accept-Encoding' => 'gzip'
                            ])->get($last_order['meta']['href'] . '/positions');
                            $positions = $positions->json();

                            if (array_key_exists('rows', $positions) && count($positions['rows']) > 0) {
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

                        if (array_key_exists('owner', $last_order)) {
                            $owner = $last_order['owner'];
                        }

                        $create_retail_demand = Http::withHeaders([
                            'Authorization' => 'Bearer ' . $access_token,
                            'Content-Type' => 'application/json',
                            'Accept-Encoding' => 'gzip'
                        ])->post('https://api.moysklad.ru/api/remap/1.2/entity/retaildemand', [
                            'retailShift' => [
                                'meta' => [
                                    'href' => $retail_shift['meta']['href'],
                                    'type' => 'retailshift',
                                    'mediaType' => 'application/json'
                                ]
                            ],
                            'description' => array_key_exists('description', $last_order) ? $last_order['description'] : null,
                            'attributes' => $attributes,
                            'agent' => $agent,
                            'owner' => $owner,
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

                        if ($create_retail_demand->status() === 200 || $create_retail_demand->status() === 201) {
                            Log::alert('Retail demand created ' . $last_order['id']);

                            $state = $last_order['state']['meta']['href'];

                            //Если успешная сделка
                            if (str_contains($state, '06aa843b-ad60-11ed-0a80-0bc10000fd8c')) {
                                $lead_id = null;

                                Log::alert('Order changed to success' . $last_order['id']);
                                Log::alert('Order state' . $state);
                                if (array_key_exists('attributes', $last_order)) {
                                    foreach ($last_order['attributes'] as $attribute) {
                                        //Lead id
                                        if ($attribute['id'] === '4e5f9189-d571-11ee-0a80-02ac0064d218') {
                                            $lead_id = $attribute['value'];
                                            Log::alert('Found order lead ID' . $lead_id);
                                        }
                                    }
                                }
                                $data = [
                                    'status_id' => 142,
                                    'price' => (int)($last_order['sum']/100)
                                ];

                                $this->updateLead($lead_id, $data, $last_order['id']);
                            }
                            return response()->json('Retail demand success');
                        }

                        $create_retail_demand = $create_retail_demand->json();
                        Log::alert('Retail demand ERROR ' . $last_order['id'] . $create_retail_demand['errors'][0]['error'] . ' ' . $create_retail_demand['errors'][0]['code']);
                        return response()->json('Retail demand error');
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
                'Authorization' => 'Bearer ' . $access_token,
                'Accept-Encoding' => 'gzip'
            ])->get('https://api.moysklad.ru/api/remap/1.2/entity/customerorder/' . $request->query('id'));

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
                            'Authorization' => 'Bearer ' . $access_token,
                            'Accept-Encoding' => 'gzip'
                        ])->get('https://api.moysklad.ru/api/remap/1.2/entity/employee', [
                            'limit' => 1,
                            'filter' => 'firstName=' . $full_name[0]. ';lastName=' . $full_name[1]
                        ]);

                        $employee = $employee->json();

                        if ($employee) {
                            $employee = $employee['rows'][0];

                            Http::withHeaders([
                                'Authorization' => 'Bearer ' . $access_token,
                                'Accept-Encoding' => 'gzip'
                            ])->put('https://api.moysklad.ru/api/remap/1.2/entity/customerorder/2cb93285-426b-11ee-0a80-13bd0021bd3c', [
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
            $path = base_path('.env');

            if (file_exists($path)) {
                $test = file_get_contents($path);
                $access = env('AMOCRM_ACCESS_TOKEN');
                file_put_contents($path, str_replace('AMOCRM_ACCESS_TOKEN=' . $access, 'AMOCRM_ACCESS_TOKEN=' . $amo['access_token'], $test));

                $test2 = file_get_contents($path);
                $refresh = env('AMOCRM_REFRESH_TOKEN');
                file_put_contents($path, str_replace('AMOCRM_REFRESH_TOKEN=' . $refresh, 'AMOCRM_REFRESH_TOKEN=' . $amo['refresh_token'], $test2));
            }
        }
    }
    public function createCustomerOrder(Request $request): JsonResponse
    {
        //$this->getNewAccessToken();
        //Log::alert('Request ' . $request);
        /*$amo = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->post('https://avtosvetkzinboxru373.amocrm.ru/oauth2/access_token', [
            'client_id' => env('AMO_ID'),
            'client_secret' => env('AMO_SECRET'),
            'grant_type' => 'authorization_code',
            'code' => 'def5020083db760ab8670857d8078f1af097e74303e67c7fd18ed186ac39ac12e5ff78f3cbf09ca3a8044f4bfc284c187c13505bf1875007860d9eee56963a78c3ad39b1de304b179096cddbcbc1108d976b0eb0a806636b3b927cb0099c618afc4f6c446acd7560d5e02d2a8d137c2dc6c09af18e1e476ee712bd5a4800ee70a54019a539fa67f31c6b5d32c8572f5dadace49346e03984c8eb3cec5a1d713317526f96492006a0dea2326e823f9a610bf7bce15a7f46afbefe712b8ec3f628a206c077df8f2bd82025a14e1e86840fdd7b69d0f2588ed661b741ed8231bc84eb106fdc00d8aef6d3dce24aee47b78bc940d4362b96bd7eea01957ed841b868458622593e5be2090562e0ab4325fc66a88fd416928b4f5e7a645076b12096c6677575d0fd3769b07fa5741d72095f410daffaae908af05fa48f27ea3246fbcde863e8b8594071000249f0fc586d1277a5dcccac2196c9600760caa537aabda9d76218d027de6db304766f4cfdea26fc4ce41432ec10d5c359c3f7eb366afeaca13d8a487db375a0855a5f80bda45463be47b73ce333deb1e45238659321082f8257b8808685cd2c4fa6702418f87dfc02a2c03b31e3bb25ae4afd8836a7631104970fa752f30f56e83986cf1a269025d23aeed271cd735036974d30a4bd4d056ac7c8877d0857efd2d1f25e4746726137ff4b847b352b2a595c6ea1',
            'redirect_uri' => 'https://back.eatandfit.kz/api/moysklad-amo'
        ]);

        $amo_access_token = $amo->json();
        dd($amo_access_token);*/
        //$this->getNewAccessToken();
        $id = $request->leads['status'][0]['id'];
        $lead = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('AMOCRM_LONG_TOKEN')
        ])->get('https://avtosvetkzinboxru373.amocrm.ru/api/v4/leads/' . $id, [
            'with' => 'contacts'
        ]);

        if ($lead->status() === 401) {
            $this->getNewAccessToken();

            $lead = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('AMOCRM_LONG_TOKEN')
            ])->get('https://avtosvetkzinboxru373.amocrm.ru/api/v4/leads/' . $id, [
                'with' => 'contacts'
            ]);
        }

        $lead = $lead->json();
        Log::alert('Lead ' . $lead['id']);

        $phone = null;
        $contact_name = null;

        if (array_key_exists('_embedded', $lead)) {
            //Get contact phone
            if (array_key_exists('contacts', $lead['_embedded'])) {
                if (count($lead['_embedded']['contacts']) > 0) {
                    $contact_id = $lead['_embedded']['contacts'][0]['id'];
                    $contact = Http::withHeaders([
                        'Authorization' => 'Bearer ' . env('AMOCRM_LONG_TOKEN')
                    ])->get('https://avtosvetkzinboxru373.amocrm.ru/api/v4/contacts/' . $contact_id);

                    if ($contact->status() === 200) {
                        $contact = $contact->json();
                        $contact_name = $contact['name'];

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
        }

        $access_token = $this->doAuth();

        if ($phone) {
            $found_agent = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token,
                'Content-Type' => 'application/json',
                'Accept-Encoding' => 'gzip'
            ])->get('https://api.moysklad.ru/api/remap/1.2/entity/counterparty', [
                'filter' => 'phone=' . $phone
            ]);

            $found_agent = $found_agent->json();

            if (array_key_exists('rows', $found_agent) && count($found_agent['rows']) > 0) {
                $agent = $found_agent['rows'][0]['meta'];
            }else {
                $new_agent = Http::withHeaders([
                    'Authorization' => 'Bearer ' . $access_token,
                    'Content-Type' => 'application/json',
                    'Accept-Encoding' => 'gzip'
                ])->post('https://api.moysklad.ru/api/remap/1.2/entity/counterparty', [
                    'name' => $contact_name ?? Carbon::now(),
                    'phone' => $phone
                ]);

                $new_agent = $new_agent->json();
                $agent = $new_agent['meta'];
            }
        }else {
            $new_agent = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token,
                'Content-Type' => 'application/json',
                'Accept-Encoding' => 'gzip'
            ])->post('https://api.moysklad.ru/api/remap/1.2/entity/counterparty', [
                'name' => $contact_name ?? Carbon::now()
            ]);

            $new_agent = $new_agent->json();
            $agent = $new_agent['meta'];
        }

        if ($agent) {
            $attributes = [
                [//sale
                    'meta' => [
                        'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/164fb8bb-e0d4-11ed-0a80-04cf0014dd06',
                        'type' => 'attributemetadata',
                        'mediaType' => 'application/json'
                    ],
                    'value' => [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/employee/1f6007c8-31a6-11ed-0a80-09cb0037328c',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type" => "employee",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://api.moysklad.ru/app/#employee/edit?id=1f6007c8-31a6-11ed-0a80-09cb0037328c"
                        ]
                    ]
                ],
                [//setup
                    'meta' => [
                        'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/833ff40e-df58-11ed-0a80-0f3a0009403a',
                        'type' => 'attributemetadata',
                        'mediaType' => 'application/json'
                    ],
                    'value' => [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/employee/1f6007c8-31a6-11ed-0a80-09cb0037328c',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type" => "employee",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://online.moysklad.ru/app/#employee/edit?id=1f6007c8-31a6-11ed-0a80-09cb0037328c"
                        ]
                    ]
                ],
                [//payment type
                    'meta' => [
                        'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/e9e86f71-4344-11ee-0a80-0ee900395ef1',
                        'type' => 'attributemetadata',
                        'mediaType' => 'application/json'
                    ],
                    'value' => [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customentity/b8e8ef37-4344-11ee-0a80-11f300387c50/c513d9d1-4344-11ee-0a80-096d00397696',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/b8e8ef37-4344-11ee-0a80-11f300387c50",
                            "type" => "customentity",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://api.moysklad.ru/app/#custom_b8e8ef37-4344-11ee-0a80-11f300387c50/edit?id=c513d9d1-4344-11ee-0a80-096d00397696"
                        ]
                    ]
                ],
                [//visit date
                    'meta' => [
                        'href' => "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/d7d619f5-293b-11ee-0a80-02b70020a6ee",
                        "type" => "attributemetadata",
                        "mediaType" => "application/json"
                    ],
                    'value' => ''
                ],
                [//source
                    'meta' => [
                        'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/872a58d7-9980-11ed-0a80-0c3c001c7e62',
                        'type' => 'attributemetadata',
                        'mediaType' => 'application/json'
                    ],
                    'value' => [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customentity/8447381f-8cd1-11ed-0a80-014000e2ec30/df10c6db-8cd5-11ed-0a80-0ffb00dcc0b3',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/8447381f-8cd1-11ed-0a80-014000e2ec30",
                            "type" => "customentity",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://api.moysklad.ru/app/#custom_8447381f-8cd1-11ed-0a80-014000e2ec30/edit?id=df10c6db-8cd5-11ed-0a80-0ffb00dcc0b3"
                        ]
                    ]
                ]
            ];
            $store = null;
            $responsible = null;

            if (array_key_exists('responsible_user_id', $lead)) {
                //Korme
                if ($lead['responsible_user_id'] === 9990914) {
                    //Онищук
                    $responsible = [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/employee/f828c207-a877-11ed-0a80-095d0011cb58',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type" => "employee",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://api.moysklad.ru/app/#employee/edit?id=f828c207-a877-11ed-0a80-095d0011cb58"
                        ]
                    ];
                }

                //Tauelsizdik
                if ($lead['responsible_user_id'] === 9990926) {
                    //Корчевой
                    $responsible = [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/employee/90238af2-2fa6-11ee-0a80-0b350036e8ea',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type" => "employee",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://api.moysklad.ru/app/#employee/edit?id=90238af2-2fa6-11ee-0a80-0b350036e8ea"
                        ]
                    ];
                }

                //Vlasenko M V
                if ($lead['responsible_user_id'] === 9934174) {
                    //Vlasenko M V
                    $responsible = [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/employee/1f6007c8-31a6-11ed-0a80-09cb0037328c',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type" => "employee",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://api.moysklad.ru/app/#employee/edit?id=1f6007c8-31a6-11ed-0a80-09cb0037328c"
                        ]
                    ];
                }

                //Mikhasev
                if ($lead['responsible_user_id'] === 9990930) {
                    //Mikhasev
                    $responsible = [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/employee/fbb5c198-582d-11ed-0a80-0c910022d680',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type" => "employee",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://api.moysklad.ru/app/#employee/edit?id=fbb5c198-582d-11ed-0a80-0c910022d680"
                        ]
                    ];
                }

                //Danila
                if ($lead['responsible_user_id'] === 9990934) {
                    //Mikhasev
                    $responsible = [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/employee/c4ff92dd-531e-11ed-0a80-0703002a5a61',
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type" => "employee",
                            "mediaType" => "application/json",
                            "uuidHref" => "https://api.moysklad.ru/app/#employee/edit?id=c4ff92dd-531e-11ed-0a80-0703002a5a61"
                        ]
                    ];
                }
            }


            foreach ($lead['custom_fields_values'] as $field) {
                //Sklad
                if ($field['field_id'] === 2469455) {
                    $store_id = $field['values'][0]['enum_code'];
                    $store = [
                        'meta' => [
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/store/' . $store_id,
                            "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                            "type" => "store",
                            "mediaType" => "application/json"
                        ]
                    ];
                }

                //Marka
                if ($field['field_id'] === 2609137) {
                    $found_mark = Http::withHeaders([
                        'Authorization' => 'Bearer ' . $access_token,
                        'Content-Type' => 'application/json',
                        'Accept-Encoding' => 'gzip'
                    ])->get('https://api.moysklad.ru/api/remap/1.2/entity/customentity/4018fdab-5206-11ed-0a80-0703001e621a', [
                        'filter' => 'name=' . $field['values'][0]['value']
                    ]);

                    if ($found_mark->status() === 200) {
                        $found_mark = $found_mark->json();

                        if (array_key_exists('rows', $found_mark) && count($found_mark['rows']) > 0) {
                            $attributes[] = [
                                'meta' => [
                                    'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/497d37c2-5206-11ed-0a80-0e0d001d7351',
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
                            'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/368eda5c-5209-11ed-0a80-05c2001d72a8',
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
                        'Content-Type' => 'application/json',
                        'Accept-Encoding' => 'gzip'
                    ])->get('https://api.moysklad.ru/api/remap/1.2/entity/customentity/8447381f-8cd1-11ed-0a80-014000e2ec30', [
                        'filter' => 'name=' . $field['values'][0]['value']
                    ]);

                    if ($found_source->status() === 200) {
                        $found_source = $found_source->json();

                        if (array_key_exists('rows', $found_source) && count($found_source['rows']) > 0) {
                            $attributes[4] = [
                                'meta' => [
                                    'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/872a58d7-9980-11ed-0a80-0c3c001c7e62',
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

                //Payment type
                if ($field['field_id'] === 2625003) {
                    $found_payment = Http::withHeaders([
                        'Authorization' => 'Bearer ' . $access_token,
                        'Content-Type' => 'application/json',
                        'Accept-Encoding' => 'gzip'
                    ])->get('https://api.moysklad.ru/api/remap/1.2/entity/customentity/b8e8ef37-4344-11ee-0a80-11f300387c50', [
                        'filter' => 'name=' . $field['values'][0]['value']
                    ]);

                    if ($found_payment->status() === 200) {
                        $found_payment = $found_payment->json();

                        if (array_key_exists('rows', $found_payment) && count($found_payment['rows']) > 0) {
                            $attributes[2] = [
                                'meta' => [
                                    'href' => 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/e9e86f71-4344-11ee-0a80-0ee900395ef1',
                                    'type' => 'attributemetadata',
                                    'mediaType' => 'application/json'
                                ],
                                'value' => [
                                    'meta' => $found_payment['rows'][0]['meta']
                                ]
                            ];
                        }
                    }
                }

                //Visit date
                if ($field['field_id'] === 2469445) {
                    $date = $field['values'][0]['value'];
                    $attributes[3]['value'] = Carbon::createFromTimestamp($date)->tz('Europe/Moscow')->toDateTimeString();
                }
            }

            $new_order = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token,
                'Content-Type' => 'application/json',
                'Accept-Encoding' => 'gzip'
            ])->post('https://api.moysklad.ru/api/remap/1.2/entity/customerorder', [
                'organization' => [
                    "meta" => [
                        "href" => "https://api.moysklad.ru/api/remap/1.2/entity/organization/1f71907c-31a6-11ed-0a80-09cb003732d1",
                        "type" => "organization",
                        "mediaType" => "application/json"
                    ]
                ],
                'applicable' => true,
                'agent' => [
                    'meta' => $agent
                ],
                'owner' => $responsible,
                'store' => $store,
                'attributes' => $attributes,
                'state' => [
                    "meta" => [
                        "href" => "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/1f84df83-31a6-11ed-0a80-09cb003732f8",
                        "metadataHref" => "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                        "type" => "state",
                        "mediaType" => "application/json"
                    ]
                ]
            ]);

            if ($new_order->status() === 200 || $new_order->status() === 201) {
                $new_order = $new_order->json();
                Log::alert('Customer order created ' . $new_order['id']);

                $update_lead = Http::withHeaders([
                    'Authorization' => 'Bearer ' . env('AMOCRM_LONG_TOKEN')
                ])->patch('https://avtosvetkzinboxru373.amocrm.ru/api/v4/leads/' . $id, [
                    'custom_fields_values' => [
                        [
                            "field_id" => 2634140,
                            "values" => [
                                [
                                    "value" => "https://online.moysklad.ru/app/#customerorder/edit?id=" . $new_order['id']
                                ]
                            ]
                        ]
                    ]
                ]);

                if ($update_lead->status() === 200 || $update_lead->status() === 201) {
                    Log::alert('Update lead link ' . $new_order['id']);
                }

                return response()->json('Customer order created');

            }
        }else {
            Log::alert('Agent trouble ' . $lead['id']);
            return response()->json('Agent trouble');
        }

        return response()->json('Customer order creation end');
    }

    public function changeStage(Request $request): JsonResponse
    {
        $order = null;

        if ($request->query('id')) {
            $access_token = $this->doAuth();
            $order = Http::withHeaders([
                'Authorization' => 'Bearer ' . $access_token,
                'Accept-Encoding' => 'gzip'
            ])->get('https://api.moysklad.ru/api/remap/1.2/entity/customerorder/' . $request->query('id'));

            $order = $order->json();
        }

        if (!$order) {
            Log::alert('Order not found ' . $request->query('id'));
            return response()->json('Order not found');
        }

        //AMOCRM states
        //Принят в работу 64614074
        //Готов к выдаче 64614546
        //Успешно реализовано 142
        //Предварительный рассчет 64615118

        $state = $order['state']['meta']['href'];
        $status_id = null;

        //Moysklad states
        $states = [
            [
                'moy' => '84eff092-2210-11ee-0a80-0efa0004d21e', //Предварительный рассчет
                'amo' => 64615118 //Предварительный рассчет
            ],
            [
                'moy' => '4b3ef0d5-40a4-11ed-0a80-0b95000a5688', //Авто/Фары в работе
                'amo' => 64614074 //Принят в работу
            ],
            [
                'moy' => 'a9eade0f-6f1a-11ed-0a80-0fea0062fd72', //Готово к выдаче - ожидаем оплату
                'amo' => 64614546 //Готов к выдаче
            ],
            [
                'moy' => 'a2e68289-ade6-11ed-0a80-09a9000d8197', //Сделка провалена
                'amo' => 143 //Закрыто и не реализовано
            ]
        ];
        $has_state = false;

        foreach ($states as $s) {
            if (str_contains($state, $s['moy'])) {
                $has_state = true;
                $status_id = $s['amo'];
                break;
            }
        }

        if (!$has_state) {
            Log::alert('Customer order doesnt fit statuses ' . $order['id']);
            return response()->json('Customer order doesnt fit statuses');
        }

        $lead_id = null;

        if (array_key_exists('attributes', $order)) {
            foreach ($order['attributes'] as $attribute) {
                //Lead id
                if ($attribute['id'] === '4e5f9189-d571-11ee-0a80-02ac0064d218') {
                    $lead_id = $attribute['value'];
                }
            }
        }

        $data = [
            'status_id' => $status_id
        ];

        $this->updateLead($lead_id, $data, $order['id']);

        return response()->json('SUCCESS! AMO AND MOYSKLAD STATUSES OK!');
    }

    public function updateLead($lead_id, array $fields, $order_id): JsonResponse
    {
        if (!$lead_id) {
            Log::alert('Lead id not found ' . $order_id);
            return response()->json('Lead id not found ' . $order_id);
        }

        $update_lead = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('AMOCRM_LONG_TOKEN'),
            'Content-type' => 'application/json'
        ])->patch('https://avtosvetkzinboxru373.amocrm.ru/api/v4/leads/' . $lead_id, $fields);

        if ($update_lead->status() === 200 || $update_lead->status() === 201) {
            Log::alert('Updated lead ' . $lead_id);
            return response()->json('LEAD STATUS UPDATED' . $lead_id);
        }

        return response()->json('LEAD NOT UPDATED' . $lead_id . ' status ' . $update_lead->status());
    }
}

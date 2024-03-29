<?php

namespace App\Http\Controllers;

use App\Http\Resources\CuisineCollection;
use App\Http\Resources\DishCollection;
use App\Models\Cuisine;
use App\Models\CuisineSize;
use App\Models\Dish;
use App\Models\DishIngredient;
use App\Models\DishSize;
use App\Models\Ingredient;
use App\Models\Order;
use App\Models\Purchase;
use App\Models\Ration;
use App\Models\Select;
use App\Models\Week;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use function Matrix\trace;

class CuisineController extends Controller
{
    public function index(): JsonResponse
    {
        $cuisines = Cuisine::orderBy('position')->get();

        $duty = Cuisine::where('is_on_duty', true)->first();
        if (!$duty) {
            $duty = Cuisine::first();
            $duty->is_on_duty = true;
            $duty->save();
        }
        /*$tomorrow = Carbon::tomorrow()->toDateString();
        $duty = Cuisine::where('is_on_duty', true)->first();
        $n = 0;

        foreach ($cuisines as $cuisine) {
            if ($cuisine->is_on_duty) {
                $cuisine->date = $tomorrow;
            }else {
                $res = $cuisine->position - $duty->position;

                if ($res > 0) {
                    $res = $res + $n;
                }else {
                    $res = abs($res) + $n + 26;
                }

                $date = Carbon::tomorrow()->addDays($res);

                if ($date->isSunday()) {
                    $date->addDay();
                    $n++;
                }

                $cuisine->date = $date->toDateString();
            }

            $cuisine->save();
        }*/

        return response()->json($cuisines->groupBy('week'));
    }

    public function show($id): JsonResponse
    {
        $cuisine = Cuisine::find($id);

        if (!$cuisine) {
            return response()->json([
                'status' => false,
                'msg' => 'Cuisine not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => new CuisineCollection($cuisine)
        ]);
    }

    public function fetchCuisinesFromIiko(): JsonResponse
    {
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();
        $link = '/resto/api/v2/entities/products/group/list?key=';
        $cuisines = $iiko->doRequest($token, $link);

        $blacklist = [
            'e94384fa-07d1-4690-a7de-7219f6261c8e',
            'b3835a97-aa97-4921-9ac4-e827864a0ef5',
            'bce1cdd3-a155-4328-a8a9-e879501d91b0',
            'fb41dbf4-4b29-4ac2-9899-4d0074d43046',
            '2b37ab08-65c4-431f-8db4-1572ed98a72b', //indonesia
            'e823ee09-54fc-4da0-8885-5aa643138174', //hawaii
            '42748484-97ee-4a00-9588-a1ad19001b0b', //jordan
        ];

        if (is_array($cuisines)) {
            foreach ($cuisines as $cuisine) {
                if (substr($cuisine['name'], 0, 2) === '! ' && !in_array($cuisine['id'], $blacklist)) {
                    $c = Cuisine::updateOrCreate(
                        ['iiko_id' => $cuisine['id']],
                        [
                            'iiko_name' => substr($cuisine['name'], 2),
                            'name' => substr($cuisine['name'], 2)
                        ]
                    );

                    $l = '/resto/api/v2/entities/products/list?types=DISH&parentIds=' . $c->iiko_id . '&key=';
                    $folders = $iiko->doRequest($token, $l);

                    foreach ($folders as $folder) {
                        $first = substr($folder['name'], 0, 1);

                        if ($first === '!') {
                            $explode = explode(' ', $folder['name']);

                            switch ($explode[2]) {
                                case 'XS':
                                    $type = Order::XS;
                                    break;
                                case 'S':
                                    $type = Order::S;
                                    break;
                                case 'M':
                                    $type = Order::M;
                                    break;
                                case 'L':
                                    $type = Order::L;
                                    break;
                                default:
                                    $type = Order::XL;
                                    break;
                            }

                            CuisineSize::updateOrCreate(
                                ['iiko_id' => $folder['id']],
                                [
                                    'name' => $folder['name'],
                                    'cuisine_id' => $c->id,
                                    'type' => $type
                                ]
                            );
                        }
                    }
                }
            }
        }else {
            return response()->json([
                'status' => false,
                'msg' => $cuisines
            ]);
        }

        $iiko->logout($token);

        return response()->json([
            'status' => true,
            'msg' => 'Кухни получены'
        ]);
    }

    public function setCuisine(Request $request): JsonResponse
    {
        $duty = Cuisine::find($request->id);

        if ($duty->is_on_duty) {
            $duty->date = Carbon::tomorrow()->toDateString();
            $duty->save();
        }else {
            Cuisine::where('is_on_duty', true)
                ->update([
                    'is_on_duty' => false,
                    'date' => null
                ]);

            if ($duty) {
                $duty->date = Carbon::tomorrow()->toDateString();
                $duty->is_on_duty = true;
                $duty->purchase_date = null;
                $duty->purchase_duty = false;
                $duty->save();

                Select::whereDate('created_at', Carbon::today())->delete();
            }
        }

        return response()->json(new CuisineCollection($duty));
    }

    public function setPurchase(Request $request): JsonResponse
    {
        Cuisine::where('purchase_duty', true)
            ->update([
                'purchase_duty' => false,
                'purchase_date' => null
            ]);

        $cuisine = Cuisine::find($request->id);

        $cuisine->purchase_date = Carbon::tomorrow()->addDay();
        $cuisine->purchase_duty = true;
        $cuisine->save();

        $purchase = Purchase::where('date', $cuisine->purchase_date)->first();

        if ($purchase) {
            if ($purchase->cuisine_id !== $cuisine->id) {
                $purchase->ingredients()->detach();
            }
            $purchase->cuisine_id = $cuisine->id;
            $purchase->save();
        }else{
            $p = new Purchase();
            $p->cuisine_id = $cuisine->id;
            $p->date = $cuisine->purchase_date;
            $p->save();
        }

        return response()->json([
            'status' => true,
            'msg' => 'Дата установлена!'
        ]);
    }

    public function getCuisineDishesByRation() {
        $duty_cuisine = Cuisine::where('is_on_duty', true)->first();

        $dishes = $duty_cuisine->dishes();
    }

    public function getDutyCuisine(): JsonResponse
    {
        $duty_cuisine = Cuisine::where('is_on_duty', true)->first();
        $dishes = [];

        foreach ($duty_cuisine->dishes as $d) {
            $dishes[] = [
                'name' => $d->name,
                'r_id' => $d->ration_id,
                'r_name' => $d->ration->name
            ];
        }
        return response()->json([
            'status' => true,
            'cuisine' => $duty_cuisine,
            'dishes' => $dishes
        ]);
    }

    public function getDishesByCuisineId($id): JsonResponse
    {
        $cuisine = Cuisine::find($id);
        $dishes = DishCollection::collection($cuisine->dishes->sortBy('ration_id'));

        return response()->json($dishes);
    }
    public function saveFile(Request $request, $id): JsonResponse
    {
        $request->validate([
            'file' => 'required'
        ]);

        $cuisine = Cuisine::find($id);

        if (!$cuisine) {
            return response()->json([
                'status' => false,
                'msg' => 'Cuisine not found'
            ]);
        }

        Storage::disk('public')->delete($cuisine->file);
        $cuisine->file = $request->file('file')->store('files', 'public');
        $cuisine->save();


        return response()->json([
            'status' => true,
            'msg' => 'Файл успешно добавлен'
        ]);
    }
}

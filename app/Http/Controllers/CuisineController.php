<?php

namespace App\Http\Controllers;

use App\Http\Resources\CuisineCollection;
use App\Http\Resources\DishCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Ration;
use App\Models\Select;
use App\Models\Week;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use function Matrix\trace;

class CuisineController extends Controller
{
    public function index(): JsonResponse
    {
        $cuisines = Cuisine::orderBy('name')->get();
        return response()->json(CuisineCollection::collection($cuisines));
    }

    public function fetchCuisines(): JsonResponse
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
            'b8dcd03d-739b-4f31-8e84-2e246b2dfefc', //ukraine
            '42748484-97ee-4a00-9588-a1ad19001b0b', //jordan
            '33063b9d-903c-40c4-b108-821bd5410c67', //halloween
        ];

        if (is_array($cuisines)) {
            foreach ($cuisines as $cuisine) {
                if (substr($cuisine['name'], 0, 2) === '! ' && !in_array($cuisine['id'], $blacklist)) {
                    Cuisine::updateOrCreate(
                        ['iiko_id' => $cuisine['id']],
                        [
                            'iiko_name' => substr($cuisine['name'], 2),
                            'name' => substr($cuisine['name'], 2)
                        ]
                    );
                }
            }
        }else {
            return response()->json([
                'status' => false,
                'msg' => $cuisines
            ]);
        }

        $iiko->logout($token);

        $cuisines = Cuisine::where('is_on_duty', true)->first();

        if (!$cuisines) {
            $duty = Cuisine::find(1);
            $duty->is_on_duty = true;
            $duty->save();
        }

        return response()->json([
            'status' => true,
            'msg' => 'Кухни получены'
        ]);
    }

    public function setCuisine(Request $request): JsonResponse
    {
        $duty = Cuisine::find($request->id);

        Cuisine::where('is_on_duty', true)
                ->update([
                    'is_on_duty' => false
                ]);

        if ($duty){
            $duty->is_on_duty = true;
            $duty->save();

            Select::whereDate('created_at', Carbon::today())->update([
                'cuisine_id' => $duty->id
            ]);
        }

        return response()->json(new CuisineCollection($duty));
    }

    public function getDutyCuisine(): JsonResponse
    {
        return response()->json(Cuisine::where('is_on_duty', true)->first());
    }

    public function getDishesByCuisineId($id): JsonResponse
    {
        $cuisine = Cuisine::find($id);

        $dishes = DishCollection::collection($cuisine->dishes->sortBy('ration_id'));

        return response()->json($dishes);
    }

    public function fetchDishesByCuisineId($id): JsonResponse
    {
        $iiko = new IikoController();
        $token = $iiko->getAuthToken();

        $cuisine = Cuisine::find($id);

        $link = '/resto/api/v2/entities/products/list?types=DISH&parentIds=' . $cuisine->iiko_id . '&key=';
        $dishes = $iiko->doRequest($token, $link);
        $array = [];

        $rations = Ration::where('is_required', true)->get();

        $r_numbers = $rations->map(function ($r) {
            return $r->iiko_id;
        });

        if (is_array($dishes)){
            foreach ($dishes as $dish) {
                $first = substr($dish['name'], 0, 1);

                if (!is_numeric($first)){
                    continue;
                }

                $first = (int)$first;

                if (!in_array($first, $r_numbers->toArray())){
                    continue;
                }

                if (!in_array($first, $array)) {
                    $d = Dish::updateOrCreate(
                        ['ration_id' => $first, 'cuisine_id' => $cuisine->id],
                        [
                            'iiko_name' => substr($dish['name'], 4),
                            'iiko_id' => $dish['id'],
                            'is_custom' => false
                        ]
                    );

                    if (!$d->name){
                        $d->name = $d->iiko_name;
                        $d->save();
                    }

                    $array[] = $first;
                }
            }
        }else {
            return response()->json([
                'status' => false,
                'msg' => $dishes. 'error'
            ]);
        }

        return response()->json([
            'status' => true,
            'msg' => 'Блюда получены'
        ]);
    }
}

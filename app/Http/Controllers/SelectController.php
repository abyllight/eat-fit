<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderSelectCollection;
use App\Http\Resources\SelectCollection;
use App\Models\City;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Order;
use App\Models\Ration;
use App\Models\Select;
use App\Models\SelectWish;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class SelectController extends Controller
{
    public function index(): JsonResponse
    {
        $orders = Order::where('s_num', '!=', null)->where('city_id', City::ASTANA)->where('is_active', true)->orderBy('s_num')->get();
        $arr = [];

        $max_date = Select::max('created_at');
        $max_date = explode(" ", $max_date)[0];

        foreach ($orders as $key => $order) {
            $selects = $order->select()->whereDate('created_at', $max_date)->get();
            $arr[$key] = [
                'id' => $order->s_num,
                'order_name' => $order->name,
                'order_tag' => $order->getSize($order->size),
                'selects' => []
            ];

            foreach ($selects as $select) {
                $arr[$key]['selects'][] = [
                    'select_id' => $select->id,
                    'code' => $select->code,
                    'done' => $select->done,
                    'color' => $select->getStatusColor(),
                    'is_active' => $select->is_active,
                    'ration' => $select->ration,
                    'dish_name' => $select->dish_name,
                    'weight' => $select->weight,
                    'description' => $select->description,
                    'ingredients' => $select->ingredients->sortBy('name')->toArray(),
                    'wishlist' => $select->wishes
                ];
            }
        }

       // dd($arr);
       // $selects = Select::whereDate('created_at', Carbon::today())->where('city_id', City::ASTANA)->get();
        //Select::generateCode();
        return response()->json($arr);
    }
    public function getSelectById($id) {
        $select = Select::find($id);

        return response()->json($select->ingredients);
    }

    public function saveDep(Request $request) {
        $select = Select::find($request->s_id);

        $select->dep_id = $request->dep_id;
        $select->save();
    }
    public function getSelectByOrder($id): JsonResponse
    {
        $select = Select::find($id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $order = $select->order;
        $previous = Select::where('ration_id', $select->ration_id)->whereDate('created_at', Carbon::yesterday())->first();

        if ($previous) {
            $previous = new SelectCollection($previous);
        }else {
            $previous = [];
        }

        return response()->json([
            'order' => new OrderSelectCollection($order),
            'blacklist' => $order->getBlackListIds(),
            'wishlist' => $order->wishlist,
            'result' => new SelectCollection($select),
            'previous' => $previous
        ]);
    }

    public function deleteSelect($id) {
        $select = Select::find($id);

        $select->ingredients()->detach();
        $select->wishes()->detach();
        $select->delete();
    }

    public function destroySelect($id) {
        $order = Order::find($id);
        $selects = $order->select;

        foreach ($selects as $select) {
            $select->ingredients()->detach();
            $select->wishes()->detach();
            $select->delete();
        }
    }

    public function getSelectsByOrder($id): JsonResponse
    {
        $order = Order::find($id);

        if (!$order){
            return response()->json([
                'status' => false,
                'msg' => 'Order not found'
            ]);
        }
        return response()->json([
            'order' => $order,
            'blacklist' => $order->getBlackListIds(),
            'wishlist' => $order->wishlist,
            'result' => SelectCollection::collection($order->getResultSelect()),
            'previous' => SelectCollection::collection($order->getPreviousSelect())
        ]);
    }

    public function setDone($id) {
        $select = Select::find($id);

        $select->done =! $select->done;
        $select->save();

        return response()->json(new SelectCollection($select));
    }

    public function resetResult(Request $request) {

        $selects = Select::whereDate('created_at', Carbon::today())->where('order_id', $request->id)->get();

        foreach ($selects as $select) {
            $select->ingredients()->detach();
            $select->wishes()->detach();
            $select->delete();
        }

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => []
        ]);
    }

    public function setTableware(Request $request) {
        $select = Select::where('order_id', $request->order_id)
            ->where('cuisine_id', $request->cuisine_id)
            ->where('ration_id', $request->ration_id)
            ->whereDate('created_at', Carbon::today())
            ->first();

        $dish = Dish::find($request->dish_id);
        $ration = Ration::find($request->ration_id);

        if (!$select) {
            $order = Order::find($request->order_id);
            $select = new Select();
            $select->order_id = $order->id;
            $select->cuisine_id = $request->cuisine_id;
            $select->ration_id = $ration->id;
            $select->city_id = $order->city_id;
            $select->dep_id = $ration->department_id;
            if (!$select->is_extra) {
                $select->status = Select::REPLACEMENT;
            }
        }

        $select->dish_id = $request->dish_id;
        $select->dish_name = $dish->name;
        $select->tableware_id = $request->tableware_id;
        $select->save();

        $select->ingredients()->sync($dish->getIngredientIds());

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function setDishToSelect(Request $request): JsonResponse
    {
        $dish = Dish::find($request->dish_id);

        if (!$dish) {
            return response()->json([
                'status' => false,
                'msg' => 'Dish not found'
            ]);
        }

        $select = Select::find($request->id);

        $ration = Ration::find($select->ration_id);
        $duty_dish = Dish::where('cuisine_id', $select->cuisine_id)->where('ration_id', $ration->id)->first();

        /*if (!$select) {
            $select = new Select();
            $select->order_id = $request->order_id;
            $select->cuisine_id = $request->cuisine_id;
            $select->ration_id = $request->ration_id;
            $select->dep_id = $ration->department_id;
        }*/

        if (!$select->is_extra) {
            if (!$duty_dish || $request->dish_id !== $duty_dish->id) {
                $select->status = Select::REPLACEMENT;
            }else {
                $select->status = Select::LITE;
            }
        }

        $select->dish_id = $request->dish_id;
        $select->dish_name = $dish->name;
        $select->tableware_id = $ration->tableware_id;
        $select->weight = null;

        $order = Order::find($select->order_id);
        $ds = $dish->sizes->where('size', $order->size)->first();

        if ($ds) {
            $select->weight = $ds->weight;
        }

        $select->save();

        $select->ingredients()->sync($dish->getIngredientIds());

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function saveSelectDetails(Request $request){
        $select = Select::find($request->id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->dish_name = $request->dish_name;
        $select->weight = $request->weight;
        $select->description = $request->description;
        $select->save();

        return response()->json([
            'status' => true,
            'msg' => 'Информация сохранена',
            'data' => new SelectCollection($select)
        ]);
    }

    public function addIngredientFromSelect(Request $request){
        $select = Select::find($request->select_id);
        $ingredient = Ingredient::find($request->ingredient_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        if (!$ingredient){
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $select->ingredients()->attach($request->ingredient_id);

        if ($select->status === Select::WITHOUT){
            $has_removed_ingredients = $this->hasRemovedIngredients($select);

            if (!$has_removed_ingredients){
                $select->status = Select::LITE;
                $select->save();
            }
        }

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function removeIngredientFromSelect(Request $request): JsonResponse
    {
        $select = Select::where('order_id', $request->order_id)
            ->where('cuisine_id', $request->cuisine_id)
            ->where('ration_id', $request->ration_id)
            ->whereDate('created_at', Carbon::today())
            ->first();

        $dish = Dish::find($request->dish_id);

        if (!$select) {
            $ration = Ration::find($request->id);
            $order = Order::find($request->order_id);

            $select = new Select();
            $select->order_id = $order->id;
            $select->city_id = $order->city_id;
            $select->cuisine_id = $request->cuisine_id;
            $select->ration_id = $request->ration_id;
            $select->dish_id = $request->dish_id;
            $select->dish_name = $dish->name;
            $select->dep_id = $ration->department_id;

            $select->ingredients()->sync($dish->getIngredientIds());
        }

        if ($select->status === Select::LITE){
            $select->status = Select::WITHOUT;
        }

        $select->save();

        $select->ingredients()->detach($request->ingredient_id);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function replaceIngredientFromSelect(Request $request){
        $select = Select::where('order_id', $request->order_id)
            ->where('cuisine_id', $request->cuisine_id)
            ->where('ration_id', $request->ration_id)
            ->whereDate('created_at', Carbon::today())
            ->first();

        $dish = Dish::find($request->dish_id);

        if (!$select){
            $ration = Ration::find($request->id);
            $order = Order::find($request->order_id);

            $select = new Select();
            $select->order_id = $order->id;
            $select->city_id = $order->city_id;
            $select->cuisine_id = $request->cuisine_id;
            $select->ration_id = $request->ration_id;
            $select->dep_id = $ration->department_id;
            $select->dish_id = $request->dish_id;
            $select->dish_name = $dish->name;
            if (!$select->is_extra) {
                $select->status = Select::REPLACEMENT;
            }
            $select->save();

            $select->ingredients()->sync($dish->getIngredientIds());
        }

        $select->ingredients()->detach($request->ingredient_id);
        $select->ingredients()->attach([$request->analog_id => ['analog_id' => $request->ingredient_id]]);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'select' => new SelectCollection($select)
        ]);
    }

    public function returnIngredientFromSelect(Request $request){
        $select = Select::find($request->select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->ingredients()->detach($request->analog_id);
        $select->ingredients()->attach($request->ingredient_id);

        $dish = Dish::where('cuisine_id', $select->cuisine_id)->where('ration_id', $select->ration_id)->first();

        if ($dish->id === $select->dish_id){
            $has_replaced_ingredients = $this->hasReplacedIngredients($select);

            if (!$has_replaced_ingredients){
                $has_removed_ingredients = $this->hasRemovedIngredients($select);
                if ($has_removed_ingredients){
                    if (!$select->is_extra) {
                        $select->status = Select::WITHOUT;
                    }
                }else{
                    if (!$select->is_extra) {
                        $select->status = Select::LITE;
                    }
                }
                $select->save();
            }
        }

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'select' => new SelectCollection($select)
        ]);
    }

    public function hasReplacedIngredients(Select $select): bool
    {
        foreach ($select->ingredients as $ingredient){
            if ($ingredient->pivot->analog_id){
                return true;
            }
        }

        return false;
    }

    public function hasRemovedIngredients(Select $select): bool
    {
        $dish = Dish::where('cuisine_id', $select->cuisine_id)->where('ration_id', $select->ration_id)->first();
        $diff = $dish->getIngredientIds()->diff($select->getIngredientIds());
        return count($diff) > 0;
    }

    public function activateDeactivate(Request $request){
        $select = Select::find($request->select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->is_active = !$select->is_active;
        $select->save();

        return response()->json([
            'status' => true,
            'msg' => 'OK'
        ]);
    }

    public function addExtraSelect(Request $request) {
        $ration = Ration::find($request->r_id);
        $t_id = $ration->tableware ? $ration->tableware->id : null;
        $order = Order::find($request->o_id);

        $select = new Select();
        $select->order_id = $order->id;
        $select->city_id = $order->city_id;
        $select->cuisine_id = $request->c_id;
        $select->ration_id = $request->r_id;
        $select->status = Select::EXTRA;
        $select->tableware_id = $t_id;
        $select->dep_id = $ration->department_id;
        $select->is_extra = true;
        $select->save();
    }

    public function addExtraIngredient(Request $request){
        $select = Select::find($request->select_id);
        $ingredient = Ingredient::find($request->ingredient_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        if (!$ingredient){
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $select->ingredients()->attach($request->ingredient_id, ['is_editable' => true]);

        /*if ($select->status === Select::LITE || $select->status === Select::WITHOUT) {
            $select->status = Select::REPLACEMENT;
            $select->save();
        }*/

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function removeExtraIngredient(Request $request){
        $select = Select::find($request->select_id);
        $ingredient = Ingredient::find($request->ingredient_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        if (!$ingredient){
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $select->ingredients()->detach($request->ingredient_id);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function showIngredient(Request $request){
        $select = Select::find($request->select_id);
        $ingredient = Ingredient::find($request->ingredient_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        if (!$ingredient){
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $select->ingredients()->updateExistingPivot($request->ingredient_id, ['is_visible' => true]);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function hideIngredient(Request $request){
        $select = Select::find($request->select_id);
        $ingredient = Ingredient::find($request->ingredient_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        if (!$ingredient){
            return response()->json([
                'status' => false,
                'msg' => 'Ingredient not found'
            ]);
        }

        $select->ingredients()->updateExistingPivot($request->ingredient_id, ['is_visible' => false]);

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function addRemoveWish(Request $request) {
        $select = Select::where('order_id', $request->order_id)
            ->where('cuisine_id', $request->cuisine_id)
            ->where('ration_id', $request->ration_id)
            ->whereDate('created_at', Carbon::today())
            ->first();

        if ($select) {
            $sel_wish = SelectWish::where('select_id', $select->id)->where('wish_id', $request->w_id)->first();

            if ($sel_wish) {
                $select->wishes()->wherePivot('wish_id', $request->w_id)->detach();

                return response()->json([
                    'status' => true,
                    'data' => $select->getWishIds()
                ]);
            }
        }else {
            $dish = Dish::find($request->dish_id);
            $ration = Ration::find($request->id);
            $order = Order::find($request->order_id);

            $select = new Select();
            $select->order_id = $order->id;
            $select->city_id = $order->city_id;
            $select->cuisine_id = $request->cuisine_id;
            $select->ration_id = $request->ration_id;
            $select->dep_id = $ration->department_id;
            $select->dish_id = $request->dish_id;
            $select->dish_name = $dish->name;
            if (!$select->is_extra) {
                $select->status = Select::LITE;
            }
            $select->tableware_id = $ration->tableware_id;
            $select->save();

            $select->ingredients()->sync($dish->getIngredientIds());
        }

        $new = new SelectWish();
        $new->select_id = $select->id;
        $new->wish_id = $request->w_id;
        $new->save();

        return response()->json([
            'status' => true,
            'data' => $select->getWishIds()
        ]);
    }

    public function generateCode()
    {
        Select::generateCode();
    }

    public function selectRations(): JsonResponse
    {
        $rations = Ration::all();
        $arr = [];

        foreach ($rations as $key => $ration) {
            $selects = Select::whereDate('created_at', Carbon::today())
                ->where('ration_id', $ration->id)
                ->where('code', '!=', null)
                ->orderBy('ration_id')
                ->get()
                ->groupBy(['code']);

            if ($selects->count() === 0) continue;

            $arr[$key] = [
                'ration_id' => $ration->id,
                'ration' => $ration->name,
                'items' => []
            ];
        }

        return response()->json($arr);
    }

    public function getSelectStickersByRation($id): JsonResponse
    {
        $ration = Ration::find($id);
        $arr = [];

        $selects = Select::whereDate('created_at', Carbon::today())
            ->where('ration_id', $ration->id)
            ->where('code', '!=', null)
            ->orderBy('ration_id')
            ->get()
            ->groupBy(['code']);

        foreach ($selects as $select) {
            $arr[] = [
                'code' => $ration->code . '-' . $select->first()->code,
                'name' => $select->first()->dish_name,
                'description' => $select->first()->description,
                'count' => $select->count(),
                'id' => $select->first()->id,
                'status' => false
            ];
        }

        return response()->json($arr);
    }

    public function getMessage($id) {
        $msg = '';
        $selects = Select::whereDate('created_at', Carbon::today())->where('order_id', $id)->get();

        foreach ($selects as $select) {
            $ration = Ration::find($select->ration_id);

            $msg .= $ration->name . ': ' . $select->dish_name . ' ';
        }

        return $msg;
    }

    public function export(){
        Select::generateCode();

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        $rations = Ration::all()->toArray();

        $ration_names = array_map(function ($obj){
            return $obj['name'];
        }, $rations);

        $arrayHeader = [
            ['#', 'Тэг', 'Клиент']
        ];

        array_push($arrayHeader[0], ...$ration_names);

        $sheet->fromArray($arrayHeader, NULL, 'A1');

        $blackStyleArray = [
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'startColor' => [
                    'rgb' => '424242'
                ]
            ],
            'font' => [
                'color' => [
                    'rgb' => 'ffffff'
                ],
                'bold' => true,
                'size' => 13
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER
            ],
        ];

        $center = [
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
                'wrapText' => true
            ],
            'font' => [
                'bold' => true,
                'size' => 10
            ],
        ];

        $code = [
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
                'wrapText' => true
            ],
            'font' => [
                'bold' => true,
                'size' => 20
            ],
        ];

        $letters = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];

        $sheet->getStyle('A1:M1')->applyFromArray($blackStyleArray);

        //Row height
        $sheet->getRowDimension('1')->setRowHeight(40);

        $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(5);
        $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(5);
        $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(16);

        foreach ($letters as $letter) {
            $spreadsheet->getActiveSheet()->getColumnDimension($letter)->setWidth(25);
        }

        $orders = Order::whereIn('type', [Order::EAT_FIT_SELECT, Order::EAT_FIT_SELECT_MAX])->where('is_active', true)->orderBy('size')->get();
        $n = 1;

        foreach ($orders as $key => $order) {
            $selects = $order->select()->whereDate('created_at', Carbon::today())->get()->sortBy('ration_id');

            $n++;
            $sheet->setCellValue('A' . $n, $key + 1);
            $sheet->mergeCells('A' . $n . ':A' . ($n + 3));
            $sheet->getStyle('A'. $n)->applyFromArray($blackStyleArray);

            $sheet->setCellValue('B' . $n, $order->getSize($order->size));
            $sheet->mergeCells('B' . $n . ':B' . ($n + 3));
            $sheet->getStyle('B' . $n)->getFont()->setBold(true);
            $sheet->getStyle('B' . $n)->getFont()->setSize(15);

            $sheet->setCellValue('C' . $n, ($key+1).'/'.$order->name);
            $sheet->mergeCells('C' . $n . ':C' . ($n + 3));
            $sheet->getStyle('C' . $n)->applyFromArray($center);

            foreach ($selects as $i => $s) {
                $code_section = '---';

                $sheet->setCellValue($letters[$i] . $n, ($key+1).'/'.$order->name.' - '.$order->getSize($order->size));
                $sheet->getStyle($letters[$i] . $n)->applyFromArray($center);

                if ($s){
                    if ($s->is_active && $s->status > 0) {

                        $code_section = $s->code;

                        if ($s->status === Select::WITHOUT) {
                            $dish = Dish::getDutyDishByRation($s->ration_id);
                            $diff = $dish->getIngredientIds()->diff($s->getIngredientIds());
                            $w = '';

                            if ($diff){
                                foreach ($diff as $id){
                                    $ing = Ingredient::find($id);
                                    $w.='/без '. $ing->name;
                                }

                                $sheet->setCellValue($letters[$i] . ($n+2), $w);
                                $sheet->getStyle($letters[$i] . ($n+2))->applyFromArray($center);
                            }
                        }

                        if ($s->wishes) {
                            $tags = '';
                            foreach ($s->wishes as $wish) {
                                $tags.= $wish->wish. '/ ';
                            }
                            $sheet->setCellValue($letters[$i] . ($n+3), $tags);
                            $sheet->getStyle($letters[$i] . ($n+3))->applyFromArray($center);
                        }

                        /*$content = $s->dish_name. "\n";

                        if ($s->status === Select::WITHOUT){
                            $dish = Dish::getDutyDishByRation($s->ration_id);
                            $diff = array_diff($dish->getIngredientIds(), $s->getIngredientIds());
                            if ($diff){
                                foreach ($diff as $id){
                                    $ing = Ingredient::find($id);
                                    $content.='/без '. $ing->name;
                                }
                            }
                        }elseif ($s->status === Select::LITE){
                            $content = '0';
                        }elseif ($s->status === Select::REPLACEMENT){
                            $ingredients = $s->ingredients()->where('is_visible', true)->get();
                            foreach ($ingredients as $ingredient){
                                $content.= $ingredient->name.'+';
                            }
                        }

                        $content.="\n".$s->description;*/
                    }
                }

                $sheet->setCellValue($letters[$i] . ($n+1), $code_section);
                $sheet->getStyle($letters[$i] . ($n+1))->applyFromArray($code);

                /*if ($s->status === Select::REPLACEMENT || $s->status === Select::WITHOUT || $s->status === Select::LITE){
                    $sheet->getStyle($letters[$i] . ($n+1))
                        ->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setRGB($s->getStatusColorExcel($s->status));
                }*/

                /*$sheet->setCellValue('D' . ($n+1), $order->order_name.' - '.$order->order_tag);
                $sheet->getStyle('D' . ($n+1))->applyFromArray($center);*/
            }

            $n+=3;
        }

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="Select.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\SelectCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Order;
use App\Models\Ration;
use App\Models\Select;
use App\Models\SelectWish;
use App\Models\Wishlist;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\RichText\RichText;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class SelectController extends Controller
{
    public function getSelectByOrder($order_id): JsonResponse
    {
        $order = Order::find($order_id);

        if (!$order){
            return response()->json([
                'status' => false,
                'msg' => 'Order not found'
            ]);
        }

        return response()->json([
            'blacklist' => $order->getBlackListIds(),
            'wishlist' => $order->wishlist,
            'result' => SelectCollection::collection($order->getResultSelect()),
            'previous' => SelectCollection::collection($order->getPreviousSelect())
        ]);
    }

    public function setDishToSelect(Request $request): JsonResponse
    {
        $dish = Dish::find($request->dish_id);
        $cuisine = Cuisine::where('is_on_duty', true)->first();
        $select = Select::find($request->select_id);

        if (!$dish){
            return response()->json([
                'status' => false,
                'msg' => 'Dish not found'
            ]);
        }
/*
        if (!$request->has('select_id')){
            $select = new Select();
            $select->order_id = $request->order_id;
            $select->cuisine_id = $cuisine->id;
            $select->ration_id = $request->ration_id;
        }else{
            $select = Select::find($request->select_id);

            if (!$select){
                return response()->json([
                    'status' => false,
                    'msg' => 'Select not found'
                ]);
            }
        }*/
        $duty_dish = Dish::where('cuisine_id', $cuisine->id)->where('ration_id', $request->ration_id)->first();

        //$select->r_id = $request->r_id;
        $select->dish_id = $request->dish_id;
        $select->dish_name = $dish->name;
        $select->description = null;
        $select->status = Select::LITE;

        if (!$duty_dish || $request->dish_id !== $duty_dish->id) {
            $select->status = Select::REPLACEMENT;
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

    public function removeIngredientFromSelect(Request $request){
        $select = Select::find($request->select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->ingredients()->detach($request->ingredient_id);

        if ($select->status === Select::LITE){
            $select->status = Select::WITHOUT;
            $select->save();
        }

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'data' => new SelectCollection($select)
        ]);
    }

    public function replaceIngredientFromSelect(Request $request){
        $select = Select::find($request->select_id);

        if (!$select){
            return response()->json([
                'status' => false,
                'msg' => 'Select not found'
            ]);
        }

        $select->ingredients()->detach($request->ingredient_id);
        $select->ingredients()->attach([$request->analog_id => ['analog_id' => $request->ingredient_id]]);

        $select->status = Select::REPLACEMENT;

        $select->save();

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
                    $select->status = Select::WITHOUT;
                }else{
                    $select->status = Select::LITE;
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
        $diff = array_diff($dish->getIngredientIds(), $select->getIngredientIds());
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

        $select->ingredients()->attach($request->ingredient_id, ['editable' => true]);

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
        $sel_wish = SelectWish::where('select_id', $request->s_id)->where('wish_id', $request->w_id)->first();

        $select = Select::find($request->s_id);

        if($sel_wish) {
            $select->wishes()->wherePivot('wish_id', $request->w_id)->detach();
        }else {
            $new = new SelectWish();
            $new->select_id = $request->s_id;
            $new->wish_id = $request->w_id;
            $new->save();
        }

        return response()->json([
            'status' => true,
            'data' => $select->getWishIds()
        ]);
    }

    public function generateCode()
    {
        $groups = Select::with('ingredients')
            ->whereDate('created_at', Carbon::today())
            ->where('dish_id', '!=', null)
            ->get()
            ->groupBy('ration_id');

        $duty_cuisine = Cuisine::where('is_on_duty', true)->first();

        foreach ($groups as $group){

            $ids = [];
            //beautify
            foreach ($group as $item) {

                $code = null;
                $duty_dish = Dish::where('cuisine_id', $duty_cuisine->id)->where('ration_id', $item->ration_id)->first();

                if ($item->dish_id === $duty_dish->id) {
                    $code = '0';
                }

                $ids[] = [
                    'id'=> $item->id,
                    'code' => $code,
                    'ids' => $item->getIngredientIds()
                ];
            }

            for ($i = 0; $i < count($ids); $i++){

                if ($ids[$i]['code'] === null){
                    $ids[$i]['code'] = $i+1;
                }else{
                    continue;
                }

                for ($j = $i+1; $j < count($ids); $j++){
                    $a = array_diff($ids[$i]['ids'], $ids[$j]['ids']);
                    $b = array_diff($ids[$j]['ids'], $ids[$i]['ids']);

                    if (count($a) === 0 && count($b) === 0){
                        $ids[$j]['code'] = $i+1;
                    }
                }
            }

            foreach ($group as $key => $item){
                $item->code = $ids[$key]['code'];
                $item->save();
            }
        }
    }

    public function export(){
        $this->generateCode();

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        $rations = Ration::where('is_required', true)->get()->toArray();

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

        $letters = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

        $sheet->getStyle('A1:L1')->applyFromArray($blackStyleArray);

        //Row height
        $sheet->getRowDimension('1')->setRowHeight(40);

        $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(5);
        $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(5);
        $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(16);

        foreach ($letters as $letter) {
            $spreadsheet->getActiveSheet()->getColumnDimension($letter)->setWidth(25);
        }

        $orders = Order::where('type', Order::EAT_FIT_SELECT)->where('is_active', true)->orderBy('size')->get();
        $n = 1;

        foreach ($orders as $key => $order){
            $select = $order->select()->whereDate('created_at', Carbon::today())->get();

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

            foreach ($rations as $i => $r) {
                $s = $select->where('ration_id', $r['iiko_id'])->first();
                $code_section = '---';

                $sheet->setCellValue($letters[$i] . $n, ($key+1).'/'.$order->name.' - '.$order->getSize($order->size));
                $sheet->getStyle($letters[$i] . $n)->applyFromArray($center);

                if ($s){
                    if ($s->is_active && $s->status > 0){

                        $code_section = $r['code']. '-' . $s->code;

                        if ($s->status === Select::LITE || $s->status === Select::WITHOUT) {
                            $code_section = '0';
                        }

                        if ($s->status === Select::WITHOUT) {
                            $dish = Dish::getDutyDishByRation($s->ration_id);
                            $diff = array_diff($dish->getIngredientIds(), $s->getIngredientIds());
                            $w = '';

                            if ($diff){
                                foreach ($diff as $id){
                                    $ing = Ingredient::find($id);
                                    $w.='/без '. $ing->name;
                                }

                                $sheet->setCellValue($letters[$i] . ($n+2), $w);
                                $sheet->getStyle($letters[$i] . ($n+2))->applyFromArray($center);
                            }

                            if ($s->wishes) {
                                $tags = '';
                                foreach ($s->wishes as $wish) {
                                    $tags.= $wish->wish. '/ ';
                                }
                                $sheet->setCellValue($letters[$i] . ($n+3), $tags);
                                $sheet->getStyle($letters[$i] . ($n+3))->applyFromArray($center);
                            }
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
            }

            /*$sheet->setCellValue('D' . ($n+1), $order->order_name.' - '.$order->order_tag);
            $sheet->getStyle('D' . ($n+1))->applyFromArray($center);*/

            $n+=3;
        }

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="Select.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }
}

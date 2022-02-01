<?php

namespace App\Http\Controllers;

use App\Http\Resources\SelectCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Order;
use App\Models\Ration;
use App\Models\Select;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class SelectController extends Controller
{
    public function getSelectByOrder($order_id){
        $order = Order::find($order_id);

        if (!$order){
            return response()->json([
                'status' => false,
                'msg' => 'Order not found'
            ]);
        }

        return response()->json([
            'blacklist' => $order->getBlackListIds(),
            'wishlist' => $order->getWishes(),
            'result' => SelectCollection::collection($order->getResultSelect()),
            'previous' => SelectCollection::collection($order->getPreviousSelect())
        ]);
    }

    public function setDishToSelect(Request $request): JsonResponse
    {
        $dish = Dish::find($request->dish_id);
        $cuisine = Cuisine::where('is_on_duty', true)->first();

        if (!$dish){
            return response()->json([
                'status' => false,
                'msg' => 'Dish not found'
            ]);
        }

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
        }
        $duty_dish = Dish::where('cuisine_id', $cuisine->id)->where('ration_id', $request->ration_id)->first();

        $select->r_id = $request->r_id;
        $select->dish_id = $request->dish_id;
        $select->dish_name = $dish->name;

        if ($request->dish_id !== $duty_dish->id) {
            $select->status = Select::REPLACEMENT;
        }else{
            $select->status = Select::LITE;
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

    public function generateCode()
    {
        $groups = Select::with('ingredients')
            ->whereDate('created_at', Carbon::today())
            ->where('dish_id', '!=', null)
            ->get()
            ->groupBy('ration_id');

        foreach ($groups as $group){

            $ids = [];
            //beautify
            foreach ($group as $item){
                $ids[] = [
                    'id'=> $item->id,
                    'code' => null,
                    'ids' => $item->getIngredientIds()
                ];
            }

            for ($i = 0; $i < count($ids); $i++){

                if ($ids[$i]['code'] === null){
                    $ids[$i]['code'] = $i;
                }else{
                    continue;
                }

                for ($j = $i+1; $j < count($ids); $j++){
                    $a = array_diff($ids[$i]['ids'], $ids[$j]['ids']);
                    $b = array_diff($ids[$j]['ids'], $ids[$i]['ids']);

                    if (count($a) === 0 && count($b) === 0){
                        $ids[$j]['code'] = $i;
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
        //$this->generateCode();
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
                'size' => 9
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
                'size' => 32
            ],
        ];

        $sheet->getStyle('A1:M1')->applyFromArray($blackStyleArray);

        //Row height
        $sheet->getRowDimension('1')->setRowHeight(40);

        $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(5);
        $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(5);
        $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(16);
        $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('E')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('I')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('J')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('K')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('L')->setWidth(24);
        $spreadsheet->getActiveSheet()->getColumnDimension('M')->setWidth(24);

        $orders = Order::where('type', Order::EAT_FIT_SELECT)->where('is_active', true)->orderBy('size')->get();
        $letters = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
        $n = 1;
        foreach ($orders as $key => $order){
            $select = $order->select()->whereDate('created_at', Carbon::today())->get();

            $n++;
            $sheet->setCellValue('A' . $n, $key+1);
            $sheet->mergeCells('A' . $n . ':A' . ($n + 1));
            $sheet->getStyle('A'. $n)->applyFromArray($blackStyleArray);

            $sheet->setCellValue('B' . $n, $order->getSize($order->size));
            $sheet->mergeCells('B' . $n . ':B' . ($n + 1));
            $sheet->getStyle('B' . $n)->getFont()->setBold(true);
            $sheet->getStyle('B' . $n)->getFont()->setSize(15);

            $sheet->setCellValue('C' . $n, ($key+1).'/'.$order->name);
            $sheet->mergeCells('C' . $n . ':C' . ($n + 1));
            $sheet->getStyle('C' . $n)->applyFromArray($center);

            foreach ($select as $i => $s) {
                $sheet->setCellValue($letters[$i] . $n, ($key+1).'/'.$order->name.' - '.$order->getSize($order->size).' - '. $s->ration->name);
                $sheet->getStyle($letters[$i] . $n)->applyFromArray($center);

                $content = 'X';

                if ($s->is_active && $s->code !== null){
                    switch ($s->ration_id){
                        case 1:
                            $content = 'Z1-';
                            break;
                        case 2:
                            $content = 'Z2-';
                            break;
                    }
                    $content .= $s->code;
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

                $sheet->setCellValue($letters[$i] . ($n+1), $content);
                $sheet->getStyle($letters[$i] . ($n+1))->applyFromArray($code);

                /*if ($s->status === Select::REPLACEMENT || $s->status === Select::WITHOUT || $s->status === Select::LITE){
                    $sheet->getStyle($letters[$i] . ($n+1))
                        ->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setRGB($s->getStatusColorExcel($s->status));
                }*/
            }

            /*$sheet->setCellValue('D' . ($n+1), $order->order_name.' - '.$order->order_tag);
            $sheet->getStyle('D' . ($n+1))->applyFromArray($center);*/

            $n++;
        }

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="Select.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }
}

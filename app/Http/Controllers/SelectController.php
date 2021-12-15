<?php

namespace App\Http\Controllers;

use App\Http\Resources\IngredientCollection;
use App\Http\Resources\SelectCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\Order;
use App\Models\Select;
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
            $dish = Dish::where('cuisine_id', $select->cuisine_id)->where('ration_id', $select->ration_id)->first();
            $diff = array_diff($dish->getIngredientIds(), $select->getIngredientIds());
            if (!$diff){
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

        return response()->json([
            'status' => true,
            'msg' => 'Success',
            'select' => new SelectCollection($select)
        ]);
    }

    public function export(){
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        $arrayHeader = [
            ['#', 'Тэг', 'Клиент', 'ЗАВТРАК', 'II_ЗАВТРАК', 'ОБЕД_суп', 'ОБЕД_салат', 'ОБЕД_осн', 'ОБЕД_гарнир', 'ПОЛДНИК', 'УЖИН_осн', 'УЖИН_овощи', 'УЖИН_гарнир']
        ];

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
            ]
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

        $orders = Order::where('type', 1)->where('is_active', true)->orderBy('size')->get();
        $n = 1;
        foreach ($orders as $key => $order){
            $n++;
            $sheet->setCellValue('A' . $n, $key+1);
            $sheet->mergeCells('A' . $n . ':A' . ($n + 1));
            $sheet->getStyle('A'. $n)->applyFromArray($blackStyleArray);

            $sheet->setCellValue('B' . $n, $order->getSize($order->size));
            $sheet->mergeCells('B' . $n . ':B' . ($n + 1));
            $sheet->getStyle('B' . $n)->getFont()->setBold(true);
            $sheet->getStyle('B' . $n)->getFont()->setSize(15);

            $sheet->setCellValue('C' . $n, $order->name.' - '.$order->getSize($order->size));
            $sheet->mergeCells('C' . $n . ':C' . ($n + 1));
            $sheet->getStyle('C' . $n)->applyFromArray($center);

            $sheet->setCellValue('D' . $n, $order->name.' - '.$order->getSize($order->size));
            $sheet->getStyle('D' . $n)->applyFromArray($center);

            $sheet->setCellValue('D' . ($n+1), $order->name.' - '.$order->getSize($order->size));
            $sheet->getStyle('D' . ($n+1))->applyFromArray($center);

            $n++;
        }

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="Select.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }
}

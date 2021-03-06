<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Models\Week;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ListController extends Controller
{
    public function getListStat(): JsonResponse
    {
        $user = Auth::user();
        $is_week = Week::isWeek();
        $courier = $is_week ? 'courier1_id' : 'courier2_id';
        $nb_assigned = Order::where('is_active', true)->where('city_id', $user->city_id)->where($courier, '>', 0)->count();
        $total       = Order::where('is_active', true)->where('city_id', $user->city_id)->count();

        return response()->json([
            'total' => $total,
            'assigned' => $nb_assigned
        ]);
    }

    public function sortList(Request $request)
    {
        $user = Auth::user();
        $order_id = $request->order_id;
        $courier_id = $request->courier_id;
        $ids = $request->ids ?? [];
        $is_weekend = Week::isWeekend();
        $num = 0;

        if ($ids) {
            Order::where('is_active', true)
                ->where('city_id', $user->city_id)
                ->update([
                    'position' => null,
                    'courier_position' => null
                ]);

            foreach ($ids as $id){
                $num = $num + 1;
                $order = Order::find((int)$id);
                $order->position = $num;
                $order->courier_position = $num;

                if ($id === $order_id) {
                    $is_weekend ? $order->courier2_id = $courier_id : $order->courier1_id = $courier_id;
                }

                $order->save();
            }
        }
    }

    public function export()
    {
        $is_weekend = Week::isWeekend();
        $couriers = User::getCouriers();
        $n = 1;
        $xs = $s = $m = $l = $xl = 0;

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        //Row height
        $sheet->getDefaultRowDimension()->setRowHeight(16);

        //Borders style
        $borderStyleArray = array(
            'borders' => array(
                'outline' => array(
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => array('rgb' => '222222'),
                ),
                'horizontal' => array(
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => array('rgb' => '222222'),
                ),
                'vertical' => array(
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => array('rgb' => '222222'),
                ),
            ),
        );

        foreach ($couriers as $courier) {

            foreach ($courier->orders as $c) {
                if($c->type === Order::EAT_FIT_LITE) {
                    switch ($c->size) {
                        case Order::XS:
                            ++$xs;
                            break;
                        case Order::S:
                            ++$s;
                            break;
                        case Order::M:
                            ++$m;
                            break;
                        case Order::L:
                            ++$l;
                            break;
                        case Order::XL:
                            ++$xl;
                            break;
                    }
                }
            }

            $xs = $xs > 0 ? ' [XS - ' . $xs . '] ' : '';
            $s  = $s  > 0 ? ' [S - ' . $s . '] ' : '';
            $m  = $m  > 0 ? ' [M - ' . $m . '] ' : '';
            $l  = $l  > 0 ? ' [L - ' . $l . '] ' : '';
            $xl = $xl > 0 ? ' [XL - ' . $xl . '] ' : '';

            //Merge courier name cells
            $sheet->mergeCells('A' . $n . ':G' . $n);
            $sheet->setCellValue(
                'A' . $n,
                $courier->name . ' - ' . count($courier->orders) .
                ' | Lite '. $xs . $s . $m . $l . $xl
            );

            $xs = $s = $m = $l = $xl = 0;

            //Courier name size
            $sheet->getStyle('A' . $n)->getFont()->setSize(16);
            $sheet->getStyle('A' . $n)->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);

            $n = $n + 1;
            $count = $n;

            $arrayHeader = [
                ['#', '??????', '??????', '??????????????', '??????????', '??????????????', '??????????']
            ];

            //Alignment and size of header
            $sheet->fromArray($arrayHeader, NULL, 'A' . $n);
            $sheet->getStyle('A' . $n . ':G' . $n)->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
            $sheet->getStyle('A' . $n . ':G' . $n)->getFont()->setBold(true)->setSize(13);


            foreach ($courier->orders as $v => $value) {
                $count = $count + 1;

                $bag_color = $value->has_bag ? 'F44336' : 'ffffff';
                //Alignment of # and A:F row
                $sheet->getStyle('A' . $count)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $sheet->getStyle('A' . $count . ':G' . $count)->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);

                //Merge # rows
                $sheet->mergeCells('A' . $count . ':A' . ($count + 1));

                $time = $is_weekend ? $value->time2 : $value->time1;
                $address = $is_weekend ? $value->address2 : $value->address1;

                $arrayData = [
                    [$v + 1, $value->name, $value->getTag($value->type, $value->size), $value->has_bag ? '??????????????' : '-', $time, $value->phone, $address]
                ];

                $sheet->fromArray($arrayData, NULL, 'A' . $count);

                //Name and tag bold
                $sheet->getStyle('B' . $count . ':C' . $count)->getFont()->setBold(true);
                //Name and tag color
                $sheet->getStyle('B' . $count . ':C' . $count)
                    ->getFill()
                    ->setFillType(Fill::FILL_SOLID)
                    ->getStartColor()
                    ->setRGB($value->getHexColor($value->type));

                //Addition style
                $sheet->mergeCells('B' . ($count + 1) . ':G' . ($count + 1));
                $sheet->setCellValue('B' . ($count + 1), $value->logistic);
                $sheet->getStyle('B' . ($count + 1))->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
                $sheet->getStyle('B' . ($count + 1))->getAlignment()->setWrapText(true);
                //$sheet->getRowDimension('B')->setRowHeight(-1);

                //Bag color
                $sheet->getStyle('D' . $count)
                    ->getFill()
                    ->setFillType(Fill::FILL_SOLID)
                    ->getStartColor()
                    ->setRGB($bag_color);

                $count = $count + 1;
            }

            $sheet->getStyle('A' . $n . ':G' . $count)->applyFromArray($borderStyleArray);

            $n = $count + 2;
        }

        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('G')->setAutoSize(true);


        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="????????????.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }
}

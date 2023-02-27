<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Order;
use App\Models\Ration;
use App\Models\Select;
use App\Models\UserGroup;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class CardGroupController extends Controller
{
    public function index() {
        Select::generateCode();

        $user = Auth::user();
        $arr = [];
        $groups = [];

        $select_groups = Select::whereDate('created_at', Carbon::today())->where('is_active', true)->where('group_id', null);

        if ($user->city_id !== null) {
            $select_groups = $select_groups->where('city_id', $user->city_id);
        }

        if ($user->kd_id !== null) {
            $select_groups = $select_groups->where('dep_id', $user->kd_id);
        }

        $select_groups = $select_groups->get()->groupBy('code');

        foreach ($select_groups as $key => $group) {
            $arr[$key] = [
                'code' => $group[0]->code,
                'dep_id' => $user->kd_id,
                'color' => $this->getColor($group[0]->status),
                'ration' => $group[0]->ration->name,
                'dish_name' => $group[0]->dish_name,
                'description' => $group[0]->description,
                'ingredients' => $group[0]->ingredients
            ];

            foreach ($group as $item) {
                $arr[$key]['items'][] = [
                    'id' => $item->id,
                    'weight' => $item->weight,
                    'is_prepared' => $item->is_prepared
                ];
            }
        }

        foreach ($user->groups as $i => $group) {
            $selects = $group->selects->groupBy('code');

            $groups[$i] = [
                'id' => $group->id,
                'name' => $group->name
            ];

            foreach ($selects as $key => $select) {
                $groups[$i]['cards'][$key] = [
                    'code' => $select[0]->code,
                    'dep_id' => $user->kd_id,
                    'ration' => $select[0]->ration->name,
                    'color' => $this->getColor($select[0]->status),
                    'dish_name' => $select[0]->dish_name,
                    'description' => $select[0]->description,
                    'ingredients' => $select[0]->ingredients
                ];

                foreach ($select as $item) {
                    $groups[$i]['cards'][$key]['items'][] = [
                        'id' => $item->id,
                        'weight' => $item->weight,
                        'is_prepared' => $item->is_prepared
                    ];
                }
            }
        }

        return response()->json([
            'status' => true,
            'cards' => $arr,
            'groups' => $groups
        ]);
    }

    public function getColor($status): string
    {
        $color = 'lime lighten-2';

        if ($status === Select::REPLACEMENT){
            $color = 'red lighten-3';
        }

        if ($status=== Select::WITHOUT){
            $color = 'yellow accent-4';
        }

        if ($status === Select::EXTRA){
            $color = 'light-blue accent-1';
        }

        return $color;
    }

    public function store(Request $request): JsonResponse
    {
        $group = new UserGroup();
        $group->user_id = Auth::user()->id;
        $group->name = $request->name;
        $group->save();

        return response()->json(Auth::user()->groups);
    }

    public function destroy($id): JsonResponse
    {
        $group = UserGroup::find($id);

        $selects = Select::where('group_id', $id)->get();

        foreach ($selects as $select) {
            $select->group_id = null;
            $select->save();
        }

        $group->delete();

        return response()->json(Auth::user()->groups);
    }

    public function changeDepartment(Request $request) {
        $items = $request->items;

        foreach ($items as $item) {
            $select = Select::find($item['id']);

            $select->group_id = null;
            $select->dep_id = $request->dep_id;
            $select->save();
        }
    }

    public function sortCards(Request $request) {
        $user = Auth::user();

        $selects = Select::whereDate('created_at', Carbon::today())
            ->where('is_active', true)
            ->where('code', $request->code)
            ->where('city_id',  $user->city_id)
            ->get();

        $g_id = $request->g_id === '0' ? null : $request->g_id;

        foreach ($selects as $select) {
            $select->group_id = $g_id;
            $select->save();
        }
    }

    public function exportStickers(){
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

        $orders = Order::where('type', Order::EAT_FIT_SELECT)->where('city_id', City::ASTANA)->where('is_active', true)->orderBy('size')->get();
        $n = 1;

        foreach ($orders as $key => $order) {
            $selects = $order->select()->whereDate('created_at', Carbon::today())->get()->sortBy('ration_id');

            if (count($selects) === 0) continue;

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
                $code_section = '-БЕЗ-';

                $sheet->setCellValue($letters[$i] . $n, ($key+1).'/'.$order->name.' - '.$order->getSize($order->size));
                $sheet->getStyle($letters[$i] . $n)->applyFromArray($center);
                $sheet->getRowDimension($n)->setRowHeight(20);

                if ($s){
                    if ($s->is_active && $s->status > 0) {

                        $code_section = $s->code;

                        $sheet->setCellValue($letters[$i] . ($n+2), $s->dish_name);
                        $sheet->getStyle($letters[$i] . ($n+2))->applyFromArray($center);

                        $sheet->setCellValue($letters[$i] . ($n+3), $s->ration->name . ' -------- ' . $s->weight . 'гр');
                        $sheet->getStyle($letters[$i] . ($n+3))->applyFromArray($center);
                    }
                }

                $sheet->setCellValue($letters[$i] . ($n+1), $code_section);
                $sheet->getStyle($letters[$i] . ($n+1))->applyFromArray($code);

                $sheet->getRowDimension($n+1)->setRowHeight(30);
                $sheet->getRowDimension($n+2)->setRowHeight(40);
                $sheet->getRowDimension($n+3)->setRowHeight(20);

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

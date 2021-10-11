<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ReportController extends Controller
{
    public function index(): JsonResponse
    {
        $latest = Report::latest()->first() ? Report::latest()->first()->created_at->toDatestring() : Carbon::today()->toDateString();
        $res = Report::whereDate('created_at', $latest)->get();
        $reports = $this->reportsFormat($res);

        return response()->json([
            'status' => true,
            'reports' => $reports,
            'max' => $latest
        ]);
    }

    public function filter(Request $request){
        $res = Report::whereDate('created_at', $request->date)->get();
        $reports = $this->reportsFormat($res);

        return response()->json([
            'status' => true,
            'reports' => $reports
        ]);
    }

    public function reportsFormat($res): Collection
    {
        if (!$res) return collect();

        $reports = collect();

        foreach ($res as $item){
            $reports[] = [
                'id' => $item->id,
                'courier' => $item->courier->name,
                'time' => $item->order->getTime(),
                'phone' => $item->order->phone,
                'name' => $item->order->name,
                'address' => $item->order->getYaddress(),
                'amount' => $item->amount ?? '-',
                'type' => $item->payment_type,
                'comment' => $item->comment,
                'report_status' => $item->report_status,
                'notification_status' => $item->notification_status,
                'notified_at' => $item->notified_at ?? '-',
                'reported_at' => $item->reported_at ? $item->reported_at->toDateTimeString() : '-'
            ];
        }

        return $reports->groupBy('courier');
    }

    public function export($date)
    {
        $res = Report::whereDate('created_at', $date)->get();
        $reports = $this->reportsFormat($res);
        $n = 1;

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        //Row height
        $sheet->getDefaultRowDimension()->setRowHeight(30);

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

        foreach ($reports as $report) {

            //Merge courier name cells
            $sheet->mergeCells('A' . $n . ':M' . $n);
            $sheet->setCellValue(
                'A' . $n,
                $report[0]['courier'] . ' - ' . count($report)
            );

            //Courier name size
            $sheet->getStyle('A' . $n)->getFont()->setSize(20);
            $sheet->getStyle('A' . $n)->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);

            $n = $n + 1;
            $count = $n;

            $arrayHeader = [
                ['#', 'Имя', 'Интервал', 'Телефон', 'Адрес', 'Тип', 'Сумма', 'Статус отчета', 'Время отчета', 'Статус Еду', 'Время Еду', 'Comment' ]
            ];

            //Alignment and size of header
            $sheet->fromArray($arrayHeader, NULL, 'A' . $n);
            $sheet->getStyle('A' . $n . ':M' . $n)->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
            $sheet->getStyle('A' . $n . ':M' . $n)->getFont()->setBold(true)->setSize(13);

            foreach ($report as $v => $value) {
                $count = $count + 1;

                //Alignment of # and A:F row
                $sheet->getStyle('A' . $count)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $sheet->getStyle('A' . $count . ':M' . $count)->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);

                $arrayData = [
                    [
                        $v + 1,
                        $value['name'],
                        $value['time'],
                        $value['phone'],
                        $value['address'],
                        $value['type'],
                        $value['amount'],
                        $value['report_status'],
                        $value['reported_at'],
                        $value['notification_status'],
                        $value['notified_at'],
                        $value['comment']
                    ]
                ];

                $sheet->fromArray($arrayData, NULL, 'A' . $count);

                //Name and tag bold
                $sheet->getStyle('B' . $count . ':C' . $count)->getFont()->setBold(true);

                $count = $count + 1;
            }

            $sheet->getStyle('A' . $n . ':M' . $count)->applyFromArray($borderStyleArray);

            $n = $count + 2;
        }

        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('G')->setAutoSize(true);
        $sheet->getColumnDimension('H')->setAutoSize(true);
        $sheet->getColumnDimension('I')->setAutoSize(true);
        $sheet->getColumnDimension('J')->setAutoSize(true);
        $sheet->getColumnDimension('K')->setAutoSize(true);
        $sheet->getColumnDimension('L')->setAutoSize(true);
        $sheet->getColumnDimension('M')->setAutoSize(true);

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="Отчет.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }
}

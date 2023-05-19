<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use App\Models\Report;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ReportController extends Controller
{
    public function index(): JsonResponse
    {
        $user = Auth::user();
        $res = Report::whereDate('created_at', Carbon::today()->toDateString())->where('city_id', $user->city_id)->get();
        $reports = $this->reportsFormat($res);
        $payment_types = $user->city_id === Order::ASTANA ? Payment::ASTANA_PAYMENT_TYPES : Payment::ALMATY_PAYMENT_TYPES;


        return response()->json([
            'status' => true,
            'reports' => $reports,
            'types' => $payment_types
        ]);
    }

    public function filter(Request $request): JsonResponse
    {
        $user = Auth::user();
        $res = Report::where('city_id', $user->city_id)->whereDate('created_at', $request->date ?? Carbon::now());

        if ($request->has_amount) {
            $res = $res->where('amount', '!=', null);
        }

        if ($request->type) {
            $res = $res->where('payment_type', $request->type);
        }

        $res = $res->get();
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
                'report_status' => $item->getReportStatus(),
                'report_color' => $item->getReportColor(),
                'report_time_status' => $item->getTimeStatus($item->report_time_status),
                'report_time_color' => $item->getTimeColor($item->report_time_status),
                'notification_status' => $item->getTimeStatus($item->notification_status),
                'notification_color' => $item->getTimeColor($item->notification_status),
                'notified_at' => $item->getNotifiedAt(),
                'reported_at' => $item->getReportedAt()
            ];
        }

        return $reports->groupBy('courier');
    }

    public function export($date)
    {
        $user = Auth::user();
        $res = Report::whereDate('created_at', $date)->where('city_id', $user->city_id)->get();
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

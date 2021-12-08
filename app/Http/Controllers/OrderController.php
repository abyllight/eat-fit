<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderSelectCollection;
use App\Http\Resources\SelectCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Order;
use App\Models\Select;
use App\Models\User;
use App\Models\Week;
use App\Models\Wishlist;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class OrderController extends Controller
{
    public function index(): JsonResponse
    {
        $orders = OrderCollection::collection(Order::where('is_active', true)->orderBy('name')->get());
        return response()->json($orders);
    }

    public function getSelect(){
        $orders = Order::where('type', 1)->where('is_active', true)->orderBy('size')->get();
        return response()->json(OrderSelectCollection::collection($orders));
    }

    public function getNbLite(): JsonResponse
    {
        $lite = [
            'total' => Order::getNbType(0),
            'xs'    => Order::getNbTypeAndSize(0, 0),
            's'     => Order::getNbTypeAndSize(0, 1),
            'm'     => Order::getNbTypeAndSize(0, 2),
            'l'     => Order::getNbTypeAndSize(0, 3),
            'xl'    => Order::getNbTypeAndSize(0, 4)
        ];

        return response()->json($lite);
    }

    public function getNbSelect(): JsonResponse
    {
        $select = [
            'total' => Order::getNbType(1),
            'xs'    => Order::getNbTypeAndSize(1, 0),
            's'     => Order::getNbTypeAndSize(1, 1),
            'm'     => Order::getNbTypeAndSize(1, 2),
            'l'     => Order::getNbTypeAndSize(1, 3),
            'xl'    => Order::getNbTypeAndSize(1, 4)
        ];

        return response()->json($select);
    }

    public function getNbDetox(): JsonResponse
    {
        return response()->json(Order::getNbType(2));
    }

    public function getNbGo(): JsonResponse
    {
        return response()->json(Order::getNbType(3));
    }

    public function fetch(): array
    {
        try {
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));

            $trial = $amo->lead->apiList([
                'status'     => 16536847,
                'limit_rows' => 100
            ]);

            $go = $amo->lead->apiList([
                'status'     => 40592380,
                'limit_rows' => 100
            ]);

            $work = $amo->lead->apiList([
                'status'     => 16566964,
                'limit_rows' => 400
            ]);

            $array = array_merge($work, $trial, $go);

            return [
                'status' => true,
                'data' => $array
            ];
        }catch (\AmoCRM\Exception $e) {
            return [
                'status'  => false,
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            ];
        }
    }

    public function getOrders(): JsonResponse
    {
        $orders = $this->fetch();

        if (!$orders['status']) {
            return response()->json($orders['message'], $orders['code']);
        }

        Order::where('is_active', true)->update(['is_active' => false, 'updated_at' => DB::raw('updated_at')]);
        $now = Carbon::now();

        foreach ($orders['data'] as $order) {
            $id = $order['id'];
            $name = $order['name'];
            $fields = [
                'amo_id'    => null,
                'name'      => null,
                'type'      => null,
                'size'      => null,
                'day'       => null,
                'course'    => null,
                'phone'     => null,
                'whatsapp'  => null,
                't1'        => null,
                't2'        => null,
                'y1'        => null,
                'y2'        => null,
                'a1'        => null,
                'a2'        => null,
                'logistic'  => null,
                'diet'      => null
            ];

            $fields['amo_id'] = $id;
            $fields['name']   = $name;

            foreach ($order['custom_fields'] as $field) {
                switch ($field['id']) {
                    case '328089': //День
                        $fields['day'] = $field["values"][0]["value"];
                        break;
                    case '321235': //Курс
                        $fields['course'] = $field["values"][0]["value"];
                        break;
                    case '373971': //Время
                        $fields['t1'] = $field["values"][0]["value"];
                        break;
                    case '478705': //Время доп
                        $fields['t2'] = $field["values"][0]["value"];
                        break;
                    case '321281': //Логистика
                        $fields['logistic'] = $field["values"][0]["value"];
                        break;
                    case '478767': //Яндекс
                        $fields['y1'] = $field["values"][0]["value"];
                        break;
                    case '478769': //Яндекс доп
                        $fields['y2'] = $field["values"][0]["value"];
                        break;
                    case '478763': //Адрес
                        $fields['a1'] = $field["values"][0]["value"];
                        break;
                    case '478765': //Адрес доп
                        $fields['a2'] = $field["values"][0]["value"];
                        break;
                    case '478771': //Телефон
                        $fields['phone'] = $field["values"][0]["value"];
                        break;
                    case '478851': //Ватсап
                        $fields['whatsapp'] = $field["values"][0]["value"];
                        break;
                    case '321197': //Тип
                        $fields['type'] = $field["values"][0]["enum"];
                        break;
                    case '327953': //Размер
                        $fields['size'] = $field["values"][0]["enum"];
                        break;
                    case '321277': //Комм. (Кухня)
                        $fields['diet'] = $field["values"][0]["value"];
                        break;
                }
            }

            switch ($fields['type']) {
                case '678649': //Lite
                    $fields['type'] = 0;
                    break;
                case '678647': //Select
                    $fields['type'] = 1;
                    break;
                case '954721': //Detox
                    $fields['type'] = 2;
                    break;
                case '833911': //FitGo
                    $fields['type'] = 3;
                    break;
            }

            switch ($fields['size']) {
                case '678741': //XS
                    $fields['size'] = 0;
                    break;
                case '678743': //S
                    $fields['size'] = 1;
                    break;
                case '678745': //M
                    $fields['size'] = 2;
                    break;
                case '678747': //L
                    $fields['size'] = 3;
                    break;
                case '678749': //XL
                    $fields['size'] = 4;
                    break;
                case '929511': //Eat
                    $fields['size'] = 5;
                    break;
            }

            $fields['has_bag'] = strpos($fields['logistic'], 'ланчбэг') !== false;

            $existing_order = Order::where('amo_id', $id)->orWhere('name', $name)->first();

            if ($existing_order) {
                $this->updateOrder($existing_order, $now, $fields);
            }else {
                Order::create([
                    'amo_id'    => $id,
                    'name'      => $name,
                    'type'      => $fields['type'],
                    'size'      => $fields['size'],
                    'day'       => $fields['day'],
                    'course'    => $fields['course'],
                    'has_bag'   => $fields['has_bag'],
                    'phone'     => $fields['phone'],
                    'whatsapp'  => $fields['whatsapp'],
                    'time1'     => $fields['t1'],
                    'time2'     => $fields['t2'],
                    'yaddress1' => $fields['y1'],
                    'yaddress2' => $fields['y2'],
                    'address1'  => $fields['a1'],
                    'address2'  => $fields['a2'],
                    'logistic'  => $fields['logistic'],
                    'diet'      => $fields['diet'],
                    'is_active' => true
                ]);
            }
        }

        Order::where('is_active', false)->update([
            'position'      => null,
            'interval'      => 0,
            'time1_old'     => null,
            'time2_old'     => null,
            'yaddress1_old' => null,
            'yaddress2_old' => null,
            'day_old'       => null
        ]);

        return response()->json('Success');
    }

    public function updateOrder(Order $order, $now, array $fields = [])
    {
        $order->amo_id   = $fields['amo_id'];
        $order->name     = $fields['name'];
        $order->type     = $fields['type'];
        $order->size     = $fields['size'];
        $order->phone    = $fields['phone'];
        $order->whatsapp = $fields['whatsapp'];
        $order->course   = $fields['course'];
        $order->has_bag  = $fields['has_bag'];
        $order->address1 = $fields['a1'];
        $order->address2 = $fields['a2'];
        $order->logistic = $fields['logistic'];

        if ($order->day !== $fields['day']) {
            $order->day_old = $order->day;
            $order->day     = $fields['day'];
        }

        if ($order->diet !== $fields['diet']) {
            $order->diet_old = $order->diet;
            $order->diet     = $fields['diet'];
        }

        if($now->diffInDays($order->updated_at) > 0 && $order->diet_old) {
            $order->diet_old = null;
        }

        if($order->time1 !== $fields['t1']) {
            $order->time1_old = $order->time1;
            $order->time1     = $fields['t1'];
        }

        if($now->diffInDays($order->updated_at) > 1 && $order->time1_old) {
            $order->time1_old = null;
        }

        if($order->time2 !== $fields['t2']) {
            $order->time2_old = $order->time2;
            $order->time2     = $fields['t2'];
        }

        if($now->diffInDays($order->updated_at) > 1 && $order->time2_old) {
            $order->time2_old = null;
        }

        if($order->yaddress1 !== $fields['y1']) {
            $order->yaddress1_old = $order->yaddress1;
            $order->yaddress1     = $fields['y1'];
            $order->lat1          = null;
            $order->lng1          = null;
            $order->courier1_id   = 0;
        }

        if($now->diffInDays($order->updated_at) > 1 && $order->yaddress1_old) {
            $order->yaddress1_old = null;
        }

        if($order->yaddress2 !== $fields['y2']) {
            $order->yaddress2_old = $order->yaddress2;
            $order->yaddress2     = $fields['y2'];
            $order->lat2          = null;
            $order->lng2          = null;
            $order->courier2_id   = 0;
        }

        if($now->diffInDays($order->updated_at) > 1 && $order->yaddress2_old) {
            $order->yaddress2_old = null;
        }

        $order->is_active = true;
        $order->save();
    }

    public function listData(): JsonResponse
    {
        $is_weekend = Week::isWeekend();
        $courier = $is_weekend ? 'courier2_id' : 'courier1_id';
        $nb_assigned = Order::where('is_active', true)->where($courier, '>', 0)->count();
        $total       = Order::where('is_active', true)->count();

        return response()->json([
            'total' => $total,
            'assigned' => $nb_assigned
        ]);
    }

    public function orderList(Request $request): JsonResponse
    {
        $order_id = $request->order_id;
        $courier_id = $request->courier_id;
        $ids = $request->ids ?? [];
        $is_weekend = Week::isWeekend();
        $num = 0;

        if ($ids) {
            Order::where('is_active', true)
                ->update(['position' => null]);

            foreach ($ids as $id){
                $num = $num + 1;
                $order = Order::find((int)$id);
                $order->position = $num;

                if ($id === $order_id) {
                    $is_weekend ? $order->courier2_id = $courier_id : $order->courier1_id = $courier_id;
                }

                $order->save();
            }
        }

        return response()->json('Success');
    }

    public function export()
    {
        $is_weekend = Week::isWeekend();
        $couriers = User::couriers();
        $n = 1;
        $color = 'ffffff';
        $bag_color = 'ffffff';
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
                if($c->type === 0) {

                    switch ($c->size) {
                        case 0:
                            ++$xs;
                            break;
                        case 1:
                            ++$s;
                            break;
                        case 2:
                            ++$m;
                            break;
                        case 3:
                            ++$l;
                            break;
                        case 4:
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
            $sheet->mergeCells('A' . $n . ':F' . $n);
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
                ['#', 'Имя', 'Тег', 'Ланчбэг', 'Время', 'Телефон', 'Адрес']
            ];

            //Alignment and size of header
            $sheet->fromArray($arrayHeader, NULL, 'A' . $n);
            $sheet->getStyle('A' . $n . ':F' . $n)->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
            $sheet->getStyle('A' . $n . ':F' . $n)->getFont()->setBold(true)->setSize(13);


            foreach ($courier->orders as $v => $value) {
                $count = $count + 1;

                switch ($value->type) {
                    case 1:
                        $color = 'a5d6a7';
                        break;
                    case 0:
                        $color = 'fff59d';
                        break;
                    case 2:
                        $color = '90CAF9';
                        break;
                    case 3:
                        $color = 'CE93D8';
                        break;
                }

                $bag_color = $value->has_bag ? 'F44336' : 'ffffff';
                //Alignment of # and A:F row
                $sheet->getStyle('A' . $count)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $sheet->getStyle('A' . $count . ':F' . $count)->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);

                //Merge # rows
                $sheet->mergeCells('A' . $count . ':A' . ($count + 1));

                $time = $is_weekend ? $value->time2 : $value->time1;
                $address = $is_weekend ? $value->address2 : $value->address1;

                $arrayData = [
                    [$v + 1, $value->name, $value->getTag($value->type, $value->size), $value->has_bag ? 'Ланчбэг' : '-', $time, $value->phone, $address]
                ];

                $sheet->fromArray($arrayData, NULL, 'A' . $count);

                //Name and tag bold
                $sheet->getStyle('B' . $count . ':C' . $count)->getFont()->setBold(true);
                //Name and tag color
                $sheet->getStyle('B' . $count . ':C' . $count)
                    ->getFill()
                    ->setFillType(Fill::FILL_SOLID)
                    ->getStartColor()
                    ->setRGB($color);

                //Addition style
                $sheet->mergeCells('B' . ($count + 1) . ':F' . ($count + 1));
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

            $sheet->getStyle('A' . $n . ':F' . $count)->applyFromArray($borderStyleArray);

            $n = $count + 2;
        }

        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="Список.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }

    public function getBlacklist($id){
        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'status' => false,
                'msg' => 'Order not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $order->blacklist
        ]);
    }

    public function getWishlist($id){
        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'status' => false,
                'msg' => 'Order not found'
            ]);
        }

        $wishes = array_map(function ($item){
            return $item['wish'];
        }, $order->wishlist()->get()->toArray());

        return response()->json([
            'status' => true,
            'data' => $wishes
        ]);
    }

    public function addToBlacklist(Request $request): JsonResponse
    {
        $order = Order::find($request->id);

        if ($order){
            $order->blacklist()->sync($request->blacklist);
            $order->save();

            return response()->json([
                'status' => true,
                'msg' => 'Ингредиенты добавлены в черный список'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Order not found'
        ]);
    }

    public function addToWishlist(Request $request): JsonResponse
    {
        $request->validate([
            'tag' => 'required'
        ]);
        $order = Order::find($request->id);

        if ($order){
            $wish = new Wishlist();
            $wish->order_id = $order->id;
            $wish->wish = $request->tag;
            $wish->save();

            return response()->json([
                'status' => true,
                'msg' => 'Тэг добавлен в зеленый список'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Order not found'
        ]);
    }

    public function removeTag(Request $request): JsonResponse
    {
        $wishes = Wishlist::where('order_id', $request->id)->where('wish', $request->tag)->get();

        if ($wishes){
            foreach ($wishes as $wish) {
                $wish->delete();
            }

            return response()->json([
                'status' => true,
                'msg' => 'Тэг удален'
            ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'Tag not found'
        ]);
    }

    public function getSelectYesterday(){
        return $this->select()->whereDate('created_at','<=',Carbon::yesterday())->get()->sortBy('ration_id');
    }

    public function getPreviousOrderSelectByRation($order_id, $ration_id): JsonResponse
    {
        $order = Order::find($order_id);

        if ($order){
            $yesterday = $order->select()
                ->whereDate('created_at','<=', Carbon::yesterday())
                ->where('ration_id', $ration_id)
                ->orderBy('created_at', 'desc')
                ->first();

            if ($yesterday){
                return response()->json(new SelectCollection($yesterday));
            }
        }

        return response()->json([
            'status' => false,
            'msg' => 'Order not found'
        ]);
    }

    public function getOrderSelectByRation($order_id, $ration_id): JsonResponse
    {
        $order = Order::find($order_id);

        if ($order){
            $today = $order->select()
                ->whereDate('created_at', Carbon::today())
                ->where('ration_id', $ration_id)
                ->first();

            if ($today){
                return response()->json(new SelectCollection($today));
            }else{
                $cuisine = Cuisine::where('is_on_duty', true)->first();
                $dish = Dish::where('cuisine_id', $cuisine->id)->where('ration_id', $ration_id)->first();

                $select = new Select();
                $select->order_id = $order_id;
                $select->cuisine_id = $cuisine->id;
                $select->ration_id = $ration_id;
                if ($dish){
                    $select->dish_id = $dish->id;
                }
                $select->status = 5;
                $select->save();

                if ($dish){
                    $select->ingredients()->sync($dish->getIngredientIds());
                }

                return response()->json(new SelectCollection($select));
            }
        }

        return response()->json([
            'status' => false,
            'msg' => 'Order not found'
        ]);
    }
}

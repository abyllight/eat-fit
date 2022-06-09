<?php

namespace App\Http\Controllers;

use AmoCRM\Client;
use App\Http\Resources\OrderLogisticCollection;
use App\Http\Resources\OrderSelectCollection;
use App\Http\Resources\SelectCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use App\Models\Order;
use App\Models\Select;
use App\Models\SelectWish;
use App\Models\Wishlist;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(): JsonResponse
    {
        $user = Auth::user();
        $orders = Order::where('is_active', true)->where('city_id', $user->city_id)->orderBy('name')->get();
        $collection = OrderLogisticCollection::collection($orders);

        return response()->json($collection);
    }

    public function store(Request $request){
        $request->validate([
            'type' => 'required',
            'city_id' => 'required',
            'name' => 'required',
            'phone' => 'required',
            'yaddress1' => 'required',
            'address1' => 'required'
        ]);

        $order = new Order();
        $order->name = $request->name;
        $order->phone = $request->phone;
        $order->whatsapp = $request->whatsapp;
        $order->type = $request->type;
        $order->city_id = $request->city_id;
        $order->size = $request->size;
        $order->day = $request->day;
        $order->course = $request->course;
        $order->yaddress1 = $request->yaddress1;
        $order->address1 = $request->address1;
        $order->logistic = $request->logistic;

        $order->yaddress2 = !$request->yaddress2 ? $request->yaddress1 : $request->yaddress2;
        $order->address2 = !$request->address2 ? $request->address1 : $request->address2;

        if ($request->time1_start && $request->time1_end){
            $order->time1 = $request->time1_start . '-' . $request->time1_end;
        }

        if ($request->time2_start && $request->time2_end){
            $order->time2 = $request->time2_start . '-' . $request->time2_end;
        }else{
            $order->time2 = $request->time1_start . '-' . $request->time1_end;
        }

        $order->is_active = true;
        $order->save();

        return response()->json([
            'status' => true,
            'msg' => 'Заказ добавлен'
        ]);
    }

    public function show($id): JsonResponse
    {
        $order = Order::find($id);

        if (!$order){
            return response()->json([
                'status' => false,
                'msg' => 'Order not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'order' => $order
        ]);
    }

    public function update(Request $request, $id){
        $order = Order::find($id);

        if (!$order){
            return response()->json([
                'status' => false,
                'msg' => 'Order not found'
            ]);
        }

        $request->validate([
            'type' => 'required',
            'name' => 'required',
            'city_id' => 'required',
            'phone' => 'required',
            'yaddress1' => 'required',
            'address1' => 'required'
        ]);

        $order->name = $request->name;
        $order->phone = $request->phone;
        $order->whatsapp = $request->whatsapp;
        $order->type = $request->type;
        $order->city_id = $request->city_id;
        $order->size = $request->size;
        $order->day = $request->day;
        $order->course = $request->course;
        $order->yaddress1 = $request->yaddress1;
        $order->address1 = $request->address1;
        $order->logistic = $request->logistic;

        $order->yaddress2 = !$request->yaddress2 ? $request->yaddress1 : $request->yaddress2;
        $order->address2 = !$request->address2 ? $request->address1 : $request->address2;

        if ($request->time1_start && $request->time1_end){
            $order->time1 = $request->time1_start . '-' . $request->time1_end;
        }

        if ($request->time2_start && $request->time2_end){
            $order->time2 = $request->time2_start . '-' . $request->time2_end;
        }else{
            $order->time2 = $request->time1_start . '-' . $request->time1_end;
        }

        $order->save();

        return response()->json([
            'status' => true,
            'msg' => 'Заказ обновлен'
        ]);
    }

    public function deactivate($id){
        $order = Order::find($id);

        if (!$order){
            return response()->json([
                'status' => false,
                'msg' => 'Order not found'
            ]);
        }

        $order->is_active = false;
        $order->save();

        return response()->json([
            'status' => true,
            'msg' => 'Заказ деактивирован'
        ]);
    }

    public function getSelect(){

        $user = Auth::user();
        $orders = Order::where('type', Order::EAT_FIT_SELECT)
            ->where('city_id', $user->city_id)
            ->where('is_active', true)
            ->orderBy('size')
            ->get();

        $select = [
            'total' => $orders->count(),
            'xs'    => $orders->where('size', Order::XS)->count(),
            's'     => $orders->where('size', Order::S)->count(),
            'm'     => $orders->where('size', Order::M)->count(),
            'l'     => $orders->where('size', Order::L)->count(),
            'xl'    => $orders->where('size', Order::XL)->count()
        ];

        return response()->json([
            'status' => true,
            'orders' => OrderSelectCollection::collection($orders),
            'stat' => $select
        ]);
    }

    public function getOrderStat(): JsonResponse
    {
        $items = Order::getOrderByType(Order::EAT_FIT_LITE);
        $lite = [
            'total' => $items->count(),
            'xs'    => $items->where('size', Order::XS)->count(),
            's'     => $items->where('size', Order::S)->count(),
            'm'     => $items->where('size', Order::M)->count(),
            'l'     => $items->where('size', Order::L)->count(),
            'xl'    => $items->where('size', Order::XL)->count()
        ];

        $items = Order::getOrderByType(Order::EAT_FIT_SELECT);
        $select = [
            'total' => $items->count(),
            'xs'    => $items->where('size', Order::XS)->count(),
            's'     => $items->where('size', Order::S)->count(),
            'm'     => $items->where('size', Order::M)->count(),
            'l'     => $items->where('size', Order::L)->count(),
            'xl'    => $items->where('size', Order::XL)->count()
        ];

        $detox = Order::getOrderByType(Order::EAT_FIT_DETOX)->count();
        $go = Order::getOrderByType(Order::EAT_FIT_GO)->count();
        $cakes = Order::getOrderByType(Order::CAKES)->count();

        return response()->json([
            'lite' => $lite,
            'select' => $select,
            'detox' => $detox,
            'go' => $go,
            'cakes' => $cakes
        ]);
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

    public function getEatFit(): JsonResponse
    {
        $orders = $this->fetch();

        if (!$orders['status']) {
            return response()->json([
                'status' => false,
                'msg' => $orders['code']. '. ' .$orders['message']
            ]);
        }

        Order::where('is_active', true)
            ->where('amo_id', '!=', null)
            ->whereIn('type', Order::EAT_FIT_ARRAY)
            ->update(['is_active' => false, 'updated_at' => DB::raw('updated_at')]);

        foreach ($orders['data'] as $order) {
            $fields = [
                'amo_id'    => $order['id'],
                'name'      => $order['name'],
                'type'      => 1,
                'size'      => 1,
                'city_id'   => 1,
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
                    case '881669': //City
                        $fields['city_id'] = $field["values"][0]["enum"];
                        break;
                }
            }

            switch ($fields['city_id']) {
                case '977019': //Astana
                    $fields['city_id'] = Order::ASTANA;
                    break;
                case '977021': //Almaty
                    $fields['city_id'] = Order::ALMATY;
                    break;
            }

            switch ($fields['type']) {
                case '678649': //Lite
                    $fields['type'] = Order::EAT_FIT_LITE;
                    break;
                case '678647': //Select
                    $fields['type'] = Order::EAT_FIT_SELECT;
                    break;
                case '954721': //Detox
                    $fields['type'] = Order::EAT_FIT_DETOX;
                    break;
                case '833911': //FitGo
                    $fields['type'] = Order::EAT_FIT_GO;
                    break;
            }

            switch ($fields['size']) {
                case '678741': //XS
                    $fields['size'] = Order::XS;
                    break;
                case '678743': //S
                    $fields['size'] = Order::S;
                    break;
                case '678745': //M
                    $fields['size'] = Order::M;
                    break;
                case '678747': //L
                    $fields['size'] = Order::L;
                    break;
                case '678749': //XL
                    $fields['size'] = Order::XL;
                    break;
                case '929511': //Eat
                    $fields['size'] = Order::EAT;
                    break;
            }

            $fields['has_bag'] = strpos($fields['logistic'], 'ланчбэг') !== false;

            $existing_order = Order::where('amo_id', $fields['amo_id'])->orWhere('name', $fields['name'])->first();

            if ($existing_order) {
                $this->updateOrder($existing_order, $fields);
            }else {
                Order::create([
                    'amo_id'    => $fields['amo_id'],
                    'name'      => $fields['name'],
                    'type'      => $fields['type'],
                    'size'      => $fields['size'],
                    'city_id'   => $fields['city_id'],
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
            'courier_position' => null,
            'position'      => null,
            'interval'      => 0,
            'time1_old'     => null,
            'time2_old'     => null,
            'yaddress1_old' => null,
            'yaddress2_old' => null
        ]);

        return response()->json([
            'status' => true,
            'msg' => 'Success'
        ]);
    }

    public function updateOrder(Order $order, array $fields = [])
    {
        $now = Carbon::now();

        $order->amo_id   = $fields['amo_id'];
        $order->name     = $fields['name'];
        $order->type     = $fields['type'];
        $order->size     = $fields['size'];
        $order->city_id  = $fields['city_id'];
        $order->phone    = $fields['phone'];
        $order->whatsapp = $fields['whatsapp'];
        $order->course   = $fields['course'];
        $order->has_bag  = $fields['has_bag'];
        $order->address1 = $fields['a1'];
        $order->address2 = $fields['a2'];
        $order->logistic = $fields['logistic'];

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
            'msg' => 'Order not found',
            'blacklist' => $order->getBlacklistIds()
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
                $wish->selects()->detach();

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

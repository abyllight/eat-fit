<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'amo_id',
        'name',
        'type',
        'size',
        'phone',
        'whatsapp',
        'day',
        'day_old',
        'course',
        'has_bag',
        'interval',
        'position',
        'logistic',
        'time1',
        'time2',
        'time1_old',
        'time2_old',
        'lat1',
        'lat2',
        'lng1',
        'lng2',
        'yaddress1',
        'yaddress2',
        'yaddress1_old',
        'yaddress2_old',
        'address1',
        'address2',
        'courier1_id',
        'courier2_id',
        'is_active',
        'diet',
        'diet_old',
        'has_water'
    ];

    public const SIZES = ['xs', 's', 'm', 'l', 'xl', 'eat'];

    public const TYPES = ['lite', 'select', 'detox', 'fit_go'];

    public function courier()
    {
        $is_weekend = Week::isWeekend();
        $c_id = $is_weekend ? 'courier2_id' : 'courier1_id';
        return $this->belongsTo(User::class, $c_id,'id');
    }

    public function blacklist()
    {
        return $this->belongsToMany(Ingredient::class, 'blacklists', 'order_id', 'ingredient_id');
    }

    public function wishlist()
    {
        return $this->hasMany(Wishlist::class, 'order_id', 'id');
    }

    public function getBlacklistIds(){
        return array_map(function ($item){
            return $item['id'];
        }, $this->blacklist()->get()->toArray());
    }

    public function getWishes(){
        return array_map(function ($item){
            return $item['wish'];
        }, $this->wishlist()->get()->toArray());
    }

    public function reports()
    {
        return $this->hasMany(Report::class, 'order_id', 'id');
    }

    public function select()
    {
        return $this->hasMany(Select::class, 'order_id', 'id');
    }

    public function getPreviousSelect(){
        return $this->select()->whereDate('created_at', Carbon::yesterday())->get();
    }

    public function getResultSelect(){
        return $this->select()->whereDate('created_at', Carbon::today())->get()->sortBy('ration_id');

        /*if ($result->count() === 0){
            $cuisine = Cuisine::where('is_on_duty', true)->first();
            $rations = Ration::where('is_required', true)->get();

            foreach ($rations as $ration){
                $dish = Dish::where('cuisine_id', $cuisine->id)->where('ration_id', $ration->id)->first();
                $select = new Select();
                $select->order_id = $this->id;
                $select->cuisine_id = $cuisine->id;
                $select->ration_id = $ration->id;
                if ($dish){
                    $select->dish_id = $dish->id;
                }
                $select->status = 5;
                $select->save();

                if ($dish){
                    $select->ingredients()->sync($dish->getIngredientIds());
                }
            }
        }

        return $result;*/
    }

    public function old()
    {
        return $this->hasOne(OrderHistory::class, 'order_id', 'id');
    }

    public static function isWeekend(): bool {
        return Week::isWeekend();
    }

    public static function getType(int $type): string
    {
        return self::TYPES[$type];
    }

    public static function getSize(int $size): string
    {
        return strtoupper(self::SIZES[$size]);
    }

    public static function getNbType(int $type): int
    {
        return self::where('is_active', true)->where('type', $type)->count();
    }

    public static function getNbTypeAndSize(int $type, int $size): int
    {
        return self::where('is_active', true)->where('type', $type)->where('size', $size)->count();
    }

    public function getTag(int $type, int $size): string
    {
        return strtoupper(self::TYPES[$type] . ' ' . self::SIZES[$size]);
    }

    public function getTagColor(int $type) {
        $color = '';

        switch ($type) {
            case 0:
                $color = 'yellow';
                break;
            case 1:
                $color = 'green';
                break;
            case 2:
                $color = 'blue';
                break;
            case 3:
                $color = 'purple';
                break;
        }

        return $color;
    }

    public function getDietColor() {
        if ($this->diet_old) {
            return 'red--text';
        }

        if ($this->blacklist()->count() > 0) {
            return 'green--text';
        }

        return '';
    }

    public function getTime()
    {
        return self::isWeekend() ? $this->time2 : $this->time1;
    }

    public function getTimeOld()
    {
        return self::isWeekend() ? $this->time2_old : $this->time1_old;
    }

    public function getYaddress()
    {
        return self::isWeekend() ? $this->yaddress2 : $this->yaddress1;
    }

    public function getYaddressOld()
    {
        return self::isWeekend() ? $this->yaddress2_old : $this->yaddress1_old;
    }

    public function getAddress()
    {
        return self::isWeekend() ? $this->address2 : $this->address1;
    }

    public function getLat()
    {
        return self::isWeekend() ? $this->lat2 : $this->lat1;
    }

    public function getLng()
    {
        return self::isWeekend() ? $this->lng2 : $this->lng1;
    }

    public function getCourierId(): int
    {
        return self::isWeekend() ? $this->courier2_id : $this->courier1_id;
    }

    public function isNotified(){
        return $this->reports()->whereDate('notified_at', Carbon::today()->toDateString())->exists();
    }

    public function isReported(){
        return $this->reports()->whereDate('reported_at', Carbon::today()->toDateString())->exists();
    }
}

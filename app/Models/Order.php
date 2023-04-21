<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

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
        'courier_position',
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
        'diet_old'
    ];

    const EAT_FIT_LITE = 1;
    const EAT_FIT_SELECT = 2;
    const EAT_FIT_DETOX = 3;
    const EAT_FIT_GO = 4;
    const EAT_FIT_SATURDAY = 7;
    const EAT_CHILL = 5;
    const CAKES = 6;
    const EAT_FIT_SELECT_MAX = 8;

    const XS = 1;
    const S = 2;
    const M = 3;
    const L = 4;
    const XL = 5;
    const EAT = 6;

    const ASTANA = 1;
    const ALMATY = 2;

    const EAT_FIT_ARRAY = [self::EAT_FIT_LITE, self::EAT_FIT_SELECT, self::EAT_FIT_SELECT_MAX, self::EAT_FIT_DETOX, self::EAT_FIT_GO, self::EAT_FIT_SATURDAY];

    const TYPES = ['LITE', 'SELECT', 'DETOX', 'GO', 'CHILL', 'CAKES', 'СУББОТА', 'SELECT_MAX'];

    const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'EAT'];

    public static function isWeek(): bool
    {
        return Week::isWeek();
    }

    public function courier(): BelongsTo
    {
        $c_id = self::isWeek() ? 'courier1_id' : 'courier2_id';
        return $this->belongsTo(User::class, $c_id,'id');
    }

    public function getTag(int $type, int $size = null): string
    {
        $s = $size ? self::SIZES[$size - 1] : '';

        return strtoupper(self::TYPES[$type - 1] . ' ' . $s);
    }

    public function getTime()
    {
        return self::isWeek() ? $this->time1 : $this->time2;
    }

    public function getTimeOld()
    {
        return self::isWeek() ? $this->time1_old : $this->time2_old;
    }

    public function getYaddress()
    {
        return self::isWeek() ? $this->yaddress1 : $this->yaddress2;
    }

    public function getYaddressOld()
    {
        return self::isWeek() ? $this->yaddress1_old : $this->yaddress2_old;
    }

    public function getAddress()
    {
        return self::isWeek() ? $this->address1 : $this->address2;
    }

    public function getLat()
    {
        return self::isWeek() ? $this->lat1 : $this->lat2;
    }

    public function getLng()
    {
        return self::isWeek() ? $this->lng1 : $this->lng2;
    }

    public function getCourierName()
    {
        return $this->courier ? $this->courier->name : '-';
    }

    public function isGeocoded(): bool
    {
        return $this->getLat() !== null;
    }

    public function getCourierId()
    {
        return self::isWeek() ? $this->courier1_id : $this->courier2_id;
    }

    public function reports(): HasMany
    {
        return $this->hasMany(Report::class, 'order_id', 'id');
    }

    public function blacklist(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class, 'blacklists', 'order_id', 'ingredient_id');
    }

    public function wishlist(): HasMany
    {
        return $this->hasMany(Wishlist::class, 'order_id', 'id');
    }

    public function getBlacklistIds(): array
    {
        return array_map(function ($item){
            return $item['id'];
        }, $this->blacklist()->get()->toArray());
    }

    public function getWishes(): array
    {
        return array_map(function ($item){
            return $item['wish'];
        }, $this->wishlist()->get()->toArray());
    }

    public function select()
    {
        return $this->hasMany(Select::class, 'order_id', 'id');
    }

    public function getPreviousSelect(){
        return $this->select()->whereDate('created_at', Carbon::yesterday())->get();
    }

    public function getResultSelect(): Collection
    {
        $result = $this->select()->whereDate('created_at', Carbon::today())->get()->sortBy('ration_id');

        if ($result->count() === 0) {
            if ($this->type !== Order::EAT_FIT_SELECT && $this->type !== Order::EAT_FIT_SELECT_MAX) {
                $max = Order::where('is_active', true)
                    ->where('city_id', City::ASTANA)->max('s_num');

                $this->s_num = $max + 1;
                $this->save();
            }

            $cuisine = Cuisine::where('is_on_duty', true)->first();

            if (!$cuisine) {
                $cuisine = Cuisine::first();
            }

            $rations = Ration::all();

            foreach ($rations as $ration) {
                $duty_dish = Dish::where('cuisine_id', $cuisine->id)->where('ration_id', $ration->id)->first();

                $select = new Select();
                $select->order_id = $this->id;
                $select->cuisine_id = $cuisine->id;
                $select->ration_id = $ration->id;
                $select->dep_id = $ration->department_id;
                $select->tableware_id = $ration->tableware_id;
                $select->city_id = $this->city_id;

                if ($duty_dish) {
                    $select->dish_id = $duty_dish->id;
                    $select->dish_name = $duty_dish->name;
                    $select->status = Select::LITE;

                    $ds = $duty_dish->sizes->where('size', $this->size)->first();

                    if ($ds) {
                        $select->weight = $ds->weight;
                    }
                }

                $select->save();

                if ($duty_dish) {
                    $select->ingredients()->sync($duty_dish->getIngredientIds());
                }
            }

            return $this->select()->whereDate('created_at', Carbon::today())->get()->sortBy('ration_id');
        }

        return $result;
    }

    public static function getType(int $type): string
    {
        return self::TYPES[$type - 1];
    }

    public static function getSize(int $size): string
    {
        return strtoupper(self::SIZES[$size - 1]);
    }

    public static function getOrderByType(int $type)
    {
        $user = Auth::user();
        return self::where('is_active', true)->where('type', $type)->where('city_id', $user->city_id)->get();
    }

    public static function getOrderByTypeAndSize(int $type, int $size)
    {
        return self::where('is_active', true)->where('type', $type)->where('size', $size)->get();
    }

    public function getTagColor(int $type, bool $auto = false): string
    {
        if ($auto) {
            return 'orange';
        }

        $color = '';

        switch ($type) {
            case Order::EAT_FIT_LITE:
                $color = 'yellow';
                break;
            case Order::EAT_FIT_SELECT_MAX:
            case Order::EAT_FIT_SELECT:
                $color = 'green';
                break;
            case Order::EAT_FIT_DETOX:
                $color = 'blue';
                break;
            case Order::EAT_FIT_GO:
                $color = 'purple';
                break;
            case Order::CAKES:
                $color = 'pink';
                break;
            case Order::EAT_FIT_SATURDAY:
                $color = 'red';
                break;
        }

        return $color;
    }

    public function getHexColor(int $type, bool $auto = false): string
    {
        if ($auto) {
            return 'ff8a65';
        }
        $color = '';

        switch ($type) {
            case Order::EAT_FIT_LITE:
                $color = 'fff59d';
                break;
            case Order::EAT_FIT_SELECT_MAX:
            case Order::EAT_FIT_SELECT:
                $color = 'a5d6a7';
                break;
            case Order::EAT_FIT_DETOX:
                $color = '90CAF9';
                break;
            case Order::EAT_FIT_GO:
                $color = 'CE93D8';
                break;
            case Order::CAKES:
                $color = 'EC407A';
                break;
            case Order::EAT_FIT_SATURDAY:
                $color = 'EF9A9A';
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

    public function isNotified(){
        return $this->reports()->whereDate('notified_at', Carbon::today()->toDateString())->exists();
    }

    public function isReported(){
        return $this->reports()->whereDate('reported_at', Carbon::today()->toDateString())->exists();
    }
}

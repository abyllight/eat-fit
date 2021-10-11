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

    public function reports()
    {
        return $this->hasMany(Report::class, 'order_id', 'id');
    }

    public const SIZES = ['xs', 's', 'm', 'l', 'xl', 'eat'];

    public const TYPES = ['lite', 'select', 'detox', 'fit_go'];

    public static function isWeekend(): bool {
        return Week::isWeekend();
    }

    public static function getType(int $type): string
    {
        return self::TYPES[$type];
    }

    public static function getSize(int $size): string
    {
        return self::SIZES[$size];
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

    public function getColor(int $type) {
        $color = '';

        switch ($type) {
            case 0:
                $color = 'yellow';
                break;
            case 1:
                $color = 'green';
                break;
            case '3':
                $color = 'blue';
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

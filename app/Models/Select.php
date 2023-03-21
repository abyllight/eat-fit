<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Select extends Model
{
    use HasFactory;

    protected $fillable = ['order_id', 'cuisine_id', 'ration_id', 'dish_id', 'dish_name', 'status'];

    const START = 0;
    const REPLACEMENT = 2;
    const WITHOUT = 3;
    const LITE = 5;
    const EXTRA = 6;

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function cuisine()
    {
        return $this->belongsTo(Cuisine::class, 'cuisine_id', 'id');
    }

    public function ration()
    {
        return $this->belongsTo(Ration::class, 'ration_id', 'id');
    }

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'select_ingredients', 'select_id', 'ingredient_id')
                ->withPivot('analog_id', 'is_editable', 'is_visible');
    }

    public function dish()
    {
        return $this->belongsTo(Dish::class, 'dish_id', 'id');
    }

    public function group() {
        return $this->belongsTo(UserGroup::class, 'group_id', 'id');
    }

    public function wishes()
    {
        return $this->belongsToMany(Wishlist::class, 'select_wishes', 'select_id', 'wish_id');
    }

    public function selected_wishes()
    {
        return $this->wishes()->pluck('id');
    }

    public function tableware() {
        return $this->belongsTo(TableWare::class, 'tableware_id', 'id');
    }

    public function getWishIds()
    {
        return array_map(function ($item) {
            return $item['id'];
        }, $this->wishes()->get()->toArray());
    }

    public function getIngredientIds()
    {
        return $this->ingredients()->pluck('id')->toArray();
    }

    public function getStatusColor(): string
    {
        $color = 'lime lighten-2';

        if (!$this->is_active) {
            return 'grey';
        }

        if ($this->status === self::REPLACEMENT){
            $color = 'red lighten-3';
        }

        if ($this->status === self::WITHOUT){
            $color = 'yellow accent-4';
        }

        if ($this->status === self::EXTRA){
            $color = 'light-blue accent-1';
        }

        return $color;
    }

    public function getStatusColorExcel(int $status): string
    {
        $color = '';

        if ($status === self::REPLACEMENT){
            $color = 'EF9A9A';
        }else if ($status === self::LITE || $status === self::WITHOUT){
            $color = 'DCE775';
        }

        return $color;
    }

    public static function generateCode()
    {
        $groups = Select::with('ingredients')
            ->whereDate('created_at', Carbon::today())
            ->where('dish_id', '!=', null)
            ->get()
            ->groupBy('ration_id');

        $duty_cuisine = Cuisine::where('is_on_duty', true)->first();

        foreach ($groups as $group){

            $ids = [];
            //beautify
            foreach ($group as $item) {

                if (!$item->order->is_active) {
                    $item->is_active = false;
                    $item->s_num = null;
                }else {
                    $item->is_active = true;
                }

                $item->save();

                $code = null;

                $duty_dish = Dish::where('cuisine_id', $duty_cuisine->id)->where('ration_id', $item->ration_id)->first();

                if ($duty_dish) {
                    $a = array_diff($duty_dish->getIngredientIds()->toArray(), $item->getIngredientIds());
                    $b = array_diff($item->getIngredientIds(), $duty_dish->getIngredientIds()->toArray());

                    if (count($a) === 0 && count($b) === 0 && !$item->description) {
                        $size = $duty_dish->sizes()->where('size', $item->order->size)->first();

                        if ($size && $item->weight === $size->weight) {
                            $code = '0';
                        }
                    }
                }

                $ids[] = [
                    'id' => $item->id,
                    'code' => $code,
                    'weight' => $item->weight,
                    'description' => $item->description,
                    'ids' => $item->getIngredientIds()
                ];
            }

            for ($i = 0; $i < count($ids); $i++) {

                if ($ids[$i]['code'] === null){
                    $ids[$i]['code'] = $i+1;
                }else{
                    continue;
                }

                for ($j = $i+1; $j < count($ids); $j++) {
                    $a = array_diff($ids[$i]['ids'], $ids[$j]['ids']);
                    $b = array_diff($ids[$j]['ids'], $ids[$i]['ids']);

                    if (count($a) === 0 && count($b) === 0
                        && $ids[$i]['description'] === $ids[$j]['description']
                        && $ids[$i]['weight'] === $ids[$j]['weight'])
                    {
                        $ids[$j]['code'] = $i+1;
                    }
                }
            }

            foreach ($group as $key => $item){
                $ration = Ration::find($item->ration_id);

                $item->code = $ration->code . '-' . $ids[$key]['code'];
                $item->save();
            }
        }
    }
}

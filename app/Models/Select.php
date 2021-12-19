<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Select extends Model
{
    use HasFactory;

    const START = 0;
    const REPLACEMENT = 2;
    const WITHOUT = 3;
    const LITE = 5;

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
                ->withPivot('analog_id', 'editable');
    }

    public function dish()
    {
        return $this->belongsTo(Dish::class, 'dish_id', 'id');
    }

    public function getIngredientIds()
    {
        return array_map(function ($item){
            return $item['id'];
        }, $this->ingredients()->get()->toArray());
    }

    public function getStatusColor(int $status): string
    {
        $color = '';

        if ($status === self::REPLACEMENT){
            $color = 'red lighten-3';
        }else if ($status === self::LITE || $status === self::WITHOUT){
            $color = 'lime lighten-2';
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
}

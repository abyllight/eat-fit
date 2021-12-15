<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Select extends Model
{
    use HasFactory;

    const START = 0;
    const NO = 1;
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

    public function getStatusColor(int $color){
        switch ($color){
            case 0:
                return '';
            case 1:
                return 'grey darken-1';
            case 2:
                return 'red lighten-3';
            case 3:
                return 'lime lighten-2';
            case 5:
                return 'cyan lighten-1';
        }
    }
}

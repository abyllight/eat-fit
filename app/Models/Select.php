<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Select extends Model
{
    use HasFactory;

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
        return $this->belongsToMany(Ingredient::class, 'select_ingredients', 'select_id', 'ingredient_id');
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
}

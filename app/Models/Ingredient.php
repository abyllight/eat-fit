<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'i_id', 'i_name', 'name', 'description'
    ];

    public function dishes()
    {
        return $this->belongsToMany(Dish::class, 'dish_ingredients', 'ingredient_id', 'dish_id');
    }

    public function blacklist()
    {
        return $this->belongsToMany(Order::class, 'blacklists', 'ingredient_id', 'order_id');
    }
}

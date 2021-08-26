<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    use HasFactory;

    protected $fillable = [
        'i_id', 'i_name', 'name', 'time', 'cuisine_id', 'is_custom'
    ];

    public const RATIONS = ['Завтрак 1', 'Завтрак 2', 'Обед суп', 'Обед основной', 'Обед салат', 'Полдник', 'Ужин основной', 'Обед гарнир', 'Ужин овощи'];

    public function cuisine()
    {
        return $this->belongsTo(Cuisine::class, 'cuisine_id', 'id');
    }

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'dish_ingredients', 'dish_id', 'ingredient_id');
    }

    public function getRation(int $time): string
    {
        return self::RATIONS[$time - 1];
    }
}

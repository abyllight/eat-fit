<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'category_ingredients', 'category_id', 'ingredient_id');
    }

    public function getIngredientIds()
    {
        return array_map(function ($item){
            return $item['id'];
        }, $this->ingredients()->get()->toArray());
    }
}

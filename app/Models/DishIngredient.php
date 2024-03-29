<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DishIngredient extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['dish_id', 'ingredient_id', 'is_original', 'is_visible'];

    public function sizes(): HasMany
    {
        return $this->hasMany(DishIngredientSize::class, 'di_id', 'id');
    }
}

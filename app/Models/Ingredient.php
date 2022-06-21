<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'iiko_id', 'iiko_name', 'name', 'description'
    ];

    public function dishes()
    {
        return $this->belongsToMany(Dish::class, 'dish_ingredients', 'ingredient_id', 'dish_id');
    }

    public function custom_dishes()
    {
        return $this->belongsToMany(Dish::class, 'custom_dish_ingredients', 'ingredient_id', 'dish_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_ingredients', 'ingredient_id', 'category_id');
    }

    public function p_categories(): BelongsToMany
    {
        return $this->belongsToMany(PCategory::class, 'p_category_ingredients', 'ingredient_id', 'p_category_id');
    }

    public function purchases(): BelongsToMany
    {
        return $this->belongsToMany(Purchase::class, 'purchase_ingredients', 'ingredient_id', 'purchase_id')
            ->withPivot('left', 'total');
    }

    public function getCategoryIds(): array
    {
        return array_map(function ($item){
            return $item['id'];
        }, $this->categories()->get()->toArray());
    }

    public function blacklist()
    {
        return $this->belongsToMany(Order::class, 'blacklists', 'ingredient_id', 'order_id');
    }

    public function selects()
    {
        return $this->belongsToMany(Select::class, 'select_ingredients', 'ingredient_id', 'select_id');
    }

    public function is_custom()
    {
        return $this->iiko_id === null;
    }
}

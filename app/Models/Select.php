<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

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
                ->withPivot('analog_id', 'is_editable', 'is_visible');
    }

    public function dish()
    {
        return $this->belongsTo(Dish::class, 'dish_id', 'id');
    }

    public function wishes()
    {
        return $this->belongsToMany(Wishlist::class, 'select_wishes', 'select_id', 'wish_id');
    }

    public function getWishIds()
    {
        return array_map(function ($item){
            return $item['id'];
        }, $this->wishes()->get()->toArray());    }

    public function getIngredientIds(): Collection
    {
        return $this->ingredients()->pluck('id');
    }

    public function getStatusColor(): string
    {
        $color = '';

        if (!$this->is_active) {
            return 'grey';
        }

        if ($this->status === self::REPLACEMENT){
            $color = 'red lighten-3';
        }else if ($this->status === self::LITE || $this->status === self::WITHOUT){
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

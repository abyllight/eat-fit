<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Dish extends Model
{
    use HasFactory;

    protected $fillable = [
        'iiko_id', 'iiko_name', 'code', 'name', 'ration_id', 'department_id', 'cuisine_id', 'description', 'is_custom'
    ];

    public function sizes(): HasMany
    {
        return $this->hasMany(DishSize::class, 'dish_id', 'id');
    }

    public function cuisine()
    {
        return $this->belongsTo(Cuisine::class, 'cuisine_id', 'id');
    }

    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class, 'dish_ingredients', 'dish_id', 'ingredient_id');
    }

    public function getIngredientIds()
    {
        return array_map(function ($item){
            return $item['id'];
        }, $this->ingredients()->get()->toArray());
    }

    public function ration()
    {
        return $this->belongsTo(Ration::class, 'ration_id', 'id');
    }

    public function selects()
    {
        return $this->hasMany(Select::class, 'dish_id', 'id');
    }

    public function getDepartment()
    {
        return $this->department_id ? Department::DEPARTMENTS[$this->department_id] : null;
    }

    public static function getDutyDishByRation($ration_id){
        $cuisine = Cuisine::where('is_on_duty', true)->first();
        return Dish::where('cuisine_id', $cuisine->id)->where('ration_id', $ration_id)->first();
    }
}

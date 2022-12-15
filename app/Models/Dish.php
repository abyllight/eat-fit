<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
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
        return $this->belongsToMany(
            Ingredient::class,
            'dish_ingredients',
            'dish_id',
            'ingredient_id'
        );
    }

    public function getVisibleIngredients(): Collection
    {
        return $this->ingredients()->where('is_visible', true)->get()->sortBy('name');
    }

    public function getIngredientIds(): \Illuminate\Support\Collection
    {
        return $this->getVisibleIngredients()->pluck('id');
    }

    public function getOriginalIngredients(): Collection
    {
        return $this->ingredients()->where('is_original', true)->get()->sortBy('name');
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

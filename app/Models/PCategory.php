<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class PCategory extends Model
{
    use HasFactory;

    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class, 'p_category_ingredients', 'p_category_id', 'ingredient_id');
    }

    public function getIngredientIds(): array
    {
        return array_map(function ($item){
            return $item['id'];
        }, $this->ingredients()->get()->toArray());
    }

    public function providers(): BelongsToMany
    {
        return $this->belongsToMany(Provider::class, 'provider_categories', 'p_category_id', 'provider_id');
    }
}

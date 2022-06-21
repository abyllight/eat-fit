<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Purchase extends Model
{
    use HasFactory;

    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class, 'purchase_ingredients', 'purchase_id', 'ingredient_id')
            ->withPivot('left', 'total', 'diff', 'done');
    }

    public function cuisine(): BelongsTo
    {
        return $this->belongsTo(Cuisine::class, 'cuisine_id', 'id');
    }

    public function sizes(): HasMany
    {
        return $this->hasMany(PurchaseSize::class, 'purchase_id', 'id');
    }
}

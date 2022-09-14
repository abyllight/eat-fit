<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DishIngredientSize extends Model
{
    use HasFactory;

    protected $fillable = ['di_id', 'size', 'amount'];

    public function di(): BelongsTo
    {
        return $this->belongsTo(DishIngredient::class, 'di_id', 'id');
    }
}

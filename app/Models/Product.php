<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'description',
        'composition',
        'image',
        'price',
        'wholesale_price',
        'weight',
        'kcal',
        'fat',
        'protein',
        'carbohydrate',
        'status',
        'is_active'
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(ProductCategory::class, 'category_id', 'id');
    }

    public function getCategoryName()
    {
        return $this->category ? $this->category->title : '';
    }
}

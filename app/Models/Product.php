<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand_id',
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

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class, 'brand_id', 'id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(ProductCategory::class, 'category_id', 'id');
    }

    public function getBrandName()
    {
        return $this->brand ? $this->brand->title : '';
    }

    public function getCategoryName()
    {
        return $this->category ? $this->category->title : '';
    }

    public function items(): HasMany
    {
        return $this->hasMany(CartItem::class, 'product_id', 'id');
    }
}

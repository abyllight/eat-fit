<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
        'is_active'
    ];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'brand_id', 'id');
    }

    public function categories() {
        $arr = $this->products->groupBy('category_id');
        $ids = [];

        foreach ($arr as $a) {
            $ids[] = $a[0]->category_id;
        }

        return ProductCategory::whereIn('id', $ids)->get();
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ShopOrder extends Model
{
    use HasFactory;

    public function customer(): HasOne
    {
        return $this->hasOne(Customer::class, 'customer_id', 'id');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    public function getProductName(): string
    {
        if ($this->product_id === 0) {
            return 'Приборы';
        }else if ($this->product_id === null) {
            return 'Custom';
        }else {
            return $this->product->title;
        }
    }
}

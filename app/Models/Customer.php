<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Customer extends Model
{
    use HasFactory;

    public function cart(): HasOne
    {
        return $this->hasOne(Cart::class, 'customer_id', 'id');
    }

    public function shop_items(): HasMany
    {
        return $this->hasMany(ShopOrder::class, 'customer_id', 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;

    public function order()
    {
        return $this->belongsTo(Wishlist::class, 'order_id', 'id');
    }

    public function selects()
    {
        return $this->belongsToMany(Select::class, 'select_wishes', 'wish_id', 'select_id');
    }
}

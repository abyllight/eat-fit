<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'amo_id',
        'name',
        'pay_fact',
        'pay_type',
        'created_at',
        'updated_at'
    ];

    /*public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }*/
}

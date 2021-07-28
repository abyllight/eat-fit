<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courier extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'car',
        'phone',
        'password',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'user_id');
    }

    public function orders()
    {
        $is_weekend = Week::isWeekend();
        $c_id = $is_weekend ? 'courier2_id' : 'courier1_id';
        return $this->hasMany(Order::class, $c_id, 'id')->where('is_active', true)->orderBy('position');
    }

    public function reports()
    {
        return $this->hasMany('App\Models\Report', 'courier_id', 'id');
    }
}

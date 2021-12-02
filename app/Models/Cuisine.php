<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuisine extends Model
{
    use HasFactory;

    protected $fillable = [
        'iiko_name', 'iiko_id', 'name', 'is_on_duty'
    ];

    public function dishes()
    {
        return $this->hasMany(Dish::class, 'cuisine_id', 'id');
    }

    public function select()
    {
        return $this->hasMany(Select::class, 'cuisine_id', 'id');
    }
}

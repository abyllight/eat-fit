<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ration extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'is_required'
    ];

    public function dishes()
    {
        return $this->hasMany(Dish::class, 'ration_id', 'id');
    }
}

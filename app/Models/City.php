<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    const ASTANA = 1;
    const ALMATY = 2;

    const cities = [
        [
            'id' => 1,
            'name' => 'Астана'
        ],
        [
            'id' => 2,
            'name' => 'Алматы'
        ]
    ];

    public static function getCity(int $id){
        return self::cities[$id - 1]['name'];
    }
}

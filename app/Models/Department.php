<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    public const DEPARTMENTS = [
        [
            'id' => 0,
            'name' => 'Горячий цех'
        ],
        [
            'id' => 1,
            'name' => 'Холодный цех'
        ],
        [
            'id' => 3,
            'name' => 'Кондитерский'
        ]
    ];
}

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
            'name' => 'Dep1'
        ],
        [
            'id' => 1,
            'name' => 'Dep2'
        ],
        [
            'id' => 2,
            'name' => 'Dep3'
        ]
    ];
}

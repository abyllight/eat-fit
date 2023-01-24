<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    public const ASTANA_PAYMENT_TYPES = [
        [
            'name' => 'Без оплаты'
        ],
        [
            'name' => 'Наличный расчет'
        ],
        [
            'name' => 'POS-терминал КС'
        ],
        [
            'name' => 'Kaspi POS'
        ],
        [
            'name' => 'Личный Kaspi'
        ]
    ];

    public const ALMATY_PAYMENT_TYPES = [
        [
            'name' => 'Без оплаты'
        ],
        [
            'name' => 'Наличный расчет'
        ],
        [
            'name' => 'POS-терминал'
        ],
        [
            'name' => 'Kaspi Gold'
        ]
    ];
}

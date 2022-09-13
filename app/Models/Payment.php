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
            'name' => 'POS-терминал ТОО'
        ],
        [
            'name' => 'POS-терминал КС'
        ],
        [
            'name' => 'POS-терминал Р'
        ],
        [
            'name' => 'Kaspi'
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

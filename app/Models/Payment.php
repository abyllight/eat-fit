<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    public const INIT = 1;
    public const BIGGER_THAN_COURSE = 2;
    public const ASTANA_PAYMENT_TYPES = [
        [
            'name' => 'Без оплаты'
        ],
        [
            'name' => 'Наличный расчет'
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
    public const AMO_PAYMENTS = [
        [
            'id' => 0,
            'val' => null,
            'name' => 'Не выбрано'
        ],
        [
            'id' => 1,
            'val' => '968303',
            'name' => 'Kaspi PAY'
        ],
        [
            'id' => 2,
            'val' => '968305',
            'name' => 'POS-терминар'
        ],
        [
            'id' => 3,
            'val' => '968307',
            'name' => 'Расчетный счет'
        ],
        [
            'id' => 4,
            'val' => '968309',
            'name' => 'Наличные курьеру'
        ],
        [
            'id' => 5,
            'val' => '968311',
            'name' => 'Перевод на карту'
        ],
        [
            'id' => 6,
            'val' => '969831',
            'name' => 'Оплачено картой на сайте'
        ]
    ];

    public const CUSTOM_PAYMENTS = [
        [
            'id' => 0,
            'name' => 'Все'
        ],
        [
            'id' => 1,
            'name' => 'Green'
        ],
        [
            'id' => 2,
            'name' => 'кп КС'
        ],
        [
            'id' => 3,
            'name' => 'наличные'
        ],
        [
            'id' => 4,
            'name' => 'EF Delivery'
        ],
        [
            'id' => 5,
            'name' => 'EFG Del'
        ],
        [
            'id' => 6,
            'name' => 'EF Group'
        ],
        [
            'id' => 7,
            'name' => 'TOO Pay'
        ],
        [
            'id' => 8,
            'name' => 'наличка Алматы'
        ],
        [
            'id' => 9,
            'name' => 'Mousse Cakes'
        ]
    ];
}

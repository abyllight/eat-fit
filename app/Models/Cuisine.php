<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuisine extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'iiko_id'
    ];

   /* public static $cuisines = [
        [
            'id' => 'b807d497-e21f-4fef-99ed-956ec4eeca9f',
            'name' => 'Италия'
        ],
        [
            'id' => '1480e93e-c9f7-4c82-a700-21456a19bcb5',
            'name' => 'Норвегия'
        ],
        [
            'id' => 'd27cc793-b90c-41f4-a315-bb0c3b3a0615',
            'name' => 'Япония'
        ],
        [
            'id' => 'a3d48485-fac9-423b-9bf5-dee94a29bc56',
            'name' => 'Румыния'
        ],
        [
            'id' => '9e07374b-d581-41e1-a367-f85684004535',
            'name' => 'Испания'
        ],
        [
            'id' => 'b8b8a6f7-8bbc-4111-85ca-1a694c9a3b9c',
            'name' => 'Чехия'
        ],
        [
            'id' => 'f034f87a-4e8b-4311-9b3c-92df4fe8106a',
            'name' => 'Англия'
        ],
        [
            'id' => '400b0659-c686-404f-bfbf-f1a42b7c563a',
            'name' => 'Новая Зеландия'
        ],
        [
            'id' => '646d7d74-4178-41e9-970f-7f5b39d2f22c',
            'name' => 'Марокко'
        ],
        [
            'id' => '838ef246-f149-4705-a0ac-425a48f032ba',
            'name' => 'Канада'
        ],
        [
            'id' => 'c7f1a0f1-892f-4269-96a1-ddb427a2b2de',
            'name' => 'Славянская'
        ],
        [
            'id' => '66da6502-6113-4786-8682-e95ae221de20',
            'name' => 'Грузия'
        ],
        [
            'id' => '6d304c54-610b-4f2b-85fd-5800e898c757',
            'name' => 'Америка'
        ],
        [
            'id' => '5dc89cfc-ec26-4b11-b60b-e8e3eaf4199e',
            'name' => '2 Италия'
        ],
        [
            'id' => 'dc58844d-2978-474c-90e7-d49240a6466a',
            'name' => 'Германия'
        ],
        [
            'id' => '7d4a2ce3-1b10-460c-b953-648b9fa6b502',
            'name' => 'Финляндия'
        ],
        [
            'id' => '8dde7c5d-2e36-4ab7-bf4c-d6b4ba997517',
            'name' => 'Шотландия'
        ],
        [
            'id' => 'bd8c0284-204a-43e8-b684-bedaeed3639b',
            'name' => 'Греция'
        ],
        [
            'id' => 'b898f8a4-10b0-4256-ace6-e2e6975e7fd8',
            'name' => 'Мексика'
        ],
        [
            'id' => 'cdc34bbe-71b9-4a40-9f80-fdb94f964124',
            'name' => 'Европа'
        ],
        [
            'id' => '668b55d3-f0a6-443e-9698-27cd487d05a2',
            'name' => 'Франция'
        ],
        [
            'id' => 'e43f54eb-0748-4494-b426-b00275d8c8e8',
            'name' => 'Латвия'
        ],
        [
            'id' => '42748484-97ee-4a00-9588-a1ad19001b0b',
            'name' => 'Иордания'
        ],
        [
            'id' => 'c6174598-fe18-4660-99e8-bf3cfab8b60f',
            'name' => 'Беларусь'
        ],
        [
            'id' => 'e823ee09-54fc-4da0-8885-5aa643138174',
            'name' => 'Гавайи'
        ],
        [
            'id' => 'b8dcd03d-739b-4f31-8e84-2e246b2dfefc',
            'name' => 'Украина'
        ],
        [
            'id' => '2b37ab08-65c4-431f-8db4-1572ed98a72b',
            'name' => 'Индонезия'
        ]
    ];*/
}

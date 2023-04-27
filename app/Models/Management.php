<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Management extends Model
{
    use HasFactory;

    public const TRIAL_STATUS = 16536847; // Пробная доставка
    public const WORK_STATUS = 16566964; // В работе
    public const PLUS_ONE_STATUS = 27248140; // Доставлено
    public const PLUS_ONE_SATURDAY_STATUS = 50754262; // Субботу x2v2
    public const SEND_SELECT_STATUS = 54498818; // Меню Селект
    //Меню селект 885091
    //меню изображение 884637

    public const PLUS_TYPE = 1;
    public const TRIAL_TYPE = 2;
    public const WORK_TYPE = 3;
    public const PLUS_SATURDAY_TYPE = 4;
    public const SEND_SELECT_TYPE = 5;
    public const S_NUM_TYPE = 6;
    public const WORK_OTKAT_TYPE = 7;
    public const FACT_TYPE = 8;
    public const FACT_TYPE_ALMATY = 9;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Week extends Model
{
    use HasFactory;

    public static function isWeek():bool
    {
        return !Week::find(1)->is_weekend;
    }

    public static function isWeekend():bool
    {
        return Week::find(1)->is_weekend;
    }
}

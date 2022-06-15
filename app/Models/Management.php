<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Management extends Model
{
    use HasFactory;

    public const TRIAL_STATUS = 16536847;
    public const WORK_STATUS = 16566964;

    public const PLUS_TYPE = 1;
    public const TRIAL_TYPE = 2;
    public const WORK_TYPE = 3;
}

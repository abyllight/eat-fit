<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelperController extends Controller
{
    public static function beautifyMobile(string $v): string
    {
        return sprintf('+%s (%s%s%s) %s%s%s-%s%s-%s%s', $v[0], $v[1], $v[2], $v[3], $v[4], $v[5], $v[6], $v[7], $v[8], $v[9], $v[10]);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelectIngredient extends Model
{
    use HasFactory;

    protected $fillable = ['select_id', 'ingredient_id', 'analog_id', 'is_editable', 'is_visible'];
}

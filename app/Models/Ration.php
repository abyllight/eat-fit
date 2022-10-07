<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ration extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'is_required', 'code'
    ];

    public function dishes()
    {
        return $this->hasMany(Dish::class, 'ration_id', 'id');
    }

    public function select()
    {
        return $this->hasMany(Select::class, 'ration_id', 'id');
    }

    public function department() {
        return is_numeric($this->department_id) ? Department::DEPARTMENTS[$this->department_id]['name'] : null;
    }
}

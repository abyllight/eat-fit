<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TableWare extends Model
{
    use HasFactory;

    public function rations(): HasMany
    {
        return $this->hasMany(Ration::class, 'tableware_id', 'id');
    }

    public function selects(): HasMany
    {
        return $this->hasMany(Select::class, 'tableware_id', 'id');
    }
}

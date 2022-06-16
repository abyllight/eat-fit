<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CuisineSize extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'cuisine_id', 'iiko_id'
    ];

    public function cuisine(): BelongsTo
    {
        return $this->belongsTo(Cuisine::class, 'cuisine_id', 'id');
    }
}

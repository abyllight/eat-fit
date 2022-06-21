<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Provider extends Model
{
    use HasFactory;

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(PCategory::class, 'provider_categories', 'provider_id', 'p_category_id');
    }

    public function getCategoryIds(): array
    {
        return array_map(function ($item){
            return $item['id'];
        }, $this->categories()->get()->toArray());
    }
}

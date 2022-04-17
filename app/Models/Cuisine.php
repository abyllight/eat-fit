<?php

namespace App\Models;

use App\Http\Resources\RationCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cuisine extends Model
{
    use HasFactory;

    protected $fillable = [
        'iiko_name', 'iiko_id', 'name', 'is_on_duty'
    ];

    public function dishes(): HasMany
    {
        return $this->hasMany(Dish::class, 'cuisine_id', 'id');
    }

    public function select(): HasMany
    {
        return $this->hasMany(Select::class, 'cuisine_id', 'id');
    }

    public function getLeftRations() {
        $rations = Ration::where('is_required', true)->get();

        $dish_rations = $this->dishes->map(function ($item){
            return $item->ration;
        });

        $diff = $rations->diff($dish_rations);

        return RationCollection::collection($diff);
    }
}

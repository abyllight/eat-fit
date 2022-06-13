<?php

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id'    => $this->id,
            'cuisine' => $this->cuisine->name,
            'date' => $this->date,
            'ingredients' => PurchaseIngredientCollection::collection($this->ingredients)
        ];
    }
}

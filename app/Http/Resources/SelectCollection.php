<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SelectCollection extends JsonResource
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
            'id'   => $this->id,
            'cuisine' => $this->cuisine->name,
            'dish_id' => $this->dish ? $this->dish->id : null,
            'dish_name' => $this->dish_name,
            'ingredients' => IngredientCollection::collection($this->ingredients->sortBy('name')),
            'ingredient_ids' => $this->getIngredientIds(),
            'ration_id' => $this->ration_id,
            'created_at' => $this->created_at->format('Y-m-d'),
            'description' => $this->description,
            'status' => $this->status,
            'color' => $this->getStatusColor($this->status)
        ];
    }
}

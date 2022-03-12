<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DishCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'i_name' => $this->iiko_name,
            'cuisine_id' => $this->cuisine_id,
            'name' => $this->name,
            'code' => $this->code,
            'department_id' => $this->department_id,
            'department' => $this->getDepartment(),
            'ration' => $this->ration,
            'ration_id' => $this->ration_id,
            'position' => $this->ration->position,
            'is_custom' => $this->is_custom,
            'ingredient_ids' => $this->getIngredientIds(),
            'ingredients' => IngredientCollection::collection($this->ingredients->sortBy('name')),
            'i_ingredients' => IngredientCollection::collection($this->iiko_ingredients->sortBy('name')),
            'description' => $this->description
        ];
    }
}

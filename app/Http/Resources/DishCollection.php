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
            'cuisine_id' => $this->cuisine_id,
            'cuisine_name' => $this->cuisine ? $this->cuisine->name : null,
            'i_name' => $this->iiko_name,
            'name' => $this->name,
            'department_id' => $this->department_id,
            'department' => $this->getDepartment(),
            'ration' => $this->ration,
            'ration_id' => $this->ration_id,
            'position' => $this->ration ? $this->ration->position : null,
            'is_custom' => $this->is_custom,
            'ingredient_ids' => $this->getIngredientIds(),
            'ingredients' => IngredientCollection::collection($this->getVisibleIngredients()),
            'original_ingredients' => IngredientCollection::collection($this->getOriginalIngredients()),
            'description' => $this->description,
            'sizes' => $this->sizes
        ];
    }
}

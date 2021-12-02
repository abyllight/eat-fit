<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IngredientCollection extends JsonResource
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
            'id'   => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'is_custom' => $this->is_custom(),
            'category_ids' => $this->getCategoryIds(),
            'categories' => $this->categories
        ];
    }
}

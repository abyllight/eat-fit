<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductCollection extends JsonResource
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
            'title' => $this->title,
            'image' => null,
            'description' => $this->description,
            'composition' => $this->composition,
            'price' => $this->price,
            'wholesale_price' => $this->wholesale_price,
            'weight' => $this->weight,
            'kcal' => $this->kcal,
            'fat' => $this->fat,
            'protein' => $this->protein,
            'carbohydrate' => $this->carbohydrate,
            'category_name' => $this->getCategoryName()
        ];
    }
}

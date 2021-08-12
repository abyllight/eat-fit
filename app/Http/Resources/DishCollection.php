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
            'id'   => $this->id,
            'i_id' => $this->i_id,
            'i_name' => $this->i_name,
            'name' => $this->name,
            'time' => $this->time,
            'ration' => $this->getRation($this->time),
            'is_custom' => $this->is_custom,
            'ingredients' => $this->ingredients,
            'description' => $this->description
        ];
    }
}

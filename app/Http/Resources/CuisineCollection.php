<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CuisineCollection extends JsonResource
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
            'i_id' => $this->iiko_id,
            'i_name' => $this->iiko_name,
            'name' => $this->name,
            'duty' => $this->is_on_duty,
            //'dishes' => DishCollection::collection($this->dishes->sortBy('ration_id'))
        ];
    }
}

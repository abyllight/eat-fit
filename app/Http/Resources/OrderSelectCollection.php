<?php

namespace App\Http\Resources;

use App\Models\City;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderSelectCollection extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'tag' => $this->getTag($this->type, $this->size),
            'diet' => $this->diet,
            'diet_old' => $this->diet_old,
            'city' => City::getCity($this->city_id),
            'blacklist' => $this->getBlacklistIds(),
            'select' => $this->select_today()
            //'wishlist' => $this->getWishes(),
            //'previous' => SelectCollection::collection($this->getPreviousSelect()),
            //'result' => SelectCollection::collection($this->getResultSelect())
        ];
    }
}

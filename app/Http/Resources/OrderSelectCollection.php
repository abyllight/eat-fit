<?php

namespace App\Http\Resources;

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
            'size' => $this->getSize($this->size),
            'diet' => $this->diet,
            'diet_old' => $this->diet_old,
            //'blacklist' => $this->getBlacklistIds(),
            //'wishlist' => $this->getWishes(),
            //'previous' => SelectCollection::collection($this->getPreviousSelect()),
            //'result' => SelectCollection::collection($this->getResultSelect())
        ];
    }
}

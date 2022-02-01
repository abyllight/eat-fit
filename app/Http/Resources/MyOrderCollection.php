<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MyOrderCollection extends JsonResource
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
            'phone' => $this->phone,
            'whatsapp' => $this->whatsapp,
            'tag' => $this->getTag($this->type, $this->size),
            'time' => $this->getTime(),
            'address' => $this->getAddress(),
            'logistic' => $this->logistic,
            'lat' => $this->getLat(),
            'lng' => $this->getLng(),
            'has_bag' => $this->has_bag,
            'color' => $this->getTagColor($this->type),
            'is_notified' => $this->isNotified(),
            'is_reported' => $this->isReported()
        ];
    }
}

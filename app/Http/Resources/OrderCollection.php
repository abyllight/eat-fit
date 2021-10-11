<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderCollection extends JsonResource
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
            'amo_id' => $this->amo_id,
            'name' => $this->name,
            'tag' => $this->getTag($this->type, $this->size),
            'color' => $this->getColor($this->type),
            'phone' => $this->phone,
            'whatsapp' => $this->whatsapp,
            'day' => $this->day,
            'day_old' => $this->day_old,
            'course' => $this->course,
            'interval' => $this->interval,
            'position' => $this->position,
            'logistic' => $this->logistic,
            'time' => $this->getTime(),
            'time_old' => $this->getTimeOld(),
            'lat' => $this->getLat(),
            'lng' => $this->getLng(),
            'yaddress' => $this->getYaddress(),
            'yaddress_old' => $this->getYaddressOld(),
            'address' => $this->getAddress(),
            'courier' => $this->courier,
            'courier_id' => $this->getCourierId(),
            'diet' => $this->diet,
            'diet_old' => $this->diet_old,
            'blacklist' => $this->blacklist,
            'diet_color' => $this->getDietColor(),
            'is_notified' => $this->isNotified(),
            'is_reported' => $this->isReported()
        ];
    }
}

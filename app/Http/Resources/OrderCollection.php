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
        $wishes = array_map(function ($item){
            return $item['wish'];
        }, $this->wishlist()->get()->toArray());

        $black = array_map(function ($item){
            return $item['id'];
        }, $this->blacklist()->get()->toArray());

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
            'has_bag' => $this->has_bag ? 'Ланчбэг' : '-',
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
            'courier_name' => $this->courier ? $this->courier->name : '-',
            'courier_id' => $this->getCourierId(),
            'diet' => $this->diet,
            'diet_old' => $this->diet_old,
            'blacklist' => $black,
            'wishlist' => $wishes,
            'diet_color' => $this->getDietColor(),
            'is_notified' => $this->isNotified(),
            'is_reported' => $this->isReported()
        ];
    }
}

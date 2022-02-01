<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderLogisticCollection extends JsonResource
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
            'phone' => $this->phone,
            'tag' => $this->getTag($this->type, $this->size),
            'time' => $this->getTime(),
            'time_old' => $this->getTimeOld(),
            'address' => $this->getAddress(),
            'yaddress' => $this->getYaddress(),
            'yaddress_old' => $this->getYaddressOld(),
            'logistic' => $this->logistic,
            'lat' => $this->getLat(),
            'lng' => $this->getLng(),
            'courier_name' => $this->getCourierName(),
            'courier_id' => $this->getCourierId(),
            'geo' => $this->isGeocoded(),
            'interval' => $this->interval,
            'has_bag' => $this->has_bag,
            'color' => $this->getTagColor($this->type),
            'hex_color' => $this->getHexColor($this->type)
        ];
    }
}

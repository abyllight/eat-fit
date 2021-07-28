<?php

namespace App\Http\Resources;

use App\Http\Controllers\HelperController;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourierCollection extends JsonResource
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
            'id'     => $this->id,
            'name'   => $this->name,
            'phone'  => HelperController::beautifyMobile($this->phone),
            'car'    => $this->car,
            'orders' => OrderCollection::collection($this->orders)
        ];
    }
}

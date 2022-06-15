<?php

namespace App\Http\Resources;

use App\Models\City;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProviderCollection extends JsonResource
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
            'id'       => $this->id,
            'name'     => $this->name,
            'city_id'  => $this->city_id,
            'city'     => City::getCity($this->city_id),
            'phone'    => User::beautifyMobile($this->phone),
            'address'  => $this->address,
            'description' => $this->description
        ];
    }
}

<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerCollection extends JsonResource
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
            'uuid'     => $this->uuid,
            'cart_id'  => $this->cart->uuid,
            'name'     => $this->name,
            'phone'    => User::beautifyMobile($this->phone),
            'address'  => $this->address
        ];
    }
}

<?php

namespace App\Http\Resources;

use App\Models\City;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartItemCollection extends JsonResource
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
            'uuid' => $this->uuid,
            'p_id' => $this->product->id,
            'image' => $this->product->image,
            'q' => $this->quantity,
            'price' => $this->product->price,
            'wholesale_price' => $this->product->wholesale_price
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SelectCollection extends JsonResource
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
            'id'   => $this->id,
            'cuisine' => $this->cuisine->name,
            'order_id' => $this->order->id,
            'order_name' => $this->order->name,
            'whatsapp' => $this->order->whatsapp,
            'done' => $this->done,
            'code' => $this->code,
            'order_tag' => $this->order->getSize(1),
            'dish_id' => $this->dish ? $this->dish->id : null,
            'dish_name' => $this->dish_name,
            'ingredients' => $this->ingredients->sortBy('name')->toArray(),
            'ingredient_ids' => $this->getIngredientIds(),
            'ration' => $this->ration,
            'r_id' => $this->ration_id,
            'wishes' => $this->getWishIds(),
            'wishlist' => $this->wishes,
            'created_at' => $this->created_at->format('Y-m-d'),
            'description' => $this->description,
            'status' => $this->status,
            'color' => $this->getStatusColor(),
            'selected_wishes' => $this->selected_wishes(),
            'tableware' => $this->tableware,
            'is_active' => $this->is_active
        ];
    }
}

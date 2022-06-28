<?php

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseIngredientCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        $categories = $this->p_categories;
        $array = [];

        foreach ($categories as $category) {
            foreach ($category->providers as $provider) {
                $array[] = [
                    'id' => $provider->id,
                    'name' => $provider->name,
                    'phone' => $provider->phone
                ];
            }
        }

        $array = array_unique($array, SORT_REGULAR);

        return [
            'id'    => $this->id,
            'name' => $this->name,
            'left' => $this->pivot->left,
            'diff' => $this->pivot->diff,
            'total' => $this->pivot->total,
            'done' => $this->pivot->done,
            'amount' => $this->pivot->amount,
            'is_custom' => $this->pivot->is_custom,
            'extra' => $this->pivot->extra,
            'deleted' => $this->pivot->deleted,
            'categories' => $this->categories,
            'providers' => $array
        ];
    }
}

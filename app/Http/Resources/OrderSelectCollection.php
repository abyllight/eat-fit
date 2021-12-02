<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderSelectCollection extends JsonResource
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

        //$this->order_select();

        $yesterday = $this->select()->whereDate('created_at', Carbon::yesterday())->get();
        $today = $this->select()->whereDate('created_at', Carbon::today())->get();

        return [
            'id' => $this->id,
            'name' => $this->name,
            'tag' => $this->getTag($this->type, $this->size),
            'size' => $this->getSize($this->size),
            'diet' => $this->diet,
            'diet_old' => $this->diet_old,
            'blacklist' => $black,
            'wishlist' => $wishes,
            'yesterday' => SelectCollection::collection($yesterday->sortBy('ration_id')),
            'today' => SelectCollection::collection($today->sortBy('ration_id'))
        ];
    }
}

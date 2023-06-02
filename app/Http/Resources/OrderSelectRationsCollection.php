<?php

namespace App\Http\Resources;

use App\Models\City;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderSelectRationsCollection extends JsonResource
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
            'ration' =>$this->ration ? $this->ration->name : null,
            'status' => $this->status,
            'color' => $this->getStatusColor()
        ];
    }
}

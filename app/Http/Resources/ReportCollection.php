<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReportCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'courier' => $this->courier,
            'order' => $this->order,
            'comment' => $this->comment,
            'payment' => $this->payment,
            'payment_method' => $this->payment_method,
            'reported_at' => $this->reported_at,
            'delivered_at' => $this->delivered_at
        ];
    }
}

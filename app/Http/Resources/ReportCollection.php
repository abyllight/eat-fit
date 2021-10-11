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
            'courier' => $this->courier->name,
            'order' => $this->order->name,
            'comment' => $this->comment,
            'amount' => $this->amount,
            'payment_type' => $this->payment_type,
            'reported_at' => $this->reported_at,
            'notified_at' => $this->notified_at,
            'status' => $this->status
        ];
    }
}

<?php

namespace App\Http\Resources;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentCollection extends JsonResource
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
            'amo_id' => $this->amo_id,
            'name' => $this->name,
            'pay_type' => $this->pay_type ? Payment::CUSTOM_PAYMENTS[$this->pay_type]['name'] : null,
            'pay_fact' => $this->pay_fact
        ];
    }
}

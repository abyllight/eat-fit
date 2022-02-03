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
            'time' => $this->order->getTime(),
            'phone' => $this->order->phone,
            'name' => $this->order->name,
            'address' => $this->order->getYaddress(),
            'amount' => $this->amount ?? '-',
            'type' => $this->payment_type,
            'comment' => $this->comment,
            'report_status' => $this->getReportStatus(),
            'report_color' => $this->getReportColor(),
            'notification_status' => $this->getNotificationStatus(),
            'notification_color' => $this->getNotificationColor(),
            'notified_at' => $this->getNotifiedAt(),
            'reported_at' => $this->getReportedAt()
        ];
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'courier_id',
        'created_at',
        'comment',
        'reported_at',
        'payment',
        'payment_method',
        'delivered_at'
    ];

    protected $dates = [
        'delivered_at',
        'reported_at',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function courier()
    {
        return $this->belongsTo(User::class, 'courier_id', 'id');
    }

    public function getReportStatus(){
        switch ($this->report_status){
            case '0':
                $status = 'Доставлено';
                break;
            case 1:
                $status = 'Не доставлено';
                break;
            default:
                $status = '-';
        }

        return $status;
    }

    public function getReportColor(){
        switch ($this->report_status){
            case '0':
                $color = 'green';
                break;
            case 1:
                $color = 'red';
                break;
            default:
                $color = 'grey';
        }

        return $color;
    }

    public function getNotificationStatus(): string
    {
        switch ($this->notification_status){
            case '0':
                $status = 'вовремя';
                break;
            case 1:
                $status = 'рано';
                break;
            case 2:
                $status = 'поздно';
                break;
            default:
                $status = 'неизвестно';
        }

        return $status;
    }

    public function getNotificationColor(): string
    {
        switch ($this->notification_status){
            case '0':
                $color = 'green';
                break;
            case 1:
                $color = 'yellow';
                break;
            case 2:
                $color = 'red';
                break;
            default:
                $color = 'grey';
        }

        return $color;
    }

    public function getNotifiedAt()
    {
        return $this->notified_at ?? '-';
    }

    public function getReportedAt()
    {
        return $this->reported_at ? $this->reported_at->format('Y-m-d H:i:s') : '-';
    }
}

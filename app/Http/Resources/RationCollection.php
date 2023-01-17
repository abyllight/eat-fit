<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RationCollection extends JsonResource
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
            'name' => $this->name,
            'code' => $this->code,
            'iiko_id' => $this->iiko_id,
            'department_id' => $this->department_id,
            'tableware_id' => $this->tableware_id,
            'department' => $this->department(),
            'tableware_img' => $this->tableware_id ? '/storage/'.$this->tableware->img : '',
            'is_required' => $this->is_required
        ];
    }
}

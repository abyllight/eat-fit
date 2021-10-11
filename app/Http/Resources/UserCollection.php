<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        $roles = [];
        $r_ids = [];
        foreach ($this->roles as $role) {
            $roles[] = $role->name;
            $r_ids[] = $role->id;
        }

        return [
            'id'       => $this->id,
            'name'     => $this->name,
            'phone'    => User::beautifyMobile($this->phone),
            'is_admin' => $this->is_admin,
            'roles'    => $r_ids,
            'r_names'  => $roles,
            'orders'   => OrderCollection::collection($this->orders)
        ];
    }
}

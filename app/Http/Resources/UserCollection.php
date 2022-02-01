<?php

namespace App\Http\Resources;

use App\Models\City;
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
        return [
            'id'       => $this->id,
            'name'     => $this->name,
            'city_id'  => $this->city_id,
            'city'     => City::getCity($this->city_id),
            'phone'    => User::beautifyMobile($this->phone),
            'is_admin' => $this->is_admin,
            'roles'    => $this->getRoleIds(),
            'role_names'  => $this->getRoleNames(),
            'role_slugs'  => $this->getRoleSlugs(),
            'role_ids'  => $this->getRoleIds()
        ];
    }
}

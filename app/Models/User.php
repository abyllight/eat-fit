<?php

namespace App\Models;

use App\Http\Resources\CourierCollection;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Resources\Json\ResourceCollection;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'phone',
        'is_admin',
        'password',
        'city_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'roles_users', 'user_id', 'role_id');
    }

    public function getRoleNames(): array
    {
        return array_map(function ($role){
            return $role['name'];
        }, $this->roles->toArray());
    }

    public function getRoleSlugs(): array
    {
        return array_map(function ($role){
            return $role['slug'];
        }, $this->roles->toArray());
    }

    public function getRoleIds(): array
    {
        return array_map(function ($role){
            return $role['id'];
        }, $this->roles->toArray());
    }

    public function isCourier(): bool
    {
        $slugs = array_map(function ($role){
            return $role['slug'];
        }, $this->roles->toArray());

        return in_array('courier', $slugs);
    }

    public function addresses()
    {
        return $this->hasMany(Address::class, 'courier_id', 'id');
    }

    public function orders(): HasMany
    {
        $is_weekend = Week::isWeekend();
        $c_id = $is_weekend ? 'courier2_id' : 'courier1_id';
        return $this->hasMany(Order::class, $c_id, 'id')->where('is_active', true)->orderBy('position');
    }

    public function courier(): HasOne
    {
        return $this->hasOne(Courier::class, 'user_id', 'id');
    }

    public static function getCouriers(): ResourceCollection
    {
        $couriers = [];

        foreach (User::all() as $user) {
            foreach ($user->roles as $role) {
                if ($role['slug'] === 'courier'){
                    $couriers[] = $user;
                }
            }
        }

        return CourierCollection::collection($couriers);
    }

    public function reports(){
        return $this->hasMany(Report::class, 'courier_id', 'id');
    }

    public static function beautifyMobile($v): string
    {
        if (!$v) {
            return '';
        }

        return sprintf('+%s (%s%s%s) %s%s%s-%s%s-%s%s', $v[0], $v[1], $v[2], $v[3], $v[4], $v[5], $v[6], $v[7], $v[8], $v[9], $v[10]);
    }

    public static function uglifyMobile(string $v): string
    {
        return preg_replace("/[^0-9]/", "", $v);
    }
}

<?php

namespace App\Models;

use App\Http\Resources\UserCollection;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\JsonResponse;

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

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'roles_users', 'user_id', 'role_id');
    }

    public function orders()
    {
        $is_weekend = Week::isWeekend();
        $c_id = $is_weekend ? 'courier2_id' : 'courier1_id';
        return $this->hasMany(Order::class, $c_id, 'id')->where('is_active', true)->orderBy('position');
    }

    public static function couriers()
    {
        $couriers = [];

        foreach (User::all() as $user) {
            foreach ($user->roles as $role) {
                if ($role['slug'] === 'courier'){
                    $couriers[] = $user;
                }
            }
        }

        return UserCollection::collection($couriers);
    }

    public function reports(){
        return $this->hasMany(Report::class, 'courier_id', 'id');
    }

    public static function beautifyMobile(string $v){
        return sprintf('+%s (%s%s%s) %s%s%s-%s%s-%s%s', $v[0], $v[1], $v[2], $v[3], $v[4], $v[5], $v[6], $v[7], $v[8], $v[9], $v[10]);
    }
}

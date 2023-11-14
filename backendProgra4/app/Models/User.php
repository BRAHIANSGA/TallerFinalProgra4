<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // Atributos asignables masivamente
    protected $fillable = [
        'name',
        'email',
        'password',
        'type_user_id', // Asegúrate de agregar esta línea
    ];

    // Atributos ocultos para la serialización
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Atributos con tipos de datos específicos
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Relación con TypeUser
    public function typeUser()
    {
        return $this->belongsTo(TypeUser::class, 'type_user_id');
    }

}

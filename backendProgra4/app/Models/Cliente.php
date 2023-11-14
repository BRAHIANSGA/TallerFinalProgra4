<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; // Importa SoftDeletes si estás usando eliminación suave

class Cliente extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'clientes';

    protected $fillable = [
        'usuario_id',
        'nombre',
        'apellidos',
        'numero_celular',
        'direccion'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'usuario_id');
    }

    public function compras()
    {
        return $this->hasMany(Compra::class, 'cliente_id');
    }

    
}

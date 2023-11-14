<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    use HasFactory;

    protected $table = 'compras';

    protected $fillable = [
        'cliente_id',
        'producto_id',
        'cantidad',
        'precio_unitario',
        'total',
        'fecha_compra',
        'estado',
        'notas'
    ];

    // Define la relación con la tabla de clientes
    public function cliente()
    {
        return $this->belongsTo(Cliente::class, 'cliente_id');
    }

    // Define la relación con la tabla de productos
    public function producto()
    {
        return $this->belongsTo(Producto::class, 'producto_id');
    }

}

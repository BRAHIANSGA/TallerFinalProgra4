<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 

class Producto extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'productos';

    protected $fillable = [
        'nombre',
        'codigo',
        'categoria_id',
        'descripcion',
        'precio',
        'stock',
        'imagen',
        'disponible'
    ];

    // Define la relación con la tabla de categorías
    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }

    // Define la relación con la tabla de compras (si es necesario)
    public function compras()
    {
        return $this->hasMany(Compra::class, 'producto_id');
    }

}

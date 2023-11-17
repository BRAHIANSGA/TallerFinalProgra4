<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller
{
    public function index()
    {
        return response()->json(Producto::all());
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|max:255',
            'codigo' => 'required|unique:productos|max:255',
            'categoria_id' => 'required|exists:categorias,id',
            'descripcion' => 'nullable',
            'precio' => 'required|numeric',
            'stock' => 'required|integer',
            'imagen' => 'nullable|url',
            'disponible' => 'required|boolean'
        ]);

        $producto = Producto::create($validatedData);

        return response()->json($producto, 201);
    }


    public function show($id)
    {
        $producto = Producto::find($id);

        if (!$producto) {
            return response()->json(['message' => 'Producto not found'], 404);
        }

        return response()->json($producto);
    }


    public function update(Request $request, $id)
    {
        $producto = Producto::find($id);

        if (!$producto) {
            return response()->json(['message' => 'Producto not found'], 404);
        }

        $validatedData = $request->validate([
            'nombre' => 'sometimes|required|max:255',
            'codigo' => 'sometimes|required|unique:productos,codigo,' . $id,
            'categoria_id' => 'sometimes|exists:categorias,id',
            'descripcion' => 'nullable',
            'precio' => 'sometimes|numeric',
            'stock' => 'sometimes|integer',
            'imagen' => 'nullable|url',
            'disponible' => 'sometimes|boolean'
        ]);

        $producto->update($validatedData);

        return response()->json($producto);
    }
    public function actualizarStock(Request $request, $productoId)
{
    $producto = Producto::find($productoId);
    if (!$producto) {
        return response()->json(['message' => 'Producto no encontrado'], 404);
    }

    $cantidad = $request->input('cantidad');
    $producto->stock -= $cantidad; 
    $producto->save();

    return response()->json($producto);
}


    public function destroy($id)
    {
        $producto = Producto::find($id);

        if (!$producto) {
            return response()->json(['message' => 'Producto not found'], 404);
        }

        $producto->delete();

        return response()->json(['message' => 'Producto deleted']);
    }

}

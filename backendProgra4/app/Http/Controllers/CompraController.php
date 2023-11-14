<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Compra;

class CompraController extends Controller
{
    public function index()
    {
        return response()->json(Compra::all());
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'producto_id' => 'required|exists:productos,id',
            'cantidad' => 'required|integer|min:1',
            'precio_unitario' => 'required|numeric',
            'total' => 'required|numeric',
            'fecha_compra' => 'sometimes|date',
            'estado' => 'sometimes|max:255',
            'notas' => 'nullable'
        ]);

        $compra = Compra::create($validatedData);

        return response()->json($compra, 201);
    }


    public function show($id)
    {
        $compra = Compra::find($id);

        if (!$compra) {
            return response()->json(['message' => 'Compra not found'], 404);
        }

        return response()->json($compra);
    }


    public function update(Request $request, $id)
    {
        $compra = Compra::find($id);

        if (!$compra) {
            return response()->json(['message' => 'Compra not found'], 404);
        }

        $validatedData = $request->validate([
            'cliente_id' => 'sometimes|exists:clientes,id',
            'producto_id' => 'sometimes|exists:productos,id',
            'cantidad' => 'sometimes|integer|min:1',
            'precio_unitario' => 'sometimes|numeric',
            'total' => 'sometimes|numeric',
            'fecha_compra' => 'sometimes|date',
            'estado' => 'sometimes|max:255',
            'notas' => 'nullable'
        ]);

        $compra->update($validatedData);

        return response()->json($compra);
    }


    public function destroy($id)
    {
        $compra = Compra::find($id);

        if (!$compra) {
            return response()->json(['message' => 'Compra not found'], 404);
        }

        $compra->delete();

        return response()->json(['message' => 'Compra deleted']);
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function index()
    {
        return response()->json(Categoria::all());
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|max:255',
            'descripcion' => 'nullable'
        ]);

        $categoria = Categoria::create($validatedData);

        return response()->json($categoria, 201);
    }


    public function show($id)
    {
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoria not found'], 404);
        }

        return response()->json($categoria);
    }


    public function update(Request $request, $id)
    {
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoria not found'], 404);
        }

        $validatedData = $request->validate([
            'nombre' => 'sometimes|required|max:255',
            'descripcion' => 'nullable'
        ]);

        $categoria->update($validatedData);

        return response()->json($categoria);
    }


    public function destroy($id)
    {
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoria not found'], 404);
        }

        $categoria->delete();

        return response()->json(['message' => 'Categoria deleted']);
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    public function index()
    {
        return response()->json(Cliente::all());
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'usuario_id' => 'required|exists:users,id',
            'cedula' => 'required|max:255',
            'nombre' => 'required|max:255',
            'apellidos' => 'required|max:255',
            'numero_celular' => 'required|max:255',
            'direccion' => 'required'
        ]);

        $cliente = Cliente::create($validatedData);

        return response()->json($cliente, 201);
    }


    public function show($id)
    {
        $cliente = Cliente::find($id);

        if (!$cliente) {
            return response()->json(['message' => 'Cliente not found'], 404);
        }

        return response()->json($cliente);
    }
    public function buscarPorUsuarioId($userId)
    {
        $cliente = Cliente::where('usuario_id', $userId)->first();

        if (!$cliente) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }

        return response()->json($cliente);
    }



    public function update(Request $request, $id)
    {
        $cliente = Cliente::find($id);

        if (!$cliente) {
            return response()->json(['message' => 'Cliente not found'], 404);
        }

        $validatedData = $request->validate([
            'usuario_id' => 'sometimes|exists:users,id',
            'cedula' => 'required|max:255',
            'nombre' => 'sometimes|required|max:255',
            'apellidos' => 'sometimes|required|max:255',
            'numero_celular' => 'sometimes|required|max:255',
            'direccion' => 'sometimes|required'
        ]);

        $cliente->update($validatedData);

        return response()->json($cliente);
    }


    public function destroy($id)
    {
        $cliente = Cliente::find($id);

        if (!$cliente) {
            return response()->json(['message' => 'Cliente not found'], 404);
        }

        $cliente->delete();

        return response()->json(['message' => 'Cliente deleted']);
    }

}

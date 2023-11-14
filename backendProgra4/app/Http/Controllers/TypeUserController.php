<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeUser;
class TypeUserController extends Controller
{
    public function index()
    {
        $types = TypeUser::all();
        return response()->json($types);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:type_user|max:255'
        ]);

        $type = TypeUser::create($validatedData);

        return response()->json($type, 201);
    }


    public function show($id)
    {
        $type = TypeUser::find($id);

        if (!$type) {
            return response()->json(['message' => 'TypeUser not found'], 404);
        }

        return response()->json($type);
    }


    public function update(Request $request, $id)
    {
        $type = TypeUser::find($id);

        if (!$type) {
            return response()->json(['message' => 'TypeUser not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|max:255'
        ]);

        $type->update($validatedData);

        return response()->json($type);
    }


    public function destroy($id)
    {
        $type = TypeUser::find($id);

        if (!$type) {
            return response()->json(['message' => 'TypeUser not found'], 404);
        }

        $type->delete();

        return response()->json(['message' => 'TypeUser deleted']);
    }

}

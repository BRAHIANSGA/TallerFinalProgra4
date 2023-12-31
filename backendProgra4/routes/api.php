<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\CompraController;
use App\Http\Controllers\TypeUserController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('categorias', CategoriaController::class);

Route::apiResource('clientes', ClienteController::class);
Route::get('/clienteUsuarioId/{userId}', [ClienteController::class, 'buscarPorUsuarioId']);



Route::apiResource('productos', ProductoController::class);
Route::post('/productos/actualizarStock/{productoId}', [ProductoController::class, 'actualizarStock']);




Route::apiResource('compras', CompraController::class);
Route::apiResource('typeusers', TypeUserController::class);

Route::apiResource('users', UserController::class);
Route::post('/login', [UserController::class, 'login']);
Route::group(['middleware' => ['cors']], function () {
});



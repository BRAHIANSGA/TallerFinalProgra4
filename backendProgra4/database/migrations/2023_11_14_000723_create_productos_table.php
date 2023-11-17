<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('codigo')->unique();
            $table->foreignId('categoria_id')->constrained('categorias')->onDelete('cascade')->nullable();
            $table->text('descripcion')->nullable();
            $table->decimal('precio', 8, 2); 
            $table->integer('stock');
            $table->string('imagen')->nullable();
            $table->boolean('disponible')->default(true); 
            $table->timestamps(); 
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('brand_id')->nullable();
            $table->integer('category_id')->nullable();
            $table->string('title');
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->text('composition')->nullable();
            $table->integer('price')->nullable();
            $table->integer('wholesale_price')->nullable();
            $table->string('weight')->nullable();
            $table->string('kcal')->nullable();
            $table->string('fat')->nullable();
            $table->string('protein')->nullable();
            $table->string('carbohydrate')->nullable();
            $table->integer('status')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

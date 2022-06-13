<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_ingredients', function (Blueprint $table) {
            $table->id();
            $table->integer('purchase_id')->unsigned()->nullable()->index();
            $table->integer('ingredient_id')->unsigned()->nullable()->index();
            $table->integer('left');
            $table->integer('total');
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
        Schema::dropIfExists('purchase_ingredients');
    }
}

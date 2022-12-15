<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSelectIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('select_ingredients', function (Blueprint $table) {
            $table->unsignedInteger('select_id');
            $table->unsignedInteger('ingredient_id');
            $table->integer('analog_id')->nullable();
            $table->boolean('is_editable')->default(false);
            $table->boolean('is_visible')->default(true);
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
        Schema::dropIfExists('select_ingredients');
    }
}

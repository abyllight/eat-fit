<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDishesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dishes', function (Blueprint $table) {
            $table->id();
            $table->string('iiko_id')->nullable();
            $table->string('iiko_name')->nullable();
            $table->string('code')->nullable();
            $table->string('name')->nullable();
            $table->integer('time')->default(0);
            $table->integer('ration_id')->default(0);
            $table->integer('department_id')->default(0);
            $table->integer('cuisine_id')->default(0);
            $table->longText('description')->nullable();
            $table->string('file')->nullable();
            $table->boolean('is_custom')->default(false);
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
        Schema::dropIfExists('dishes');
    }
}

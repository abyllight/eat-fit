<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('iiko_id');
            $table->string('code')->nullable();
            $table->integer('department_id')->nullable();
            $table->boolean('is_extra')->default(false);
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
        Schema::dropIfExists('rations');
    }
}

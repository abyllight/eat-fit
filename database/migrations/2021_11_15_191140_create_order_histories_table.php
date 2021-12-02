<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_histories', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id');
            $table->smallInteger('type')->nullable();
            $table->smallInteger('size')->nullable();
            $table->integer('day')->nullable();
            $table->string('time1')->nullable();
            $table->string('time2')->nullable();
            $table->string('yaddress1')->nullable();
            $table->string('yaddress2')->nullable();
            $table->longText('diet')->nullable();
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
        Schema::dropIfExists('order_histories');
    }
}

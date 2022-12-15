<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('amo_id')->unique()->nullable();
            $table->integer('city_id')->default(1);
            $table->string('name')->nullable();
            $table->integer('type')->nullable();
            $table->integer('size')->nullable();
            $table->string('phone')->nullable();
            $table->string('whatsapp')->nullable();
            $table->integer('day')->nullable();
            $table->integer('course')->nullable();
            $table->integer('interval')->default(0);
            $table->integer('courier_position')->nullable();
            $table->integer('position')->nullable();
            $table->longText('logistic')->nullable();
            $table->string('time1')->nullable();
            $table->string('time2')->nullable();
            $table->string('yaddress1')->nullable();
            $table->string('yaddress2')->nullable();
            $table->longText('address1')->nullable();
            $table->longText('address2')->nullable();
            $table->string('time1_old')->nullable();
            $table->string('time2_old')->nullable();
            $table->string('yaddress1_old')->nullable();
            $table->string('yaddress2_old')->nullable();
            $table->string('lat1')->nullable();
            $table->string('lng1')->nullable();
            $table->string('lat2')->nullable();
            $table->string('lng2')->nullable();
            $table->longText('diet')->nullable();
            $table->longText('diet_old')->nullable();
            $table->boolean('has_bag')->default(false);
            $table->integer('courier1_id')->nullable();
            $table->integer('courier2_id')->nullable();
            $table->boolean('is_active')->default(false);
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
        Schema::dropIfExists('orders');
    }
}

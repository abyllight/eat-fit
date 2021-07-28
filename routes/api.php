<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourierController;
use App\Http\Controllers\CuisineController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\OrderController;
use App\Http\Resources\CourierCollection;
use App\Http\Resources\CuisineCollection;
use App\Models\Courier;
use App\Models\Cuisine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [LoginController::class, 'login']);

Route::get('/couriers', function () {
    return CourierCollection::collection(Courier::all());
});

Route::post('/couriers', [CourierController::class, 'store']);
Route::post('/couriers/{id}', [CourierController::class, 'update']);
Route::patch('/couriers/{id}', [CourierController::class, 'updatePassword']);
Route::delete('/couriers/{id}', [CourierController::class, 'delete']);

Route::get('/orders', [OrderController::class, 'index']);

Route::get('/map/geocode', [MapController::class, 'geocode']);
Route::get('/map/interval', [MapController::class, 'setInterval']);
Route::post('/map/filter', [MapController::class, 'filter']);
Route::post('/map/courier', [MapController::class, 'setCourier']);

Route::post('/list', [OrderController::class, 'orderList']);
Route::get('/list/data', [OrderController::class, 'listData']);
Route::get('/list/export', [OrderController::class, 'export']);

Route::get('/amo/leads', [OrderController::class, 'getOrders']);

Route::get('/cuisines', function () {
    return CuisineCollection::collection(Cuisine::all());
});
Route::get('/iiko/cuisines', [CuisineController::class, 'fetchCuisines']);

Route::get('/webhook', [AdminController::class, 'webhook']);



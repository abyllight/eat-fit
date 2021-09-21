<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourierController;
use App\Http\Controllers\CuisineController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PromocodeController;
use App\Http\Resources\CuisineCollection;
use App\Http\Resources\DishCollection;
use App\Models\Cuisine;
use App\Models\Dish;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [AuthController::class, 'profile']);

    Route::get('/couriers', [CourierController::class, 'index']);
    Route::post('/couriers', [CourierController::class, 'store']);
    Route::post('/couriers/{id}', [CourierController::class, 'update']);
    Route::patch('/couriers/{id}', [CourierController::class, 'updatePassword']);
    Route::delete('/couriers/{id}', [CourierController::class, 'delete']);

    Route::get('/promocodes', [PromocodeController::class, 'index']);
    Route::post('/promocodes', [PromocodeController::class, 'store']);
    Route::post('/promocodes/{id}', [PromocodeController::class, 'update']);
    Route::patch('/promocodes/activate/{id}', [PromocodeController::class, 'activate']);
    Route::delete('/promocodes/{id}', [PromocodeController::class, 'destroy']);
});

Route::post('/promocode/{promocode}', [PromocodeController::class, 'check']);

Route::get('/orders', [OrderController::class, 'index']);
Route::get('/week/get', [AdminController::class, 'getWeek']);
Route::post('/week/set', [AdminController::class, 'setWeek']);

Route::get('/map/geocode', [MapController::class, 'geocode']);
Route::get('/map/interval', [MapController::class, 'setInterval']);
Route::post('/map/filter', [MapController::class, 'filter']);
Route::post('/map/courier', [MapController::class, 'setCourier']);

Route::post('/list', [OrderController::class, 'orderList']);
Route::get('/list/data', [OrderController::class, 'listData']);
Route::get('/list/export', [OrderController::class, 'export']);

Route::get('/amo/leads', [OrderController::class, 'getOrders']);

Route::get('/cuisines', function () {
    return CuisineCollection::collection(Cuisine::orderBy('name')->get());
});
Route::get('/custom_dishes', function () {
    return DishCollection::collection(Dish::where('is_custom', true)->orderBy('name')->get());
});

Route::post('/cuisine/set', [CuisineController::class, 'setCuisine']);
Route::get('/iiko/cuisines', [CuisineController::class, 'fetchCuisines']);
Route::get('/iiko/dishes', [CuisineController::class, 'fetchDishes']);
Route::post('/iiko/ingredients', [CuisineController::class, 'fetchIngredients']);

Route::post('/dish/update', [CuisineController::class, 'updateDish']);
Route::post('/dish/create', [CuisineController::class, 'createDish']);
Route::post('/dish/delete', [CuisineController::class, 'deleteDish']);

Route::get('/ingredients', [IngredientController::class, 'index']);
Route::patch('/ingredient', [IngredientController::class, 'update']);
Route::post('/ingredient', [CuisineController::class, 'create']);
Route::delete('/ingredient', [CuisineController::class, 'delete']);

Route::post('/blacklist', [OrderController::class, 'setBlacklist']);

Route::get('/webhook', [AdminController::class, 'webhook']);



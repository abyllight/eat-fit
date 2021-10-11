<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourierController;
use App\Http\Controllers\CuisineController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PromocodeController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'profile']);

    Route::get('/my-orders', [CourierController::class, 'index']);
    Route::post('/my-orders/notify', [CourierController::class, 'notify']);
    Route::post('/my-orders/report', [CourierController::class, 'report']);

    Route::resource('roles', RoleController::class);
    Route::resource('users', UserController::class);
    Route::get('/couriers', [UserController::class, 'getCouriers']);

    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/amo/leads', [OrderController::class, 'getOrders']);
    Route::post('/list', [OrderController::class, 'orderList']);
    Route::get('/list/data', [OrderController::class, 'listData']);
    Route::get('/list/export', [OrderController::class, 'export']);
    Route::post('/blacklist', [OrderController::class, 'setBlacklist']);

    Route::get('/week/get', [AdminController::class, 'getWeek']);
    Route::post('/week/set', [AdminController::class, 'setWeek']);

    Route::get('/map/geocode', [MapController::class, 'geocode']);
    Route::get('/map/interval', [MapController::class, 'setInterval']);
    Route::post('/map/filter', [MapController::class, 'filter']);
    Route::post('/map/courier', [MapController::class, 'setCourier']);

    Route::get('/reports', [ReportController::class, 'index']);
    Route::post('/reports/filter', [ReportController::class, 'filter']);
    Route::get('/reports/export/{date}', [ReportController::class, 'export']);

    Route::get('/cuisines', function () {
        return CuisineCollection::collection(Cuisine::orderBy('name')->get());
    });
    Route::post('/cuisine/set', [CuisineController::class, 'setCuisine']);
    Route::get('/iiko/cuisines', [CuisineController::class, 'fetchCuisines']);
    Route::get('/iiko/dishes', [CuisineController::class, 'fetchDishes']);
    Route::post('/iiko/ingredients', [CuisineController::class, 'fetchIngredients']);

    Route::get('/custom_dishes', function () {
        return DishCollection::collection(Dish::where('is_custom', true)->orderBy('name')->get());
    });
    Route::post('/dish/update', [CuisineController::class, 'updateDish']);
    Route::post('/dish/create', [CuisineController::class, 'createDish']);
    Route::post('/dish/delete', [CuisineController::class, 'deleteDish']);

    Route::get('/ingredients', [IngredientController::class, 'index']);
    Route::patch('/ingredient', [IngredientController::class, 'update']);
    Route::post('/ingredient', [CuisineController::class, 'create']);
    Route::delete('/ingredient', [CuisineController::class, 'delete']);

    Route::get('/promocodes', [PromocodeController::class, 'index']);
    Route::post('/promocodes', [PromocodeController::class, 'store']);
    Route::post('/promocodes/{id}', [PromocodeController::class, 'update']);
    Route::patch('/promocodes/activate/{id}', [PromocodeController::class, 'activate']);
    Route::delete('/promocodes/{id}', [PromocodeController::class, 'destroy']);
});

Route::get('/promocode/{promocode}', [PromocodeController::class, 'check']);

Route::get('/webhook', [AdminController::class, 'webhook']);



<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourierController;
use App\Http\Controllers\CuisineController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DishController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PromocodeController;
use App\Http\Controllers\RationController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SelectController;
use App\Http\Controllers\UserController;
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
    Route::get('/orders/select-orders', [OrderController::class, 'getSelect']);
    Route::get('/orders/select', [OrderController::class, 'getNbSelect']);
    Route::get('/orders/lite', [OrderController::class, 'getNbLite']);
    Route::get('/orders/detox', [OrderController::class, 'getNbDetox']);
    Route::get('/orders/go', [OrderController::class, 'getNbGo']);
    Route::get('/order/blacklist/{id}', [OrderController::class, 'getBlacklist']);
    Route::get('/order/wishlist/{id}', [OrderController::class, 'getWishlist']);
    Route::get('/orders/{order}/previous/select/ration/{ration}', [OrderController::class, 'getPreviousOrderSelectByRation']);
    Route::get('/orders/{order}/today/select/ration/{ration}', [OrderController::class, 'getOrderSelectByRation']);
    Route::get('/amo/leads', [OrderController::class, 'getOrders']);
    Route::post('/list', [OrderController::class, 'orderList']);
    Route::get('/list/data', [OrderController::class, 'listData']);
    Route::get('/list/export', [OrderController::class, 'export']);
    Route::post('/blacklist', [OrderController::class, 'addToBlacklist']);
    Route::post('/wishlist', [OrderController::class, 'addToWishlist']);
    Route::post('/wishlist/remove', [OrderController::class, 'removeTag']);

    Route::get('/week/get', [AdminController::class, 'getWeek']);
    Route::post('/week/set', [AdminController::class, 'setWeek']);

    Route::get('/map/geocode', [MapController::class, 'geocode']);
    Route::get('/map/interval', [MapController::class, 'setInterval']);
    Route::post('/map/filter', [MapController::class, 'filter']);
    Route::post('/map/courier', [MapController::class, 'setCourier']);

    Route::get('/reports', [ReportController::class, 'index']);
    Route::post('/reports/filter', [ReportController::class, 'filter']);
    Route::get('/reports/export/{date}', [ReportController::class, 'export']);

    Route::get('/cuisines', [CuisineController::class, 'index']);
    Route::get('/cuisine/duty', [CuisineController::class, 'getDutyCuisine']);
    Route::post('/cuisine/duty/set', [CuisineController::class, 'setCuisine']);
    Route::get('/cuisines/iiko', [CuisineController::class, 'fetchCuisines']);

    Route::resource('dishes', DishController::class)->except(['create', 'show', 'edit']);
    Route::get('dishes/ration/{id}', [DishController::class, 'getDishByRation']);
    Route::get('dishes/iiko', [DishController::class, 'fetchDishes']);
    Route::get('dishes/cuisine/{id}', [DishController::class, 'getDishesByCuisine']);

    Route::get('departments', [DepartmentController::class, 'index']);

    Route::post('select/{select}/dish/{dish}', [SelectController::class, 'setDishToSelect']);
    Route::post('select/remove/ingredient', [SelectController::class, 'removeIngredientFromSelect']);
    Route::post('select/add/ingredient', [SelectController::class, 'addIngredientFromSelect']);
    Route::post('select/replace/ingredient', [SelectController::class, 'replaceIngredientFromSelect']);
    Route::post('select/return/ingredient', [SelectController::class, 'returnIngredientFromSelect']);

    Route::resource('/categories', CategoryController::class)->except(['create', 'show', 'edit']);
    Route::get('/categories/ingredient/{id}', [CategoryController::class, 'getCategoriesByIngredient']);

    Route::resource('/ingredients', IngredientController::class)->except(['create', 'show', 'edit']);
    Route::get('/ingredients/iiko/{id}', [IngredientController::class, 'fetchIngredients']);
    Route::post('/ingredient/set/analog', [IngredientController::class, 'setAnalog']);


    Route::resource('rations', RationController::class)->except(['create', 'show', 'edit']);
    Route::get('/rations/required/{id}', [RationController::class, 'getRequired']);

    Route::get('/promocodes', [PromocodeController::class, 'index']);
    Route::post('/promocodes', [PromocodeController::class, 'store']);
    Route::post('/promocodes/{id}', [PromocodeController::class, 'update']);
    Route::patch('/promocodes/activate/{id}', [PromocodeController::class, 'activate']);
    Route::delete('/promocodes/{id}', [PromocodeController::class, 'destroy']);
});

Route::get('/promocode/{promocode}', [PromocodeController::class, 'check']);

Route::get('/webhook', [AdminController::class, 'webhook']);



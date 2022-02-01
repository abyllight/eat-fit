<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CourierController;
use App\Http\Controllers\CuisineController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DishController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\ListController;
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
Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'profile']);

    Route::get('/my-orders', [CourierController::class, 'index']);
    Route::post('/my-orders/notify', [CourierController::class, 'notify']);
    Route::post('/my-orders/report', [CourierController::class, 'report']);

    Route::get('/cities', [CityController::class, 'index']);

    Route::resource('roles', RoleController::class)->except(['create', 'show', 'edit']);

    Route::resource('users', UserController::class)->except(['create', 'show', 'edit']);
    Route::get('/couriers', [UserController::class, 'getCouriers']);

    Route::resource('/orders', OrderController::class)->only(['index', 'store', 'update']);
    Route::get('/order/{id}', [OrderController::class, 'show']);
    Route::post('/order/{id}/deactivate', [OrderController::class, 'deactivate']);
    Route::get('/orders/eat-fit', [OrderController::class, 'getEatFit']);
    Route::get('/orders/stat', [OrderController::class, 'getOrderStat']);

    Route::get('/orders/select', [OrderController::class, 'getSelect']);
    Route::get('/orders/{order}/previous/select/ration/{ration}', [OrderController::class, 'getPreviousOrderSelectByRation']);
    Route::get('/orders/{order}/today/select/ration/{ration}', [OrderController::class, 'getOrderSelectByRation']);

    Route::get('/list/stat', [ListController::class, 'getListStat']);
    Route::get('/list/export', [ListController::class, 'export']);
    Route::post('/list/sort', [ListController::class, 'sortList']);

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
    Route::post('/cuisine/duty', [CuisineController::class, 'setCuisine']);
    Route::get('/cuisines/iiko', [CuisineController::class, 'fetchCuisines']);

    Route::resource('dishes', DishController::class)->except(['create', 'show', 'edit']);
    Route::get('dishes/ration/{id}', [DishController::class, 'getDishesByRation']);
    Route::get('dishes/rations/', [DishController::class, 'getDishesByRations']);
    Route::get('dishes/iiko', [DishController::class, 'fetchDishes']);
    Route::get('dishes/cuisine/{id}', [DishController::class, 'getDishesByCuisine']);

    Route::get('departments', [DepartmentController::class, 'index']);

    Route::post('select/add/dish', [SelectController::class, 'setDishToSelect']);
    Route::post('select/add/details', [SelectController::class, 'saveSelectDetails']);
    Route::post('select/add/ingredient', [SelectController::class, 'addIngredientFromSelect']);
    Route::post('select/remove/ingredient', [SelectController::class, 'removeIngredientFromSelect']);
    Route::post('select/replace/ingredient', [SelectController::class, 'replaceIngredientFromSelect']);
    Route::post('select/return/ingredient', [SelectController::class, 'returnIngredientFromSelect']);
    Route::post('select/activate-deactivate', [SelectController::class, 'activateDeactivate']);
    Route::post('select/add/extra', [SelectController::class, 'addExtraIngredient']);
    Route::post('select/remove/extra', [SelectController::class, 'removeExtraIngredient']);
    Route::post('select/show/ingredient', [SelectController::class, 'showIngredient']);
    Route::post('select/hide/ingredient', [SelectController::class, 'hideIngredient']);
    Route::get('/select/export', [SelectController::class, 'export']);
    Route::get('/select/order/{id}', [SelectController::class, 'getSelectByOrder']);

    Route::resource('/categories', CategoryController::class)->except(['create', 'show', 'edit']);
    Route::get('/categories/ingredient/{id}', [CategoryController::class, 'getCategoriesByIngredient']);

    Route::resource('/ingredients', IngredientController::class)->except(['create', 'show', 'edit']);
    Route::get('/ingredients/iiko/{id}', [IngredientController::class, 'fetchIngredients']);
    Route::post('/ingredient/set/analog', [IngredientController::class, 'setAnalog']);


    Route::resource('rations', RationController::class)->except(['create', 'show', 'edit']);
    Route::get('/rations/required/{id}', [RationController::class, 'getRequired']);
    Route::get('/rations/required', [RationController::class, 'getRequiredRations']);

    Route::resource('promocodes', PromocodeController::class)->except(['create', 'show', 'edit']);
});

Route::get('/promocode/{promocode}', [PromocodeController::class, 'check']);

Route::get('/webhook', [AdminController::class, 'webhook']);



<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\BuilderCategoryController;
use App\Http\Controllers\BuilderMixController;
use App\Http\Controllers\BuilderValueController;
use App\Http\Controllers\CardGroupController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CartItemController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CourierController;
use App\Http\Controllers\CuisineController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DishController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\ListController;
use App\Http\Controllers\ManagementController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PromocodeController;
use App\Http\Controllers\ProviderCategoryController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\RationController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SelectController;
use App\Http\Controllers\ShopOrderController;
use App\Http\Controllers\StatController;
use App\Http\Controllers\TableWareController;
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

    Route::get('/management', [ManagementController::class, 'index']);
    Route::post('/management/plus-one', [ManagementController::class, 'plusOneMain']);
    Route::post('/management/plus-one-saturday', [ManagementController::class, 'plusOneSaturday']);
    Route::post('/management/trial', [ManagementController::class, 'shiftTrial']);
    Route::post('/management/work', [ManagementController::class, 'shiftWork']);

    Route::get('/cities', [CityController::class, 'index']);

    Route::resource('roles', RoleController::class)->except(['create', 'show', 'edit']);
    Route::resource('providers', ProviderController::class)->except(['create', 'show', 'edit']);
    Route::resource('p-categories', ProviderCategoryController::class)->except(['create', 'show', 'edit']);

    Route::resource('users', UserController::class)->except(['create', 'show', 'edit']);
    Route::get('/couriers', [UserController::class, 'getCouriers']);

    Route::resource('/orders', OrderController::class)->only(['index', 'store', 'update']);
    Route::get('/order/{id}', [OrderController::class, 'show']);
    Route::post('/order/{id}/deactivate', [OrderController::class, 'deactivate']);
    Route::get('/orders/eat-fit', [OrderController::class, 'getEatFit']);
    Route::get('/orders/stat', [OrderController::class, 'getOrderStat']);

    Route::get('/orders/select', [OrderController::class, 'getSelect']);
    Route::get('/orders/lite', [OrderController::class, 'getLite']);
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
    Route::get('/cuisines/dishes', [CuisineController::class, 'getCuisineDishesByRation']);
    Route::get('/cuisines/{id}', [CuisineController::class, 'show']);
    Route::post('/cuisine/{id}/file', [CuisineController::class, 'saveFile']);
    Route::get('/cuisine/duty', [CuisineController::class, 'getDutyCuisine']);
    Route::post('/cuisine/duty', [CuisineController::class, 'setCuisine']);
    Route::post('/cuisine/purchase', [CuisineController::class, 'setPurchase']);
    Route::get('/cuisine/iiko', [CuisineController::class, 'fetchCuisinesFromIiko']);
    Route::get('/cuisines/{id}/dishes', [CuisineController::class, 'getDishesByCuisineId']);

    Route::resource('dishes', DishController::class)->except(['create', 'edit']);
    Route::get('dishes/ration/{id}', [DishController::class, 'getDishesByRation']);
    Route::get('dishes/rations/', [DishController::class, 'getDishesByRations']);
    Route::get('dishes/iiko', [DishController::class, 'fetchDishes']);
    Route::get('dishes/cuisine/{id}', [DishController::class, 'getDishesByCuisine']);
    Route::get('dishes/iiko/cuisine/{id}', [DishController::class, 'fetchDishesByCuisineId']);

    Route::get('departments', [DepartmentController::class, 'index']);

    Route::resource('tableware', TableWareController::class)->only(['index', 'store', 'destroy']);
    Route::post('tableware/{id}', [TableWareController::class, 'update']);

    Route::get('/select/all', [SelectController::class, 'index']);
    Route::get('/select/message/{id}', [SelectController::class, 'getMessage']);
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
    Route::get('/select/generate-code', [SelectController::class, 'generateCode']);
    Route::post('select/wish', [SelectController::class, 'addRemoveWish']);
    Route::get('/select/order/{id}', [SelectController::class, 'getSelectByOrder']);
    Route::get('/selects/order/{id}', [SelectController::class, 'getSelectsByOrder']);
    Route::post('/select/reset', [SelectController::class, 'resetResult']);
    Route::post('/select/extra', [SelectController::class, 'addExtraSelect']);
    Route::post('/select/tableware', [SelectController::class, 'setTableware']);
    Route::get('/select/rations', [SelectController::class, 'selectRations']);
    Route::get('/select/stickers/{id}', [SelectController::class, 'getSelectStickersByRation']);
    Route::get('/select/{id}', [SelectController::class, 'getSelectById']);
    Route::post('/select/{id}/done', [SelectController::class, 'setDone']);

    Route::resource('/categories', CategoryController::class)->except(['create', 'show', 'edit']);
    Route::get('/categories/ingredient/{id}', [CategoryController::class, 'getCategoriesByIngredient']);

    Route::resource('/ingredients', IngredientController::class)->except(['create', 'show', 'edit']);
    Route::get('/ingredients/iiko/{id}', [IngredientController::class, 'fetchIngredients']);
    Route::post('/ingredient/set/analog', [IngredientController::class, 'setAnalog']);

    Route::get('/cards', [CardGroupController::class, 'index']);
    Route::post('/cards', [CardGroupController::class, 'store']);
    Route::post('/cards-dep', [CardGroupController::class, 'changeDepartment']);
    Route::post('/cards/{id}', [CardGroupController::class, 'destroy']);
    Route::post('/cards-sort', [CardGroupController::class, 'sortCards']);

    Route::resource('rations', RationController::class)->except(['create', 'show', 'edit']);

    Route::resource('promocodes', PromocodeController::class)->except(['create', 'show', 'edit']);
    Route::post('/promocode/{promocode}/activate', [PromocodeController::class, 'activate']);
    Route::resource('products', ProductController::class)->except(['create', 'show', 'edit']);
    Route::resource('product-categories', ProductCategoryController::class)->except(['create', 'show', 'edit']);
    Route::resource('brands', BrandController::class)->except(['create', 'show', 'edit']);
    Route::resource('builder-categories', BuilderCategoryController::class)->except(['create', 'show', 'edit']);
    Route::resource('builder-values', BuilderValueController::class)->except(['create', 'show', 'edit']);
    Route::resource('builder-mix', BuilderMixController::class)->except(['create', 'show', 'edit']);

    Route::get('/customer-orders', [ShopOrderController::class, 'index']);

    Route::get('/purchase-list-kitchen', [PurchaseController::class, 'index']);
    Route::get('/purchase-list-kitchen/calculate', [PurchaseController::class, 'calculateIngredients']);
    Route::post('/purchase-list-kitchen/left', [PurchaseController::class, 'enterLeftNumber']);
    Route::post('/purchase-list-kitchen/done', [PurchaseController::class, 'done']);
    Route::post('/purchase-list-kitchen/set/ingredients', [PurchaseController::class, 'setIngredients']);
    Route::post('/purchase-list-kitchen/remove/ingredient', [PurchaseController::class, 'removeIngredient']);

    Route::get('/marat/stat', [StatController::class, 'index']);
});

Route::get('/promocode/{promocode}', [PromocodeController::class, 'check']);

Route::get('/customer/{id}', [CustomerController::class, 'getCustomerById']);
Route::get('/cart/{id}', [CartController::class, 'getCartById']);
Route::post('/cart/{id}', [CartController::class, 'destroy']);
Route::post('/customer', [CustomerController::class, 'store']);
Route::post('/customer/{id}', [CustomerController::class, 'update']);

Route::post('/cart-item/add', [CartItemController::class, 'addItem']);
Route::post('/cart-item/remove', [CartItemController::class, 'destroy']);
Route::post('/cart-item/increment', [CartItemController::class, 'increment']);
Route::post('/cart-item/decrement', [CartItemController::class, 'decrement']);

Route::post('/shop', [ShopOrderController::class, 'placeOrder']);

Route::get('/products-all', [ProductController::class, 'getProducts']);
Route::get('/product/{id}', [ProductController::class, 'getProduct']);

Route::get('/brands-all', [BrandController::class, 'getBrands']);
Route::get('/brand/{id}', [BrandController::class, 'getBrand']);

Route::get('/optimize', [HelperController::class, 'optimize']);
Route::get('/storage', [HelperController::class, 'storage']);

Route::get('/webhook', [AdminController::class, 'webhook']);



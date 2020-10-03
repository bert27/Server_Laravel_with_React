<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\carrotlab;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('welcome');
});

Route::put('/Prueba', function() {

return "Objeto";
});

Route::get('/Prueba2', function()
{
    return ["Hola Mundo"];
});

Route::get('/Answer1', 'App\Http\Controllers\React@GetReact');
Route::put('/Answer2/{number}', 'App\Http\Controllers\React@PutReact');
Route::put('/Answer3/{number}', 'App\Http\Controllers\React@PutReact2');

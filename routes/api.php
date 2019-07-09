<?php

use Illuminate\Http\Request;

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


Route::post('/register', 'Auth\RegisterController@register')->name('register');
Route::post('/login', 'Auth\LoginController@login')->name('login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/user', function () {
  return Auth::user();
})->name('user');

Route::post(
  '/password-forget/email',
  'Auth\ForgotPasswordController@sendResetLinkEmail'
)
  ->name('password_forget.email');

Route::post(
  '/password-forget/reset',
  'Auth\ResetPasswordController@reset'
)
  ->name('password_forget.reset');

Route::get('/reflesh-token', function (Illuminate\Http\Request $request) {
  $request->session()->regenerateToken();

  return response()->json();
})->name('reflesh_token');

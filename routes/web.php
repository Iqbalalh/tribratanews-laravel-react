<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;

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

Route::get('/', [NewsController::class, 'index']);

Route::get('/berita/{id}', [NewsController::class, 'berita']);

Route::get('/kategori/hukum', [NewsController::class, 'kategoriHukum'])->name('kategori.hukum');

Route::get('/kategori/sosial-budaya', [NewsController::class, 'kategoriSosialBudaya'])->name('kategori.sosial-budaya');

Route::get('/kategori/keamanan', [NewsController::class, 'kategoriKeamanan'])->name('kategori.keamanan');

Route::get('/kategori/kesehatan', [NewsController::class, 'kategoriKesehatan'])->name('kategori.kesehatan');

Route::get('/kategori/olahraga', [NewsController::class, 'kategoriOlahraga'])->name('kategori.olahraga');

Route::group(['middleware' => 'auth'], function() {
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');

    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);

    Route::group(['middleware' => 'checkRole:admin'], function() {
        Route::inertia('/admin-dashboard', 'AdminDashboard')->name('admin-dashboard');
        Route::inertia('/admin-posts', 'AdminPosts')->name('admin-posts');
        Route::inertia('/admin-users', 'AdminUsers')->name('admin-users');
        Route::post('/api/create-news', [NewsController::class, 'store']);
        Route::get('/admin-posts', [NewsController::class, 'view'])->name('admin-posts');
        Route::post('/api/update-news/{id}', [NewsController::class, 'edit']);
        Route::post('/api/delete-news/{id}', [NewsController::class, 'destroy']);
        Route::post('/api/update-publish-status/{id}', [NewsController::class, 'updatePublishStatus']);
    });
    Route::group(['middleware' => 'checkRole:editor'], function() {
        Route::inertia('/editor-dashboard', 'EditorDashboard')->name('editor-dashboard');
        Route::inertia('/editor-posts', 'EditorPosts')->name('editor-posts');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

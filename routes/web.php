<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


// Route::get('/admin/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/posts', function () {
    return Inertia::render('Posts');
})->middleware(['auth', 'verified'])->name('posts');

Route::get('/users', function () {
    return Inertia::render('Users');
})->middleware(['auth', 'verified'])->name('users');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

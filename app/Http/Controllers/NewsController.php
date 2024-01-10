<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class NewsController extends Controller
{
    public function index() {
        $headline = News::latest()->take(5)->get();
        return Inertia::render('News', [
            'headline' => $headline,
        ]);
    }
}

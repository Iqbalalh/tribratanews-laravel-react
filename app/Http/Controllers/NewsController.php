<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class NewsController extends Controller
{
    public function index()
    {
        $headline = News::where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        $sport_home = News::where('category', 'Olahraga')
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('News', [
            'headline' => $headline,
            'sport_home' => $sport_home,
        ]);
    }
}

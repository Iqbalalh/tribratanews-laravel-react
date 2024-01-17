<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
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
                        ->where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('News', [
            'headline' => $headline,
            'sport_home' => $sport_home,
        ]);
    }

    public function berita($id) {
        $detail = News::find($id);

        $headline = News::where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('NewsContent', [
            'detail' => $detail,
            'headline' => $headline,
        ]);
    }


    public function kategoriHukum()
    {
        $kategoriHukum = News::where('category', 'Hukum')
                        ->latest()
                        ->where('publish_status', 1)
                        ->paginate(15);

        $headline = News::where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('NewsCategory', [
            'kategoriCategory' => $kategoriHukum,
            'kategori' => 'Hukum',
            'headline' => $headline,
        ]);
    }

    public function kategoriSosialBudaya()
    {
        $kategoriSosialBudaya = News::where('category', 'Sosial Budaya')
                        ->latest()
                        ->where('publish_status', 1)
                        ->paginate(15);

        $headline = News::where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('NewsCategory', [
            'kategoriCategory' => $kategoriSosialBudaya,
            'kategori' => 'Sosial Budaya',
            'headline' => $headline,
        ]);
    }

}

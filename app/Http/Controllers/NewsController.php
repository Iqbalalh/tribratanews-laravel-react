<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use Illuminate\Support\Facades\Storage;

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

        $health_home = News::where('category', 'Kesehatan')
                        ->where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        $culture_home = News::where('category', 'Sosial Budaya')
                        ->where('publish_status', 1)
                        ->latest()
                        ->take(8)
                        ->get();

        $security_home = News::where('category', 'Hukum')
                        ->where('publish_status', 1)
                        ->latest()
                        ->take(10)
                        ->get();

        $law_home = News::where('category', 'Hukum')
                        ->where('publish_status', 1)
                        ->latest()
                        ->take(10)
                        ->get();

        return Inertia::render('News', [
            'headline' => $headline,
            'sport_home' => $sport_home,
            'law_home' => $law_home,
            'security_home' => $security_home,
            'culture_home' => $culture_home,
            'health_home' => $health_home,
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

    public function kategoriKeamanan()
    {
        $kategoriKeamanan = News::where('category', 'Keamanan')
                        ->latest()
                        ->where('publish_status', 1)
                        ->paginate(15);

        $headline = News::where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('NewsCategory', [
            'kategoriCategory' => $kategoriKeamanan,
            'kategori' => 'Keamanan',
            'headline' => $headline,
        ]);
    }

    public function kategoriKesehatan()
    {
        $kategoriKesehatan = News::where('category', 'Kesehatan')
                        ->latest()
                        ->where('publish_status', 1)
                        ->paginate(15);

        $headline = News::where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('NewsCategory', [
            'kategoriCategory' => $kategoriKesehatan,
            'kategori' => 'Kesehatan',
            'headline' => $headline,
        ]);
    }

    public function kategoriOlahraga() {
        $kategoriOlahraga = News::where('category', 'Olahraga')
                        ->latest()
                        ->where('publish_status', 1)
                        ->paginate(15);

        $headline = News::where('publish_status', 1)
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('NewsCategory', [
            'kategoriCategory' => $kategoriOlahraga,
            'kategori' => 'Olahraga',
            'headline' => $headline,
        ]);
    }

    public function store(Request $request)
{
    $request->validate([
        'title' => 'required|string',
        'image' => 'required|image|mimes:jpeg,png,jpg',
        'imageCaption' => 'required|string',
        'content' => 'required|string',
        'category' => 'required|string',
        'publishStatus' => 'required|integer',
    ]);

    $imageName = uniqid().'.'.$request->image->extension();
    $request->image->storeAs('public', $imageName, 'local');

    News::create([
        'title' => $request->title,
        'image' => 'storage/' . $imageName,
        'image_caption' => $request->imageCaption,
        'content' => $request->content,
        'category' => $request->category,
        'publish_status' => $request->publishStatus,
        'author' => auth()->user()->name,
    ]);

    return redirect()->route('admin-dashboard')->with('success', 'News created successfully!');
}


}

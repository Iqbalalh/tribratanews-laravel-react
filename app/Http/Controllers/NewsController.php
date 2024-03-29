<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class NewsController extends Controller
{
    public function index()
    {
        $headline = News::where('publish_status', true)
                        ->latest()
                        ->take(5)
                        ->get();

        $sport_home = News::where('category', 'Olahraga')
                        ->where('publish_status', true)
                        ->latest()
                        ->take(5)
                        ->get();

        $health_home = News::where('category', 'Kesehatan')
                        ->where('publish_status', true)
                        ->latest()
                        ->take(5)
                        ->get();

        $culture_home = News::where('category', 'Sosial Budaya')
                        ->where('publish_status', true)
                        ->latest()
                        ->take(8)
                        ->get();

        $security_home = News::where('category', 'Hukum')
                        ->where('publish_status', true)
                        ->latest()
                        ->take(10)
                        ->get();

        $law_home = News::where('category', 'Hukum')
                        ->where('publish_status', true)
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
        $detail = News::with('author')
                        ->find($id);

        $headline = News::where('publish_status', true)
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
                        ->where('publish_status', true)
                        ->paginate(15);

        $headline = News::where('publish_status', true)
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
                        ->where('publish_status', true)
                        ->paginate(15);

        $headline = News::where('publish_status', true)
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
                        ->where('publish_status', true)
                        ->paginate(15);

        $headline = News::where('publish_status', true)
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
                        ->where('publish_status', true)
                        ->paginate(15);

        $headline = News::where('publish_status', true)
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
                        ->where('publish_status', true)
                        ->paginate(15);

        $headline = News::where('publish_status', true)
                        ->latest()
                        ->take(5)
                        ->get();

        return Inertia::render('NewsCategory', [
            'kategoriCategory' => $kategoriOlahraga,
            'kategori' => 'Olahraga',
            'headline' => $headline,
        ]);
    }

    public function store(Request $request) //create
    {
        try {
            $request->validate([
                'title' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg',
                'imageCaption' => 'required|string',
                'content' => 'required|string',
                'category' => 'required|string',
                'publishStatus' => 'required|string',
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
                'author' => auth()->user()->id,
            ]);

            return redirect()->route('admin-posts');
        }

        catch (\Exception $e)
        {
            return response()->json(['message' => 'Failed to create news', 'error' => $e->getMessage()]);
        }
    }

    public function view() //read
    {
        $adminView = News::with('author')
                        ->latest()
                        ->paginate(15);

        return Inertia::render('AdminPosts', [
            'adminView' => $adminView,
        ]);
    }

    public function editorView() //editor read
    {
        $editorId = auth()->user()->id;

        $editorView = News::where('author', $editorId)
                    ->with('author')
                    ->latest()
                    ->paginate(15);

        return Inertia::render('EditorPosts', [
            'editorView' => $editorView,
        ]);
    }

    public function edit(Request $request, $id)
    {
        try {
            $request->validate([
                'title' => 'required|string',
                'imageCaption' => 'required|string',
                'content' => 'required|string',
                'category' => 'required|string',
                'publishStatus' => 'required|string',
            ]);

            $news = News::findOrFail($id);

            $news->fill([
                'title' => $request->title,
                'image_caption' => $request->imageCaption,
                'content' => $request->content,
                'category' => $request->category,
                'publish_status' => $request->publishStatus,
            ]);

            if ($request->hasFile('image')) {
                if (Storage::exists($news->image)) {
                    Storage::delete($news->image);
                }

                $imageName = uniqid().'.'.$request->image->extension();
                $request->image->storeAs('public', $imageName, 'local');
                $news->image = 'storage/' . $imageName;
            }

            $news->save();

            return redirect()->route('admin-posts')->with('success', 'News updated successfully!');
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to update news', 'error' => $e->getMessage()]);
        }
    }


    public function destroy($id) //delete
    {
        try {
            $news = News::findOrFail($id);

            if (Storage::exists($news->image)) {
                Storage::delete($news->image);
            }

            $news->delete();

            return redirect()->route('admin-posts')->with('success', 'News deleted successfully!');
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete news', 'error' => $e->getMessage()]);
        }
    }

    public function updatePublishStatus(Request $request, $id) //publish toggle
    {
        try {
            $request->validate([
                'publishStatus' => 'required|boolean',
            ]);

            $news = News::findOrFail($id);
            $news->update([
                'publish_status' => $request->publishStatus,
            ]);

            return redirect()->route('admin-posts')->with('success', 'Publish successfully!');
        }

        catch (\Exception $e) {
            return response()->json(['message' => 'Failed to update publish status', 'error' => $e->getMessage()], 500);
        }
    }

    public function contributionTable()
    {
        $contributionTable = User::leftJoin('news', 'users.id', '=', 'news.author')
            ->select('users.name', DB::raw('COUNT(news.id) as total_news'))
            ->groupBy('users.name')
            ->orderByDesc('total_news')
            ->get();

        $categorySums = News::select('category', DB::raw('COUNT(id) as total'))
            ->where('publish_status', true)
            ->groupBy('category')
            ->get();

            return Inertia::render('AdminDashboard', [
                'contribution' => $contributionTable,
                'categorySums' => $categorySums,
            ]);
    }

    public function editorContributionTable()
    {
        $contributionTable = User::leftJoin('news', 'users.id', '=', 'news.author')
            ->select('users.name', DB::raw('COUNT(news.id) as total_news'))
            ->groupBy('users.name')
            ->orderByDesc('total_news')
            ->get();

        $categorySums = News::select('category', DB::raw('COUNT(id) as total'))
            ->where('publish_status', true)
            ->groupBy('category')
            ->get();

            return Inertia::render('EditorDashboard', [
                'contribution' => $contributionTable,
                'categorySums' => $categorySums,
            ]);
    }

}

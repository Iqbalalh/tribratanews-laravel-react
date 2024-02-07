<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function view()
    {
        $userView = User::latest()
                        ->paginate(15);

        return Inertia::render('AdminUsers', [
            'userView' => $userView,
        ]);
    }
}

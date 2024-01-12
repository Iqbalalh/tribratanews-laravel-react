<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialMedia extends Model
{
    use HasFactory;
    protected $fillable = [
        'twitter',
        'instagram',
        'facebook',
        'youtube',
    ];

    protected $attributes = [
        'twitter' => '',
        'instagram' => '',
        'facebook' => '',
        'youtube' => '',
    ];
}

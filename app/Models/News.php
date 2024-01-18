<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
        'image_caption',
        'content',
        'category',
        'author',
        'publish_status',
    ];

    protected $attributes = [
        'title' => '',
        'image' => '',
        'image_caption' => '',
        'content' => '',
        'category' => '',
        'author' => '',
        'publish_status' => '',
    ];
}

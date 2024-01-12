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
        'time',
        'content',
        'category',
        'region',
        'authors',
        'publish_status',
        'event',
    ];

    protected $casts = [
        'time' => 'datetime',
    ];

    protected $attributes = [
        'title' => '',
        'image' => '',
        'image_caption' => '',
        'time' => null,
        'content' => '',
        'category' => '',
        'region' => '',
        'author' => '',
        'publish_status' => '',
        'event' => '',
    ];
}

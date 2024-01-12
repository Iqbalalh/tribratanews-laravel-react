<?php

namespace Database\Factories;

use App\Models\SocialMedia;
use Illuminate\Database\Eloquent\Factories\Factory;

class SocialMediaFactory extends Factory
{
    protected $model = SocialMedia::class;

    public function definition()
    {
        return [
            'twitter' => fake()->text(5),
            'instagram' => fake()->text(5),
            'facebook' => fake()->text(5),
            'youtube' => fake()->text(5),
        ];
    }
}

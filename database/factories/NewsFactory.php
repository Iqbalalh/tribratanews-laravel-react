<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(6),
            'image' => 'assets/test.jpg',
            'image_caption' => fake()->sentence(8),
            'time' => fake()->dateTimeBetween('-1 month', '+1 month'),
            'content' => fake()->paragraphs(10, true),
            'category' => fake()->text(5),
            'region' => fake()->text(5),
            'author' => fake()->name,
            'publish_status' => fake()->boolean,
            'event' => fake()->text(5)
        ];
    }
}

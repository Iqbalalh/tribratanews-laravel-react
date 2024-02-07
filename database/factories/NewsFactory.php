<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

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
        $categories = ['Hukum', 'Sosial Budaya', 'Keamanan', 'Kesehatan', 'Olahraga'];
        $images = ['test1.jpeg', 'test2.jpeg', 'test3.jpeg', 'test4.jpeg', 'test5.jpeg'];
        $user = User::inRandomOrder()->first();
        $authorId = $user ? $user->id : 1;

        return [
            'title' => fake()->sentence(6),
            'image' => 'storage/' . fake()->randomElement($images),
            'image_caption' => fake()->sentence(2),
            'content' => fake()->paragraphs(10, true),
            'category' => fake()->randomElement($categories),
            'author' => $authorId,
            'publish_status' => fake()->boolean,
        ];
    }
}

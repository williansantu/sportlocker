<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            'name' => 'Pizza',
            'price' => 19.99,
            'available_stock' => 50,
            'active' => true,
            'category_id' => 1,
        ]);

        DB::table('products')->insert([
            'name' => 'Donut',
            'price' => 7.99,
            'available_stock' => 100,
            'active' => true,
            'category_id' => 1, 
        ]);

        DB::table('products')->insert([
            'name' => 'Orange Juice',
            'price' => 8.99,
            'available_stock' => 100,
            'active' => true,
            'category_id' => 2, 
        ]);

    }
}

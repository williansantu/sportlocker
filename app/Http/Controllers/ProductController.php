<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;


class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all()->load('category');
        return response()->json($products);
    }

    public function show($id)
    {
        $product = Product::find($id)->load('category');

        if (!$product) {
            return response()->json(['message' => 'Product not Found'], 404);
        }

        return response()->json($product);
    }
}

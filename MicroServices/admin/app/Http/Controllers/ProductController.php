<?php

namespace App\Http\Controllers;

use App\Jobs\ProductCreated;
use App\Jobs\ProductDeleted;
use App\Jobs\ProductUpdated;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class ProductController extends Controller
{
    public function index(){
        $products = Product::all();
       
        return view('pages.products.index', [
            'products' => $products,
        ]);
       // $products = Product::all(); 
       // return $products;
    }
    public function show($id){
         $product = Product::find($id);
         return $product;
    }
    public function store(Request $request){

        $product  = Product::create($request->only('title','image'));

        ProductCreated::dispatch($product->toArray())->onQueue('main_queue');

        return response($product,Response::HTTP_CREATED);

    }
    public function update($id ,Request $request){

    $product = Product::find($id);
    $product->update($request->only('title'));

    // Set a success message in the response
    $response = redirect()->route('pages.products.index');
    $response->with('success', __('Product updated successfully.'));

    // Return the response
    return $response;
    }
    public function destroy($id){
        $product = Product::find($id);

        $product->delete();
        
        ProductDeleted::dispatch($id)->onQueue('main_queue');
        $response = redirect()->route('pages.products.index');
        $response->with('success', __('Product updated successfully.'));

        // Return the response
        return $response;
    }
    public function edit($id){
        $product =Product::find($id);
        return view('pages.products.edit', [
            'product' => $product,
        ]);
    }
}

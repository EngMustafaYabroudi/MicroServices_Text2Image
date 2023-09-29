<?php

namespace App\Http\Controllers;

use App\Jobs\ProductLiked;
use App\Models\Product;

use App\Models\ProductUser;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public function index(){
        $products = Product::all();
        return $products;
    }
    public  function like($id,Request $request){

        $ip = "10.151.150.220";
        $response = \Http::get("http://".$ip.":8000/api/user");
        $user = $response->json();
        try{
            $product_user = ProductUser::create([
                'user_id'=>$user['id'],
                'product_id'=>$id
            ]);
            ProductLiked::dispatch($product_user->toArray())->onQueue('admin_queue');

            return response([
                'message'=>'Success'
            ]);

        }catch(\Exception $exception){
            return response([
                'errorr'=>'You already liked This Product'.$exception
            ],Response::HTTP_BAD_REQUEST);
        }

    }
}

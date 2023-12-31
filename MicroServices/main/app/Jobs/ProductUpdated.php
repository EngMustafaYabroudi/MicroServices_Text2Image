<?php

namespace App\Jobs;

use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class ProductUpdated implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    
    private $data;
    public function __construct($id,$data)
    {
        $this->data = $data;
    }


    public function handle(): void
    {   
        $product = Product::find($this->data['id']); 
        $product->update([
            'title'=>$this->data['title'],
            'image'=>$this->data['image'],
            'created_at'=>$this->data['created_at'],
            'updated_at'=>$this->data['updated_at'],
        ]); 
        
    }
}

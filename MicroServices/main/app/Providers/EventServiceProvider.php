<?php

namespace App\Providers;

use App\Jobs\ProductCreated;
use App\Jobs\TestJob;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
   
    public function boot(): void
    {
        \App::bindMethod(ProductCreated::class . '@handl',fn($job)=>$job->handle()); 
    }

}

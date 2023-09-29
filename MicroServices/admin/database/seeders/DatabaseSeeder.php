<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\ProductSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       $this->call([UsersTableSeeder::class]);
       #$this->call([UserSeeder::class]);
       $this->call([ProductSeeder::class]);
       
        
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    use HasFactory;

    protected $casts = [
        'is_important' => 'boolean'
    ];


    protected $fillable = ['title', 'content', 'is_important'];
}

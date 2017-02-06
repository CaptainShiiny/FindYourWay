<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model;

class Clue extends Model{

    protected $table = 'clue';
    protected $primaryKey = 'id';
    protected $fillable = ['label', 'latitude', 'longitude', 'position', 'destination_id'];
    public $timestamps = false;

   

}
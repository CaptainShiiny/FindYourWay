<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model;

class Place extends Model{

    protected $table = 'place';
    protected $primaryKey = 'id';
    protected $fillable = ['label', 'longitude', 'latitude'];
    public $timestamps = false;

}

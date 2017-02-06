<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model{

    protected $table = 'game';
    protected $primaryKey = 'id';
    protected $fillable = ['score', 'player_id', 'destination_id', 'status'];
    public $timestamps = false;

    public function player(){
        return $this->belongsTo('src\models\Player', 'player_id');
    }

}

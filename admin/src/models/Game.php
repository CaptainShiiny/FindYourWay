<?php

namespace app\models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model{

    protected $table = 'game';
    protected $primaryKey = 'id';
    protected $fillable = ['score', 'player_id', 'destination_id', 'status'];
    public $timestamps = false;

    public function player(){
        return $this->belongsTo('app\models\Player', 'player_id');
    }

}

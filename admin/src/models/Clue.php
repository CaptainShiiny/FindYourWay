<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model;

class Clue extends Model{

    protected $table = 'clue';
    protected $primaryKey = 'id';
    protected $fillable = ['label', 'destination_id', 'position'];
    public $timestamps = false;

    public function destination(){
        return $this->belongsTo('src\models\Destination', 'destination_id');
    }

    public function clue_game(){
        return $this->belongsToMany(
            "\src\models\Game",
            "clue_game",
            "clue_id", "game_id"
        );
    }

}

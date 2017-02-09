<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model{

    protected $table = 'game';
    protected $primaryKey = 'id';
    protected $fillable = ['score', 'player_id', 'destination_id', 'status'];
    public $timestamps = false;

    public function clue_game(){
        return $this->belongsToMany(
                            "\src\models\Clue",
                            "clue_game",
                            "game_id", "clue_id"
                        );
    }

}

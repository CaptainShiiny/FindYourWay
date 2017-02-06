<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model{
	protected $table = "player";
	protected $primaryKey = "id";
	protected $fillable = ["id", "pseudo"];
	public $timestamps = false;

	public function Game(){
		return $this->hasMany("src\models\Game", "game_id");
	}

}
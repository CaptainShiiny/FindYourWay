<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model{
	protected $table = "player";
	protected $primaryKey = "id";
	protected $fillable = ["pseudo", "token"];
	public $timestamps = false;

	public function games(){
		return $this->hasMany("src\models\Game", "player_id");
	}

}

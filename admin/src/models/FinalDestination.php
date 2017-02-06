<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model;

class FinalDestination extends Model{

  protected $table = "final_destination";
  protected $primaryKey = "id";
  protected $fillable = ["label", "name", "latitude", "longitude"];
  public $timestamps = false;

  public function clues(){
    return $this->hasMany("src\models\Clue", "destination_id");
  }

}

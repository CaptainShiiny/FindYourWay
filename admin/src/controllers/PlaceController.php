<?php

namespace src\controllers;

use src\models\Place as Place;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;

class PlaceController extends AbstractController{

  function listPlaces($req, $resp, $args){
      $places = Place::get();
      $places_number = $places->count();

      $places_tab = [];

      foreach($places as $place){
          $data = [
                      "name" => $place->name,
                      "links" => ["self" => DIR."/places/".$place->id]
                  ];
          array_push($places_tab, $data);
      }
      $data = [
                "places_number" => $places_number,
                "places" => $places_tab
              ];
      return $this->responseJSON(200, "ok", $data);

    }
    
}

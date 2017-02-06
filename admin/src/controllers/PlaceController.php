<?php

namespace src\controllers;

use src\models\Place as Place;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;
use \Illuminate\Database\Eloquent\ModelNotFoundException as Exception;

class PlaceController extends AbstractController{

  function listPlaces($req, $resp, $args){
      $places = Place::get();
      $places_number = $places->count();

      $places_tab = [];

      foreach($places as $place){
          $data = [
                      "name" => $place->label,
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

    function addPlace($req, $resp, $args){
        try{

            if(
                !isset($req->getParams()["longitude"]) ||
                !isset($req->getParams()["latitude"]) ||
                !isset($req->getParams()["label"])
            ){
                return $this->responseJSON(400, "Veuillez bien compléter les champs suivants: label, longitude, latitude.", NULL);
            }

            $place = new Place();

            $place->label = $label = $req->getParams()["label"];
            $place->longitude = $longitude = $req->getParams()["longitude"];
            $place->latitude = $latitude = $req->getParams()["latitude"];
            $place->save();

            $data = [
                        "name" => $place->label,
                        "links" => ["self" => DIR."/places/".$place->id]
                    ];
            return $this->responseJSON(200, "ok", $data);
        }catch(Exception $e){
            return $this->responseJSON(400, "Une erreur est survenue.", NULL);
        }
    }

    


}

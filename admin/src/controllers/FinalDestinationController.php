<?php

namespace src\controllers;

use src\models\FinalDestination as FinalDestination;
use src\models\Clue as Clue;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;
use \Illuminate\Database\Eloquent\ModelNotFoundException as Exception;

class FinalDestinationController extends AbstractController{

  function listDestinations($req, $resp, $args){
      $destinations = FinalDestination::get();
      $destinations_number = $destinations->count();

      $destinations_tab = [];

      foreach($destinations as $destination){
          $data = [
                      "name" => $destination->name,
                      "links" => ["self" => DIR."/destinations/".$destination->id]
                  ];
          array_push($destinations_tab, $data);
      }
      $data = [
                "destinations_number" => $destinations_number,
                "destinations" => $destinations_tab
              ];
      return $this->responseJSON(200, "ok", $data);

    }

    function addDestination($req, $resp, $args){
        try{

            if(
                !isset($req->getParams()["label"]) ||
                !isset($req->getParams()["longitude"]) ||
                !isset($req->getParams()["latitude"]) ||
                !isset($req->getParams()["name"])
            ){
                return $this->responseJSON(400, "Veuillez bien compléter les champs suivants: label, longitude, latitude, name.", NULL);
            }

            $destination = new FinalDestination();

            $destination->label = $label = $req->getParams()["label"];
            $destination->longitude = $longitude = $req->getParams()["longitude"];
            $destination->latitude = $latitude = $req->getParams()["latitude"];
            $destination->name = $name = $req->getParams()["name"];
            $destination->save();

            $data = [
                        "name" => $destination->name,
                        "links" => ["self" => DIR."/destination/".$destination->id]
                    ];
            return $this->responseJSON(200, "ok", $data);
        }catch(Exception $e){
            return $this->responseJSON(400, "Une erreur est survenue.", NULL);
        }
    }

    function listClues($req, $resp, $args){
        try {
            $clues_tab = [];
            $id = $args['id'];
            $destination = FinalDestination::findOrFail($id);
            $clues =  Clue::where('destination_id', $id)->OrderBy('position')->get();
            $clue_number = $clues->count();
            foreach ($clues as $clue) {
                $data = [
                    "label" => $clue->label,
                    "position" => $clue->position
                ];
                array_push($clues_tab, $data);
            }
            $data = [
                "clue_number" => $clue_number,
                "clues" => $clues_tab
            ];
            return $this->responseJSON(200, "OK", $data);
        } catch (Exception $e) {
            $data = [
                "Error" => "Impossible de se connecter à la base de données"
            ];
            return $this->responseJSON(400, "Bad Request", $data);
        }


    }

}

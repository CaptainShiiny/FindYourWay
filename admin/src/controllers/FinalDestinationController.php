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
                      "id" => $destination->id,
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
                        "links" => ["self" => DIR."/destinations/".$destination->id]
                    ];
            return $this->responseJSON(200, "ok", $data);
        }catch(Exception $e){
            return $this->responseJSON(400, "Une erreur est survenue.", NULL);
        }
    }

     function afficheDestinationId($req, $resp, $args){
      try{
        $dest = FinalDestination::where('id', '=', $args['id'])->firstorfail();
        $data = [
                    "name" => $dest->name,
                    "label" => $dest->label,
                    "latitude" => $dest->latitude,
                    "longitude" => $dest->longitude,
                    "links "=>["self"=>DIR."/destinations/".$dest->id]
                ];
        return $this->responseJSON(200, "ok", $data);
      }catch(\Exception $e)
      {
        return $this->responseJSON(400, "Une erreur est survenue.", NULL);
      }
    }

    function deleteDestination($req, $resp, $args){
        try{
            $destination = FinalDestination::findOrFail($args['id']);
            $destination->delete();
            return $this->responseJSON(200, "Success", NULL);
        }catch(Exception $e){
            return $this->responseJSON(404, "Destination not found", NULL);
        }
    }

    function updateDestination($req, $resp, $args){
         try{
            $dest = FinalDestination::findOrFail($args['id']);
            if(isset($req->getParams()['longitude'])){
                $dest->longitude = $req->getParams()['longitude'];
            }
            if(isset($req->getParams()['latitude'])){
                $dest->latitude = $req->getParams()['latitude'];
            }
            if(isset($req->getParams()['label'])){
                $dest->label = $req->getParams()['label'];
            }
            if(isset($req->getParams()['name'])){
                $dest->name = $req->getParams()['name'];
            }
            $dest->save();

            $data = [
                        "name" => $dest->name,
                        "links" => ["self" => DIR."/destinations/".$dest->id]
                    ];
            return $this->responseJSON(200, "Success", $data);
        }catch(Exception $e){
            return $this->responseJSON(404, "Destination not found.", NULL);
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
                    "id" => $clue->id,
                    "label" => $clue->label,
                    "position" => $clue->position,
                    "links" => ["self" => DIR."/clues/".$clue->id]
                ];
                array_push($clues_tab, $data);
            }
            $data = [
                "clue_number" => $clue_number,
                "clues" => $clues_tab
            ];
            return $this->responseJSON(200, "OK", $data);
        } catch (Exception $e) {
            $data = ["Error" => "Ressource Inconnue"];
            return $this->responseJSON(404, "Not Found", $data);
        }
    }

    function detailClue($req, $resp, $args){
        try {
            $id = $args['id'];
            $clue = Clue::findOrFail($id);
            $destination = FinalDestination::findOrFail($clue->destination_id);
            $data = [
                "label" => $clue->label,
                "position" => $clue->position,
                "destination" => [
                                    "name" => $destination->name,
                                    "link" => DIR."/destinations/".$destination->id
                                 ]
            ];
            return $this->responseJSON(200, "OK", $data);
        } catch (Exception $e) {
            $data = ["Error" => "Ressource Inconnue"];
            return $this->responseJSON(404, "Not Found", $data);
        }
    }

    function addClue($req, $resp, $args){
        try {
            if (!isset($req->getParams()["label"]) ||
            !isset($req->getParams()["position"])) {
                return $this->responseJSON(400, "Veuillez bien compléter les champs suivants: label, position", NULL);
            }
            if($req->getParams()['position'] > 5){
                return $this->responseJSON(400, "Veuillez choisir une position entre 0 et 5.", NULL);
            }
            $id = $args['id'];
            $destination = FinalDestination::findOrFail($id);
            $clues = Clue::where('destination_id', $id)->get();

            if ($clues->count() < 5) {
                foreach ($clues as $value) {
                    if ($value->position == $req->getParams()['position']) {
                        return $this->responseJSON(400, "Bad Request", ["Error" => "La position existe déjà"]);
                    }
                }
                $clue = new Clue();
                $clue->label = $label = $req->getParams()["label"];
                $clue->position = $position = $req->getParams()['position'];
                $clue->destination_id = $id;
                if ($clue->save()) {
                    $status = 200;
                    $message = "OK";
                    $data = ["links" => ["self" => DIR."/clues/".$clue->id]];
                } else {
                    $status = 400;
                    $message = "Bad Request";
                    $data = ["Error" => "Erreur lors de la sauvegarde de la base de données"];
                }
                return $this->responseJSON($status, $message, $data);
            }else {
                $data = ["Error" => "Il y a déjà 5 indices pour cette destination"];
                return $this->responseJSON(400, "Bad Request", $data);
            }
        } catch (Exception $e) {
            $data = [
                "Error" => "Ressource inconnue"
            ];
            return $this->responseJSON(404, "Not Found", $data);
        }

    }


    function updateClue($req, $resp, $args){
        try{
            $clue = Clue::findOrFail($args['id']);
           

            if(isset($req->getParams()['label'])){
                $clue->label = $req->getParams()['label'];

            }
            if(isset($req->getParams()['position'])){
                $clue->position = $req->getParams()['position'];
            }
          
           

               if($position_clue != 0){

                   $clue->save();
                    $data = [
                        "label" => $clue->label,
                        "links" => ["self" => DIR."/clues/".$clue->id]
                    ];

               }else{

                   
                   $data = "l'indice existe déjà";
               }
               

            return $this->responseJSON(200, "Success", $data);
        }catch(Exception $e){
            return $this->responseJSON(404, "Clue not found.", NULL);
        }
    }

    function deleteClue($req, $resp, $args){
        try{
            $clue = Clue::findOrFail($args['id']);
            $clue->delete();
            return $this->responseJSON(200, "Success", NULL);
        }catch(Exception $e){
            return $this->responseJSON(404, "Clue not found", NULL);
        }
    }
}

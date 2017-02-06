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

     function afficheDestinationId($req, $resp, $args){
      try{
        $dest = FinalDestination::where('id', '=', $args['id'])->firstorfail();
        return $this->responseJSON(200, "ok",[$dest->toArray(), "links "=>["label"=>["href"=>DIR."/destinations/".$dest->id]]]);
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

    function updateDestination($req, $resp, $args, $requestbody){

        $mess = [];
        try{
            $id_dest = $args['id'];
            $dest = FinalDestination::findOrFail($id_dest);

            foreach($requestbody as $key => $value){

              if(in_array($key,$dest->getFillable()))
                {
                    $dest->$key = filter_var($value, FILTER_SANITIZE_STRING);
                }
                else
                {
                    $mess[] =  ["Warning" => "Il manque une valeur à $key"];
                }

            }
            $dest->save();
             if(!empty($mess))
                return $this->responseJSON(200,"succès de  la requête", $mess);
                return $this->responseJSON(204,"No content", NULL);

        }catch(Exception $e){

            $mess =  ["Error" => "La destination $id est introuvable"];
            return $this->responseJSON(404, "Bad Request", $mess);

        }

    }
    }

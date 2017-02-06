<?php

namespace src\controllers;

use src\models\FinalDestination as FinalDestination;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;

class FinalDestinationController extends AbstractController{

  function listDestinations($req, $resp, $args){
      $destinations = FinalDestination::get();
      $destinations_number = $destinations->count();

      $destinations_tab = [];

      foreach($destinations as $destination){
          $data = [
                      "name" => $destination->nom,
                      "link" => ["self" => DIR."/destinations/".$destination->id]
                  ];
          array_push($destinations_tab, $data);
      }
      $status = ["status" => [200 => "ok"]];
      $data = [
                "data" =>
                    [
                        "destinations_number" => $destinations_number,
                        "destinations" => $destinations_tab
                    ]
              ];
      return $this->responseJSON(200, [$status, $data]);

    }

    function addDestination($req, $resp, $args){
        try{
            $destination = new FinalDestination();

            $destination->label = $label = $req->getParams()["label"];
            $destination->label = $label = $req->getParams()["label"];
            $destination->label = $label = $req->getParams()["label"];
            $destination->label = $label = $req->getParams()["label"];
        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){

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
                return $this->responseJSON(200, $mess);
                return $this->responseJSON(204, NULL);

        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){

            $mess =  ["Error" => "La destination $id est introuvable"];
            return $this->responseJSON(404, $mess);

        }
      

    }

}

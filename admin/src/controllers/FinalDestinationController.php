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
                        "destiations" => $destinations_tab
                    ]
              ];
      return $this->responseJSON(200, [$status, $data]);

    }

}

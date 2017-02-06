<?php

namespace src\controllers;

use src\models\FinalDestination as FinalDestination;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;

class FinalDestinationController extends AbstractController{

  function listDestinations($req, $resp, $args){
      $destinations = FinalDestination::get();
      var_dump($destinations);die;
    }

}

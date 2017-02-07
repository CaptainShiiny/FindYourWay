<?php

namespace src\controllers;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Illuminate\Database\Eloquent\ModelNotFoundException as Exception;
use \src\models\FinalDestination;
use \src\controllers\FinalDestinationController as FinalDestinationController;

class DashboardController extends AbstractController{

    public function listDestinations(Request $req, Response $resp, $args){
        $destinations = FinalDestination::all();
        return $this->request->view->render($resp, 'destinations.html', ["destinations"=>$destinations, "base_url"=>$args['baseUrl']]);
    }

    public function addDestination(Request $req, Response $resp, $args){
        if($req->isGet()){
            $destinations = FinalDestination::all();
            return $this->request->view->render($resp, 'form_add_destinations.html', ["destinations"=>$destinations, "base_url"=>$args['baseUrl']]);
        }
        if($req->isPost()){
            $destination = $args['parsedBody'];
            $newDestination = new FinalDestination();
            $newDestination->label = filter_var($destination["label"], FILTER_SANITIZE_STRING);
            $newDestination->latitude = filter_var($destination["latitude"], FILTER_SANITIZE_STRING);
            $newDestination->longitude = filter_var($destination["longitude"], FILTER_SANITIZE_STRING);
            $newDestination->name = filter_var($destination["name"], FILTER_SANITIZE_STRING);

            try{
                $newDestination->save();
                $destinations = FinalDestination::all();
                return $this->request->view->render($resp, 'destinations.html', ["destinations"=>$destinations, "base_url"=>$args['baseUrl']]);
            }
            catch(Exception $e){
                echo "Erreur";
            }
        }
    }

}

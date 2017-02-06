<?php

namespace src\controllers;


use src\models\Player as Player;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;
use \Illuminate\Database\Eloquent\ModelNotFoundException as Exception;

class PlayerController extends AbstractController{



    function addPlayer($req, $resp, $args){

        try{

            if(!isset($req->getParams()["pseudo"])){

                return $this->responseJSON(400,"Il manque une valeur au champ pseudo", NULL);
            }
            $player = new Player();
            $player->pseudo = $req->getParams()["pseudo"];
            $player->save();

            $data = ["links"=>[ "self" => DIR."/players/".$player->id]];

            return $this->responseJSON(200, "OK", $data);


        }catch(Exception $e){

            return $this->responseJSON(404, "Not found", NULL);
        }
    }

}
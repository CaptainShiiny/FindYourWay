<?php

namespace src\controllers;


use src\models\Player as Player;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;
use \Illuminate\Database\Eloquent\ModelNotFoundException as Exception;

class PlayerController extends AbstractController{



    function addPlayer($req, $resp, $args){

        try{
            $players = Player::get();
            if(!isset($req->getParams()["pseudo"])){

                return $this->responseJSON(400,"Il manque une valeur au champ pseudo", NULL);
            }
            $player = new Player();
            $player->pseudo = $req->getParams()["pseudo"];
            
            $player->token = (new \RandomLib\Factory)->getMediumStrengthGenerator()->generateString(32);
            $player->save();

            $data = [
                    "token" => $player->token,
                    "links"=>[ "self" => DIR."/players/".$player->id]
                    ];

            return $this->responseJSON(200, "OK", $data);


        }catch(Exception $e){

            return $this->responseJSON(404, "Not found", NULL);
        }
    }

    function listPlayers($req, $resp, $args){

            $players_tab = [];


            $players = Player::get();
            $players_number = $players->count();


            foreach($players as $player){
                $data = [
                            "pseudo" => $player->pseudo,
                            "links" => ["self" => DIR."/players/".$player->id]
                        ];
                array_push($players_tab, $data);
            }
            $data = [
                        "players_number" => $players_number,
                        "players" => $players_tab
                    ];
            return $this->responseJSON(200, "ok", $data);


    }


    function getPlayer($req, $resp, $args){
        try{
                 $player = Player::findOrFail($args['id']);

                $data = [
                    "pseudo"=>$player->pseudo,
                ];

                return $this->responseJSON(200, "ok", $data);


        }catch(\Exception $e){

                return $this->responseJSON(400, "Une erreur est survenue.", NULL);
        }

    }

    function deletePlayer($req, $resp, $args){
        try{
            $player = Player::findOrFail($args['id']);
            $player->delete();
            return $this->responseJSON(200, "The player has been delete", NULL);
        }catch(Exception $e){
            return $this->responseJSON(404, "Player not found", NULL);
        }

    }


    function updatePlayer($req, $resp, $args){
        try{
            $player = Player::findOrFail($args['id']);
            if(isset($req->getParams()['pseudo'])){
                $player->pseudo = $req->getParams()['pseudo'];
            }
            $player->save();

            $data = [
                        "pseudo" => $player->pseudo,
                        "links" => ["self" => DIR."/players/".$player->id]
                    ];
            return $this->responseJSON(200, "The player has been modify", $data);
        }catch(Exception $e){
            return $this->responseJSON(404, "Player not found.", NULL);
        }
    }

}

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

    function listPlayers($req, $resp, $args){
        try {
            $players_tab = [];
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
            $data = ["Error" => "Ressource Inconnue"];
            return $this->responseJSON(404, "Not Found", $data);
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

}

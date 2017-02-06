<?php

namespace src\controllers;

use src\models\Game as Game;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;
use \Illuminate\Database\Eloquent\ModelNotFoundException as Exception;

class GameController extends AbstractController{

    function addGame($req, $resp, $args){
        try{

            $game = new Game();
            $game->player_id = $args['player_id'];
            $game->destination_id = $args['destination_id'];
            $game->score = 0;
            $game->status = "créée";
            $game->save();

            $data = [
                        "links" => ["self" => DIR."/games/".$game->id]
                    ];
            return $this->responseJSON(200, "ok", $data);
        }catch(Exception $e){
            return $this->responseJSON(400, "Une erreur est survenue.", NULL);
        }
    }

    function deleteGame($req, $resp, $args){

        try{
            $game = Game::findOrFail($args['id']);
            $game->delete();
            return $this->responseJSON(200, "The game has been deleted", NULL);

        }catch(Exception $e){

            return $this->responseJSON(404, "Game not found", NULL);

            
        }
    }
}

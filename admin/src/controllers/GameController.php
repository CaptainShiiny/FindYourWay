<?php

namespace src\controllers;

use src\models\Game as Game;
use src\models\Player as Player;
use src\models\FinalDestination as FinalDestination;
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
            return $this->responseJSON(200, "Le jeu a été supprimé", NULL);

        }catch(Exception $e){

            return $this->responseJSON(404, "Not found", NULL);


        }
    }

    function gameById($req, $resp, $args){
        try{
            $game = Game::findOrFail($args['id']);
            $player = Player::findOrFail($game->player_id);
            $destination = FinalDestination::findOrFail($game->destination_id);
            $data = [
                        "joueur" => $player->pseudo,
                        "score" => $game->score,
                        "destination" => $destination->name,
                        "links" => [
                            "player" => DIR."/players/".$player->id,
                            "destination" => DIR."/destinations/".$destination->id
                        ]
                    ];
            return $this->responseJSON(200, "ok", $data);
        }catch(Exception $e){
            return $this->responseJSON(404, "Game not found.", NULL);
        }
    }

    function gamesFromPlayer($req, $resp, $args){
        try{
            $player = Player::findOrFail($args['id']);
            $games = $player->games()->get();
            $games_number = $games->count();
            $games_tab = [];
            foreach($games as $game){
                $destination = FinalDestination::findOrFail($game->destination_id);
                $data = [
                            "destination" => $destination->name,
                            "links" => ["self" => DIR."/games/".$game->id]
                        ];
                array_push($games_tab, $data);
            }

            $data = [
                        "games_number" => $games_number,
                        "games" => $games_tab
                    ];

            return $this->responseJSON(200, "ok", $data);

        }catch(Exception $e){
            return $this->responseJSON(404, "Player not found.", NULL);
        }
    }

}

<?php

namespace src\controllers;

use src\models\Game as Game;
use src\models\Player as Player;
use src\models\Clue as Clue;
use src\models\FinalDestination as FinalDestination;
use \Psr\Http\Message\ServerRequestInterface as Request;
use src\utils\Authentification ;
use \Illuminate\Database\Eloquent\ModelNotFoundException as Exception;

class GameController extends AbstractController{

    function addGame($req, $resp, $args){
        try{

            $game = new Game();
            $game->player_id = $args['id'];
            $game->destination_id = $args['destination_id'];
            $game->score = 0;
            $game->status = "créée";
            $game->save();

            $clues = Clue::where("destination_id", $args["destination_id"])->get();

            foreach($clues as $clue){
                $game->clue_game()->attach($clue->id, ["status" => 0]);
            }

            $data = [
                        "links" => ["self" => DIR."/players/".$game->player_id."/games/".$game->id]
                    ];
            return $this->responseJSON(200, "ok", $data);
        }catch(Exception $e){
            return $this->responseJSON(400, "Une erreur est survenue.", NULL);
        }
    }


    function deleteGame($req, $resp, $args){

        try{
            $game = Game::findOrFail($args['game_id']);
            $game->delete();
            return $this->responseJSON(200, "Le jeu a été supprimé", NULL);

        }catch(Exception $e){

            return $this->responseJSON(404, "Not found", NULL);

        }
    }

    function updateGame($req, $resp, $args){
        try{
            $game = Game::findOrFail($args['game_id']);
            if(isset($req->getParams()['status'])){
                $game->status = $req->getParams()['status'];
            }
            if(isset($req->getParams()['score'])){
                $game->score = $req->getParams()['score'];
            }
            $game->save();
            $destination = FinalDestination::findOrFail($game->destination_id);

            $data = [
                        "destination" => $destination->name,
                        "links" => ["self" => DIR."/players/".$game->id]
                    ];
            return $this->responseJSON(200, "Success", $data);
        }catch(Exception $e){
            return $this->responseJSON(404, "Game not Found.", NULL);
        }
    }

    function gameById($req, $resp, $args){
        try{
            $game = Game::findOrFail($args['game_id']);
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
                            "links" => ["self" => DIR."/players/".$player->id."/games/".$game->id]
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

    function cluesFromGame($req, $resp, $args){
        try{
            $player = Player::findOrFail($args["id"]);
            $game = Game::findOrFail($args["game_id"]);
            $clues = $game->clue_game()->where("status", "1")->get();

            $clues_tab = [];
            foreach($clues as $clue){
                $data = [
                            "name" => $clue->label,
                            "link" => ["self" => DIR."/clues/".$clue->id]
                        ];
                array_push($clues_tab, $data);
            }

            return $this->responseJSON(200, "ok", $clues_tab);

        }catch(Exception $e){
            return $this->responseJSON(404, "Player or Game not found.", NULL);
        }
    }

    function modifyClue($req, $resp, $args){
        try{

            $player = Player::findOrFail($args['id']);
            $game = Game::findOrFail($args['game_id']);

            $game->clue_game()->detach($args["clue_id"]);
            $game->clue_game()->attach($args["clue_id"], ["status" => 1]);

            return $this->responseJSON(200, "ok", "Success");

        }catch(Exception $e){
            return $this->responseJSON(404, "Player or Game not found.", NULL);
        }
    }

}

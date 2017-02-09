<?php

define("DIR", $_SERVER['SCRIPT_NAME']);

require("../admin/vendor/autoload.php");
require("../admin/src/utils/Authentification.php");
src\utils\AppInit::bootEloquent('../admin/conf/conf.ini');

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Slim\Extras\Middleware\HttpBasicAuth;
use src\controllers\FinalDestinationController as FinalDestinationController;
use src\controllers\PlaceController as PlaceController;
use src\controllers\PlayerController as PlayerController;
use src\controllers\GameController as GameController;

$conf = ['settings' => ['displayErrorDetails' => true, 'tmpl_dir' => '..\templates'],
'view' => function($c){
    return new \Slim\Views\Twig($c['settings']['tmpl_dir'], ['debug'=>true, 'cache'=> $c['settings']['tmpl_dir']]);
}];
$errorDetails = new \Slim\Container($conf);
$app = new \Slim\App($errorDetails);

// On affiche les destinations finales
$app->get("/destinations[/]",
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->listDestinations($req, $resp, $args);
});

// On ajoute une destination finale
$app->post("/destinations[/]",
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->addDestination($req, $resp, $args);
})->add('checkAccessManager');

//On affiche une destination avec son id
$app->get('/destinations/{id}[/]',
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->afficheDestinationId($req, $resp, $args);
});

//on modfie une destination
$app->put("/destinations/{id}[/]",
    function(Request $req, Response $resp, $args){
      return (new FinalDestinationController($this))->updateDestination($req, $resp, $args);
    }
)->add('checkAccessManager');

// On supprime la destination {id}
$app->delete("/destinations/{id}[/]",
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->deleteDestination($req, $resp, $args);
})->add('checkAccessManager');

// On affiche les indices d'un destination finale
$app->get("/destinations/{id}/clues[/]",
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->listClues($req, $resp, $args);
});

// On affiche les lieux
$app->get("/places[/]",
function(Request $req, Response $resp, $args){
    return (new PlaceController($this))->listPlaces($req, $resp, $args);
}
);

// On affiche le lieu {id}
$app->get("/places/{id}[/]",
function(Request $req, Response $resp, $args){
    return (new PlaceController($this))->placeById($req, $resp, $args);
}
);

// On affiche les lieux
$app->post("/places[/]",
function(Request $req, Response $resp, $args){
    return (new PlaceController($this))->addPlace($req, $resp, $args);
}
)->add('checkAccessManager');

// On modifie un lieu
$app->put("/places/{id}[/]",
function(Request $req, Response $resp, $args){
    return (new PlaceController($this))->modifyPlace($req, $resp, $args);
}
)->add('checkAccessManager');



// On affiche un indice
$app->get("/clues/{id}[/]",
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->detailClue($req, $resp, $args);
}
);

// On affiche les indices d'un destination finale
$app->post("/destinations/{id}/clues[/]",
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->addClue($req, $resp, $args);
}
)->add('checkAccessManager');

//on modifie un indice
$app->put("/clues/{id}[/]",
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->updateClue($req, $resp, $args);
}
)->add('checkAccessManager');

// On supprime l'indince
$app->delete("/clues/{id}[/]",
function(Request $req, Response $resp, $args){
    return (new FinalDestinationController($this))->deleteClue($req, $resp, $args);
}
)->add('checkAccessManager');

//on ajoute un player
$app->post("/players[/]",
function(Request $req, Response $resp, $args){
    return (new PlayerController($this))->addPlayer($req, $resp, $args);
}
);


// On supprime le lieu {id}
$app->delete("/places/{id}[/]",
function(Request $req, Response $resp, $args){
    return (new PlaceController($this))->deletePlace($req, $resp, $args);

}
)->add('checkAccessManager');

//on ajoute une partie
$app->post("/players/{id}/destinations/{destination_id}/games[/]",
function(Request $req, Response $resp, $args){
    return (new GameController($this))->addGame($req, $resp, $args);
}
)->add('checkTokenPlayer');

//on liste les joueurs
$app->get("/players[/]",
    function(Request $req, Response $resp, $args){
        return (new PlayerController($this))->listPlayers($req, $resp, $args);
    }
);


//on affiche un joueur
$app->get("/players/{id}[/]",
    function(Request $req, Response $resp, $args){
        return (new PlayerController($this))->getPlayer($req, $resp, $args);
    }
);

// On supprime (ban) un joueur (Charles)
$app->delete("/players/{id}[/]",
    function(Request $req, Response $resp, $args){
      return (new PlayerController($this))->deletePlayer($req, $resp, $args);
    }
)->add('checkAccessManager');


// On supprime une partie
$app->delete("/players/{id}/games/{game_id}[/]",
    function(Request $req, Response $resp, $args){
      return (new GameController($this))->deleteGame($req, $resp, $args);
  }
)->add('checkTokenPlayer');

//On modifie une partie
$app->put("/players/{id}/games/{game_id}[/]",
    function(Request $req, Response $resp, $args){
      return (new GameController($this))->updateGame($req, $resp, $args);
    }
)->add('checkTokenPlayer');

// On modifie un joueur
$app->put("/players/{id}[/]",
    function(Request $req, Response $resp, $args){
      $requestbody = $req->getParsedBody();
      return (new PlayerController($this))->updatePlayer($req, $resp, $args, $requestbody);
    }
)->add('checkTokenPlayer');

//on liste les parties
$app->get("/players/{id}/games/{game_id}[/]",
    function(Request $req, Response $resp, $args){
        return (new GameController($this))->gameById($req, $resp, $args);

    }
)->add('checkTokenPlayer');

//on liste les parties d'un joueur
$app->get("/players/{id}/games[/]",
    function(Request $req, Response $resp, $args){
        return (new GameController($this))->gamesFromPlayer($req, $resp, $args);
    }
)->add('checkTokenPlayer');

//on liste les indices d'une partie d'un joueur
$app->get("/players/{id}/games/{game_id}/clues[/]",
    function(Request $req, Response $resp, $args){
        return (new GameController($this))->cluesFromGame($req, $resp, $args);
    }
)->add('checkTokenPlayer');




$app->run();

<?php

define("DIR", $_SERVER['SCRIPT_NAME']);

require("../admin/vendor/autoload.php");
src\utils\AppInit::bootEloquent('../admin/conf/conf.ini');

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Slim\Extras\Middleware\HttpBasicAuth;
use src\controllers\FinalDestinationController as FinalDestinationController;
use src\controllers\PlaceController as PlaceController;

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
    }
);

// On affiche les lieux
$app->get("/places[/]",
    function(Request $req, Response $resp, $args){
      return (new PlaceController($this))->listPlaces($req, $resp, $args);
    }
);

// On affiche les lieux
$app->post("/places[/]",
    function(Request $req, Response $resp, $args){
      return (new PlaceController($this))->addPlace($req, $resp, $args);
    }
);

// On modifie un lieu
$app->post("/places[/]",
    function(Request $req, Response $resp, $args){
      return (new PlaceController($this))->modifyPlace($req, $resp, $args);
    }
);

// On ajoute une destination finale
$app->post("/destinations[/]",
    function(Request $req, Response $resp, $args){
      return (new FinalDestinationController($this))->addDestination($req, $resp, $args);
    }
);

<<<<<<< HEAD
$app->get('/destinations/{id}',
	function(Request $req, Response $resp, $args){
		return (new FinalDestinationController($this))->afficheDestinationId($req, $resp, $args);
	}
);

=======
<<<<<<< HEAD
//on modfie une destination
$app->put("/destinations/{id}[/]",
    function(Request $req, Response $resp, $args){
      $requestbody = $req->getParsedBody();
      return (new FinalDestinationController($this))->updateDestination($req, $resp, $args, $requestbody);
    }
);

=======
// On affiche les indices d'un destination finale
$app->get("/destinations/{id}/clues[/]",
    function(Request $req, Response $resp, $args){
        return (new FinalDestinationController($this))->listClues($req, $resp, $args);
    }
);

// On affiche les indices d'un destination finale
$app->post("/destinations/{id}/clues[/]",
    function(Request $req, Response $resp, $args){
        return (new FinalDestinationController($this))->addClue($req, $resp, $args);
    }
);
>>>>>>> e5603ae20b2cddf69e5237391b3541edd92a00c3

>>>>>>> 3d1493a56ef5d325bab39569a805bc6b5e92b64b
$app->run();

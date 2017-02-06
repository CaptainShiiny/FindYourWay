<?php

define("DIR", $_SERVER['SCRIPT_NAME']);

require("../admin/vendor/autoload.php");
src\utils\AppInit::bootEloquent('../admin/conf/conf.ini');

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Slim\Extras\Middleware\HttpBasicAuth;
use src\controllers\FinalDestinationController as FinalDestinationController;

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

$app->run();

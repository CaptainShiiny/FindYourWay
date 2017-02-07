<?php

define("DIR", $_SERVER['SCRIPT_NAME']);

require("vendor/autoload.php");
require("src/utils/Authentification.php");
src\utils\AppInit::bootEloquent('conf/conf.ini');

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Slim\Extras\Middleware\HttpBasicAuth;
use src\controllers\FinalDestinationController as FinalDestinationController;
use src\controllers\PlaceController as PlaceController;
use src\controllers\PlayerController as PlayerController;
use src\controllers\GameController as GameController;
use src\controllers\DashboardController as DashboardController;


$conf = ['settings' => ['displayErrorDetails' => true, 'tmpl_dir' => 'src/templates'],
          'view' => function($c){
            $view = new \Slim\Views\Twig($c['settings']['tmpl_dir'], ['debug'=>true, 'cache'=> $c['settings']['tmpl_dir']]);
            // $basePath = rtrim(str_ireplace('index.php', '', $c['request']->getUri()->getBasePath()), '/');
            $view->addExtension(new Slim\Views\TwigExtension($c['router'], $basePath));
            return $view;
          }];
$container = new \Slim\Container($conf);
$app = new \Slim\App($container);


$app->get("/destinations[/]",function(Request $req, Response $resp, $args){
    $args["baseUrl"] = $req->getUri()->getBaseUrl();
    return (new DashboardController($this))->listDestinations($req, $resp, $args);
});

$app->get('/destinations/add[/]', function(Request $req, Response $resp, $args){
    $args["baseUrl"] = $req->getUri()->getBaseUrl();
    return (new DashboardController($this))->addDestination($req, $resp, $args);
})->setName('addDestination');

$app->post('/destinations[/]', function(Request $req, Response $resp, $args){
    $args["parsedBody"] = $req->getParsedBody();
    $args["baseUrl"] = $req->getUri()->getBaseUrl();
    return (new DashboardController($this))->addDestination($req, $resp, $args);
});


$app->run();

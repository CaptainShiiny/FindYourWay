<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use src\models\Player as Player;
use \Illuminate\Database\Eloquent\ModelNotFoundException as NotFound;

function responseJSON($status, $message_status, $data, $resp){
    $resp = $resp->withStatus($status)->withHeader(
                        "Content-type",
                        "application/json, charset=utf-8");
    $status = ["status" => [$status => $message_status]];
    $data = ["data" => $data];
    $resp->getBody()->write(json_encode([$status, $data]));
    return $resp;
}

function checkAccessManager(Request $req, Response $resp, callable $next){

    // $authorization = $req->getHeader('Authorization');
    //
    // if(empty($authorization)){
    //     return responseJSON(403, "No username or/and password.", NULL, $resp);
    // }
    //
    // $authorization = base64_decode($authorization[0]);
    // $username = substr($authorization ,0,strpos($authorization, ':'));
    // $password = substr($authorization ,strpos($authorization, ':')+1);
    //
    // if($username === "admin" && $password === "pass"){
        return $next($req, $resp);
    // }
    //
    // return responseJSON(403, "Access denied.", NULL, $resp);
}

function checkTokenPlayer(Request $req, Response $resp, callable $next){

        $id = $req->getAttribute('route')->getArgument('id');
        $authorization = $req->getHeader('Authorization');

        if(empty($authorization)){
            return responseJSON(403, "No token.", NULL, $resp);
        }

        try{
            Player::where('id','=',$id)->where('token', $authorization[0])->firstOrfail();
        }catch(NotFound $e){
            return responseJSON(403, "Invalid token.", NULL, $resp);
        }

        return $next($req, $resp);
}

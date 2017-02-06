<?php

namespace src\controllers;

abstract class AbstractController{
  private $auth;

  public $request = null;

  public function __construct($http_req){
    $this->request = $http_req;
    //$this->auth = new Authentification();
  }

    protected function redirectTo($route){
        header("location: $route");
    }

    public function responseJSON($status, $message_status, $data){
        $resp = $this->request->response
                    ->withStatus($status)
                    ->withHeader(
                            "Content-type",
                            "application/json, charset=utf-8");
        $status = ["status" => [$status => $message_status]];
        $data = ["data" => $data];
        $resp->getBody()->write(json_encode([$status, $data]));
        return $resp;
    }

}

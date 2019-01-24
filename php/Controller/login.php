<?php

include('../Aplicacao/servicomapa.php');
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json;charset=UTF-8');

$data = $_GET['data'];
$dados = json_decode($data, true); 

$mapas = new servicomapa();
$ulti  = new Base();

$usuario = $dados['username'];
$senha = $dados['password'];

$data = $mapas->logar($usuario, $senha);



?> 
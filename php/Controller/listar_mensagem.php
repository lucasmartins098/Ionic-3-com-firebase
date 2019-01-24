<?php

include('../Aplicacao/servicomapa.php');
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json;charset=UTF-8');

 
$mapas = new servicomapa();
$ulti  = new Base();
 
$id = $_GET['id'];

$data = $mapas->pegar_urs_mensage($id);
$datautf = $ulti->utf8_encode_deep($data);


echo json_encode($data);

?> 
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include('../Aplicacao/servicomapa.php');
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json;charset=UTF-8');

 
$mapas = new servicomapa();
$ulti  = new Base();

$id = '1';
$tipo = '1';

$data = $mapas->pegar_urs($id,$tipo);
$datautf = $ulti->utf8_encode_deep($data);


echo json_encode($data);

?> 
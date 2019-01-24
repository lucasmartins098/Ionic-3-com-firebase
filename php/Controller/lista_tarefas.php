<?php
include('../Aplicacao/servicomapa.php');
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json;charset=UTF-8');

 
$mapas = new servicomapa();
$ulti  = new Base();


 
if($_GET)
{
   $evento = $_GET['id'];
   $usr = $_GET['usr'];   
}



$data = $mapas->alltarefas($evento);


$datautf = $ulti->utf8_encode_deep($data);


echo json_encode($data);

?> 


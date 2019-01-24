<?php
include('../Aplicacao/servicomapa.php');
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json;charset=UTF-8');

 
$mapas = new servicomapa();
$ulti  = new Base();


 
if($_GET)
{
   $usr = $_GET['id'];   
}


$data = $mapas->meu_perfil($usr);
$datautf = $ulti->utf8_encode_deep($data);


echo json_encode($data);

?> 
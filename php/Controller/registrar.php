<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include('../Aplicacao/servicomapa.php');
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json;charset=UTF-8');

 
$mapas = new servicomapa();
$ulti  = new Base();

 
$email = $_GET['emaile']; 
$nome =  $_GET['nome'];
$senha = $_GET['senha'];

$data = $mapas->email_check($email);

if($data == false)
{
    echo json_encode(array("success" => $data));
}
else
{
    echo json_encode(array("success" => $data));
    $insert = $mapas->user_insert($email,$nome,$senha,'3');
}





?>
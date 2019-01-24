<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');
$mapas = new servicomapa();
$ulti  = new Base();


$userid = $_GET['id'];
$desid = $_GET['did'];
$mensage = $_GET['mem']; 

$usuarios = explode(",",$desid);



foreach ($usuarios as $key => $value) {
    $data = $mapas->user_mem($mensage,$userid,$value);
}



$resultado = array('resultado'=>'sucesso');
echo json_encode($resultado);

?>
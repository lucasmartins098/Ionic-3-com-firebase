<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');
$mapas = new servicomapa();
$ulti  = new Base();

$tipo = $_GET['id'];
$usuario = $_GET['usr'];
$evento = $_GET['evento'];  
$mapas->confirma_evento($tipo,$evento,$usuario);
$resultado = array('resultado'=>'sucesso');
echo json_encode($resultado);
?>
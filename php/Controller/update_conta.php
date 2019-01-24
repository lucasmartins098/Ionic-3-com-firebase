<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');
$mapas = new servicomapa();
$ulti  = new Base();


$id = $_GET['id'];
$tipo = $_GET['tipo'];

$data = $mapas->update_conta_us($id,$tipo);


$resultado = array('resultado'=>'sucesso');
echo json_encode($resultado);

?>
<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');
$mapas = new servicomapa();
$ulti  = new Base();
$id = $_GET['id'];  

$data = $mapas->del_tarefa($id);
$resultado = array('resultado'=>'sucesso'); 
echo json_encode($resultado);



?>
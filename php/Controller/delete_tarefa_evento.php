<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');
$mapas = new servicomapa();
$ulti  = new Base();

$id = $_GET['id'];
$evento  = $_GET['evento'];

$data = $mapas->deletar_tarefa_evento($id,$evento);
$resultado = array('resultado'=>'sucesso');
echo json_encode($resultado);

?>
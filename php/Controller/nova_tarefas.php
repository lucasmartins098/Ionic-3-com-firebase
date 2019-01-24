<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');
$mapas = new servicomapa();
$ulti  = new Base();
$tar = $_GET['nome'];

$data = $mapas->inserir_tarefa($tar);
$resultado = array('resultado'=>'sucesso'); 




?>
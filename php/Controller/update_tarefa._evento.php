<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');
$mapas = new servicomapa();
$ulti  = new Base();


$id = $_GET['id'];
$evento  = $_GET['evento'];
$usr = $_GET['usr'];
$tipo = $_GET['tipo'];


if($tipo == '2'){
    $data = $mapas->update_us_tar($id,$evento,$usr);
}else{
    $data = $mapas->update_us_tar($id,$evento,'1');
}

$resultado = array('resultado'=>'sucesso');
echo json_encode($resultado);

?>
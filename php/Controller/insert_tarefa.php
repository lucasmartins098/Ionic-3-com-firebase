<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');
$mapas = new servicomapa();
$ulti  = new Base();
//'Pagar Contas'
$tar = $_GET['nome'];
$idevento = $_GET['id'];
$idusario = $_GET['usu'];


$data = $mapas->checar_tarefas($tar);
$oldid = $data[0]['id'];


if($oldid)
{
 $resultado = array('resultado'=>'sucesso','id'=>$oldid); 
 $data = $mapas->inserir_evento($idusario,$oldid,$idevento);
 echo json_encode($resultado);
}
else
{
 
$data = $mapas->inserir_tarefa($tar);
$dataf = $mapas->checar_tarefas($tar);
$oldid = $dataf[0]['id'];
$resultado = array('resultado'=>'sucesso','id'=>$oldid); 
$data = $mapas->inserir_evento($idusario,$oldid,$idevento);
echo json_encode($resultado);
}



?>
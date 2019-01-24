<?php
//error_reporting(E_ALL);
//ini_set('display_errors', 1);
include('../Aplicacao/servicomapa.php');
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json;charset=UTF-8');

 
$mapas = new servicomapa();
$ulti  = new Base();

$di = $_GET['datainicio'];
$dfim = $_GET['datafim'];
$usuarios = $_GET['usuarios'];
$grupos = $_GET['grupos'];
$tarefas = $_GET['tarefas'];

$avulso = $_GET['avulso'];
$nome = $_GET['nome'];

$dataini = convertd($di);

$datafim = convertd($dfim);


$data = $mapas->evento($nome,$di,$datafim,$avulso);
if($_GET['tarefas'])
{
$tratarefas = $mapas->trata_evento($data,$tarefas,'1');
}
if( $_GET['usuarios'])
{
$tratauser = $mapas->trata_evento($data,$usuarios,'2');
}

$pegaru = $mapas->all_users();

foreach ($pegaru as $key => $value) {
    $enviados = $value['id'];
    $mensage = 'Nome: '.$nome.'.  Inicia: '.$dataini.'.  Termina:'.$datafim;
    $mensagems = $mapas->user_mem($mensage,'1',$enviados);
}

 
function convertd($data)
{
    $date=date_create($data);
    $return = date_format($date,"Y-m-d H:i:s");
    return $return;
}

$resultado = array('resultado'=>'sucesso');
echo json_encode($resultado);

?>
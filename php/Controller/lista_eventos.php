<?php
//error_reporting(E_ALL);
//ini_set('display_errors', 1);
include('../Aplicacao/servicomapa.php');
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json;charset=UTF-8');

 
$mapas = new servicomapa();
$ulti  = new Base();
$usr = $_GET['id'];
 




$data = $mapas->pegar_dados_evntos();

foreach ($data as $key => $value) {
    $id = $value['id'];
    $tare = tarefas($id,1,$usr);
    $tarenenhum = tarefas($id,2,$usr);
    $confirma = checarusuario($id,$usr);
    $incritos = checarusuarioi($id,$usr);
    $nome = $value['nome'];
    $datainicio = $value['datainicio'];
    $datafim = $value['datafim'];
    $usuarios = $value['usuarios'];
    $datapro[] = array('id'=>$id,'nome'=>$nome,'datainicio'=>$datainicio,'datafim'=>$datafim,'tarefas'=>$tare,'confirma'=>$confirma,'nenhum'=>$tarenenhum,'inscritos'=>$incritos);
    
}


function tarefas($data,$tipo,$usr){
   $mapas = new servicomapa();

   $tarefas = $mapas->alltarefas($data);
   foreach ($tarefas as $key => $value) {
       $id = $value['idusario'];
       if($tipo == 1){
       if($id == $usr){
        $retorno[] = $value['tnome'];
       }
       }
       else{
       if($id < 2){
       $retorno[] = $value['tnome'];
       } 
       }

       
   }
   
   $volta = implode(",",$retorno);
   return $volta;

}

function checarusuario($tarefas,$usr){
    $mapas = new servicomapa();
    $checar = $mapas->checar_data($tarefas,$usr); 

    if($checar){
        $conf = "Confirmado";
    } else {
        $conf = "Inconfirmado";
    }
    return $conf;
}


function checarusuarioi($tarefas,$usr){
    $mapas = new servicomapa();
    $checar = $mapas->checar_datai($tarefas,$usr); 
    $volta = implode(",",$checar);
    return $volta;
}
 
$datautf = $ulti->utf8_encode_deep($datapro);
echo json_encode($datapro);

?> 


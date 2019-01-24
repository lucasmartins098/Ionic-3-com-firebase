<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-type: application/json');
include('../Aplicacao/servicomapa.php');

 $mapas = new servicomapa();
 $ulti  = new Base();
 $id = $_GET['id'];
 $email = $_GET['email'];
 $senha = $_GET['senha'];
 $nome = $_GET['nome'];
 $tel  = $_GET['tel'];

 $data = $mapas->update_us($id,$email,$senha,$nome,$tel);
 

 $resultado = array('resultado'=>'sucesso');
 echo json_encode($resultado);


?>
<?php
include('conexao.php');


$mapa = new criaconect();

$query = "SELECT * FROM atividades";

$db = $mapa->conectanabase();
$result = $db->query($query);

$resultado  = $result->fetch_assoc();


foreach ($resultado as $key => $value) {
 echo "$key  /   $value<br>";


}



?>
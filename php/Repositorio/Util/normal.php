<html>
<meta http-equiv="refresh" content="20" />
</html>
<?php
include('conexao.php');


$mapa = new criaconect();

$query = "SELECT * FROM dados  WHERE arquivo <> '' order by id desc limit 100";



$db = $mapa->conectanabase();
$result = $db->query($query);



while ($row = $resultado  = $result->fetch_assoc())
{
    $oldnum = $row['telefone'];
    $arquivo = $row['arquivo'];
    $numecro = explode("_", $arquivo);
    $numero = $numecro[5];
    $id = $row['id'];
    update($id,$numero);
   // echo "id: $id,old:$oldnum,  numero: $numero, arquivo: $arquivo <br>";
}



function update($id,$numero){
$n = explode(".",$numero);

$total = strlen($n[0]);

if($total > 6){
    $mapa = new criaconect();
    $db = $mapa->conectanabase();
    echo $numero."<br>";
    $queryu = "UPDATE dados SET telefone = '$numero'  WHERE id='$id'";
    $result = $db->query($queryu);
}
else{
    echo "error <br>";
}

}

?>

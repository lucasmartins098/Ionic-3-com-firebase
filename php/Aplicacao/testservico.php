<?php
include('../Repositorio/repositoriomapas.php');
$servicomapas = new reposirotiomapas();


$test = $servicomapas->info('76');


var_dump($test);




?>
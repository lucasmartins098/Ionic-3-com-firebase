<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include('../Dominio/Utilitarios/class.phpmailer.php');
include('../Aplicacao/servicomapa.php');


 
$mapas = new servicomapa();
$ulti  = new Base();

$data = $_GET['data'];


$resultado = $mapas->pegar_mail($data);
$email = $resultado[0]['email'];
$senha = $resultado[0]['senha'];


$enviar = smtpmailer($email, 'bob@integrainfo.net', 'Sistema', 'Relembrando a Senha', 'sua senha : '.$senha);
var_dump($enviar);

function smtpmailer($para, $de, $de_nome, $assunto, $corpo) { 
	global $error;
	$mail = new PHPMailer();
	$mail->IsSMTP();		// Ativar SMTP
	$mail->SMTPDebug = 2;		// Debugar: 1 = erros e mensagens, 2 = mensagens apenas
	$mail->SMTPAuth = true;		// Autenticação ativada
    $mail->SMTPSecure = 'tls';  	// SSL REQUERIDO pelo GMail    
	$mail->Host = 'mail.integrainfo.net';	// SMTP utilizado
	$mail->Port = 587;  		// A porta 587 deverá estar aberta em seu servidor
	$mail->Username = 'bob@integrainfo.net';
	$mail->Password = 'EuAmoOLeo';
	$mail->SetFrom($de, $de_nome);
	$mail->Subject = $assunto;
	$mail->Body = $corpo;
	$mail->AddAddress($para);
	if(!$mail->Send()) {
		$error = 'Mail error: '.$mail->ErrorInfo; 
		return false;
	} else {
		$error = 'Mensagem enviada!';
		return true;
	}
}



?>
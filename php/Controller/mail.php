<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
include('../Dominio/Utilitarios/class.phpmailer.php');

$sender = 'bobdansei@gmail.com';
$mail_password = 'ugas2007';
$sender_name = 'bob';
$to = 'bob@integrainfo.net';
$Subject = 'teste';
$Body = 'teste';

function smtpmailer($para, $de, $de_nome, $assunto, $corpo) { 
	global $error;
	$mail = new PHPMailer();
	$mail->IsSMTP();		// Ativar SMTP
	$mail->SMTPDebug = 2;		// Debugar: 1 = erros e mensagens, 2 = mensagens apenas
	$mail->SMTPAuth = true;		// Autenticação ativada
	$mail->SMTPSecure = 'tls';	// SSL REQUERIDO pelo GMail
	$mail->Host = 'smtp.gmail.com';	// SMTP utilizado
	$mail->Port = 587;  		// A porta 587 deverá estar aberta em seu servidor
	$mail->Username = 'bobdansei@gmail.com';
	$mail->Password = 'ugas2007';
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


$enviar = smtpmailer('bob@integrainfo.net', 'bobdansei@gmail.com', 'Sistema', 'teste', 'teste');
var_dump($enviar);

?>
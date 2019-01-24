<?php
	
	include('../Repositorio/Util/conexao.php');
	class reposirotiomapas
	{
		var $db;
		function __construct()
		{
           $mapa = new criaconect();
		   $this->db = $mapa->conectanabase();
		}
        
		//bloco login
		function login($usuario, $senha)
		{
			$query  = "SELECT * FROM usuario where email = '$usuario' and senha = '$senha' ";
		    $result = $this->db->query($query);
			return $result;
		}
		

    //bloco combos     
		
		function tarefas($tarefas,$usr)
		{
			$query  = "SELECT atividades.id, atividades.idusario, atividades.idtarefa, atividades.status, atividades.idevento, eventos.nome,eventos.datainicio,eventos.datafim,usuario.nome as usnome,tarefas.nome as tnome,status.nome as estado FROM atividades LEFT JOIN usuario on atividades.idusario = usuario.id LEFT JOIN tarefas on tarefas.id = atividades.idtarefa LEFT JOIN status on status.id = atividades.status LEFT JOIN eventos on eventos.id = atividades.idevento where atividades.idevento = '$tarefas' and atividades.idusario = '$usr'";
		    $result = $this->db->query($query);
			return $result;
		}

		function tt_tarefas($tarefas) 
		{
			$query  = "SELECT atividades.id, atividades.idusario, atividades.idtarefa, atividades.status, atividades.idevento, eventos.nome,eventos.datainicio,eventos.datafim,usuario.nome as usnome,tarefas.nome as tnome,status.nome as estado FROM atividades LEFT JOIN usuario on atividades.idusario = usuario.id LEFT JOIN tarefas on tarefas.id = atividades.idtarefa LEFT JOIN status on status.id = atividades.status LEFT JOIN eventos on eventos.id = atividades.idevento where atividades.idevento = '$tarefas'";
		    $result = $this->db->query($query);
			return $result;
		}

		function tarefasn($tarefas)
		{
			$query  = "SELECT atividades.id, atividades.idusario, atividades.idtarefa, atividades.status, atividades.idevento, eventos.nome,eventos.datainicio,eventos.datafim,usuario.nome as usnome,tarefas.nome as tnome,status.nome as estado FROM atividades LEFT JOIN usuario on atividades.idusario = usuario.id LEFT JOIN tarefas on tarefas.id = atividades.idtarefa LEFT JOIN status on status.id = atividades.status LEFT JOIN eventos on eventos.id = atividades.idevento where atividades.idevento = '$tarefas' and atividades.idusario = '1'";
		    $result = $this->db->query($query);
			return $result;
		}

		function eventos()
		{
			$query  = "SELECT * from eventos"; 
		    $result = $this->db->query($query);
			return $result;
		}

		function checkev($evento,$usr)
		{
			$query  = "SELECT * FROM confirma WHERE even = '$evento' and usuario = '$usr'";
		    $result = $this->db->query($query);
			return $result;
		}

		function checkevi($evento,$usr)
		{
			$query  = "SELECT inscritos.even,inscritos.usuario as id,usuario.nome FROM inscritos INNER join usuario on inscritos.usuario = usuario.id WHERE inscritos.even = '$evento'"; 
		    $result = $this->db->query($query);
			return $result;
		}
		
		function checktar($tarefas)  
		{
			$set = $this->db->set_charset("utf8");
			$query  = "SELECT * FROM tarefas WHERE nome = '$tarefas'";
		    $result = $this->db->query($query);
			return $result;
		}

		function intar($tar)
		{
			$set = $this->db->set_charset("utf8");
			$query  = "INSERT INTO `tarefas`(`nome`) VALUES ('$tar')";
		    $result = $this->db->query($query);
			return $result;
		}

		function insereven($idusario,$idtarefa,$idevento)
		{
			$set = $this->db->set_charset("utf8");
			$query  = "INSERT INTO `atividades`(`idusario`, `idtarefa`, `status`, `idevento`) VALUES ('$idusario','$idtarefa','1','$idevento')";
		    $result = $this->db->query($query);
			return $result;
		}


		function del_event_tarefa($id,$evento)
		{
			$query  = "DELETE FROM atividades WHERE id = '$id' and idevento = '$evento'";
		    $result = $this->db->query($query);
			return $result;

		}
		
		function up_usu_tar($id,$evento,$usuario)
		{
			$set = $this->db->set_charset("utf8");
			$query  = "UPDATE atividades SET idusario='$usuario' WHERE idevento = '$evento' and id = '$id'";
		    $result = $this->db->query($query);
			return $result;		
		}

		function confirmar($tipo,$evento,$usr)
		{
			$set = $this->db->set_charset("utf8");
            if($tipo == 1){
			  $query  = "INSERT INTO confirma(even,usuario) VALUES ('$evento','$usr')"; 
			}else{
			  $query  = "DELETE FROM confirma where even = '$evento' and usuario = '$usr'";
			}

			$result = $this->db->query($query);
			return $result;
		}
		function grupos()  
		{
			$query  = "SELECT * FROM grupos ";
		    $result = $this->db->query($query);
			return $result;
		}
		function pegar_usr($id,$tipo)
		{
			$query  = "SELECT usuario.id, usuario.nome, usuario.senha, usuario.tipousu, usuario.email, usuario.tel,tipousr.tipo FROM usuario LEFT JOIN tipousr on usuario.tipousu = tipousr.id where usuario.id > 1";
            //$query  = "SELECT * FROM usuario where id in ('$id')";
		    $result = $this->db->query($query);
			return $result; 
		}

        function checar_email($email)
		{
			$query  = "SELECT email FROM usuario  where email = '$email'";
		    $result = $this->db->query($query);
			return $result; 
		}

		function update_usr($id,$email,$senha,$nome,$tel){ 
			$set = $this->db->set_charset("utf8");
			$query  = "UPDATE usuario SET nome='$nome',senha='$senha',email='$email',tel='$tel' WHERE id = '$id'";
			$result = $this->db->query($query);
			return $result; 
		}

		function inserir_user($email,$nome,$senha,$tipo)
		{
			$set = $this->db->set_charset("utf8");
			$query  = "INSERT INTO usuario(email,nome,senha,tipousu,tel) VALUES ('$email','$nome','$senha','$tipo','1')";
		    $result = $this->db->query($query);
			return $result; 
		}


		function p_tarefas()  
		{
			$query  = "SELECT * FROM tarefas where id > 1";
		    $result = $this->db->query($query);
			return $result;
		}

	   function inserir_evento($nome,$dataini,$datafim,$avulso)
	   {
	       $set = $this->db->set_charset("utf8");
		   $query  = "INSERT INTO `eventos`(nome,datainicio,datafim,avulso,usuarios) VALUES ('$nome','$dataini','$datafim','$avulso','1')";
		   $result = $this->db->query($query);
		   $resultado = $this->db->insert_id;
		   return $resultado;
	   }

	   function ins_tarefas($tarefas,$evento)
	   {
		$set = $this->db->set_charset("utf8");
		$query  = "INSERT INTO atividades(idusario,idtarefa,status,idevento) VALUES ('1','$tarefas','1','$evento')";
		$result = $this->db->query($query);
		return $result;

	   }

	   function ins_inscrit($usr,$evento)
	   {
		$set = $this->db->set_charset("utf8");
		$query  = "INSERT INTO inscritos(even, usuario) VALUES ('$usr','$evento')";
		$result = $this->db->query($query);
		return $result; 
	   }

	   function del_event($id)
	   {
		$query  = "DELETE FROM `eventos` WHERE id = '$id'";
		$result = $this->db->query($query);
		return $result; 
	   }

	   function perfil($id)
	   {
		$query = "SELECT * FROM usuario WHERE id = '$id'";
		$result = $this->db->query($query);
		return $result;    
	   }

	   function mensagen($id)
	   {
		 $query = "SELECT mensage.id,mensage.mensagem,mensage.hora,mensage.userid,mensage.desid,mensage.status,usuario.nome,destinatario.nome as desti FROM mensage LEFT JOIN usuario on mensage.userid = usuario.id LEFT JOIN destinatario on mensage.desid = destinatario.id where mensage.desid = '$id'";
	     $result = $this->db->query($query);
		 return $result;  
		}

		function insmens($mensage,$userid,$desid)
		{
			$set = $this->db->set_charset("utf8");
			$query= "INSERT INTO mensage(mensagem,userid,desid,status) VALUES ('$mensage','$userid','$desid','1')";
			$result = $this->db->query($query);
		    return $result;  
		}

		function idelmens($id)
		{
			$query = "DELETE FROM  mensage where id = '$id'";
			$result = $this->db->query($query);
		    return $result;  
		}

		function updateconta($id,$tipo){
			$set = $this->db->set_charset("utf8");
			$query = "UPDATE usuario SET tipousu = '$tipo' WHERE id = '$id'"; 
			$result = $this->db->query($query);
		    return $result;  
		}

		function listas_tar()
		{
			$query = "SELECT * FROM tarefas where id > 1";
			$result = $this->db->query($query);
			return $result; 
		}

		function up_tar($nome,$id) 
		{   
			$set = $this->db->set_charset("utf8");
			$query = "UPDATE tarefas SET nome='$nome' WHERE id = '$id'";
			$result = $this->db->query($query);
			return $result; 
		}

		function del_tar($id)
		{
			$query = "DELETE FROM tarefas where id = '$id'";
			$result = $this->db->query($query);
			return $result; 
		}
		 
		function listartodos()
		{
			$query = "SELECT  * from usuario";
			$result = $this->db->query($query);
			return $result; 
		}

		function mail($mail)
		{
			$query = "SELECT  * from usuario where email = '$mail'";
			$result = $this->db->query($query);
			return $result; 
		}
	} 
   
 
	
	
?>





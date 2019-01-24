<?php
	include('../Repositorio/repositoriomapas.php');
	include('../Dominio/Utilitarios/Base.php');
	class servicomapa
	{

 
	   //logar  
		
		function setcookies($nome,$valor)
		{
			setcookie($nome, $valor, time() + (3600 * 24), '/');
		}

		function logar($usuario, $senha)
		{

			$servicomapas = new reposirotiomapas();
			$ulti         = new Base();
			$data  = $servicomapas->login($usuario, $senha);
			while ($row = $data->fetch_assoc())
			{
				
				$idusario = $row['id'];
				$tipodousa = $row['tipousu'];
				$nome = $row['nome'];
			}

            if ($idusario) {

            $result = array("success" => true, "message"=>$idusario,"tipo"=>$tipodousa,"nome"=>$nome);

            setcookie('usuario', $usuario, time() + (3600 * 24), '/');
			setcookie('idusuario', $idusario, time() + (3600 * 24), '/');
			setcookie('tipousa', $tipodousa, time() + (3600 * 24), '/');
			
			//echo "ok";
            echo json_encode($result);


        } else {

            $usuario = "";
            $idusario = "";

            setcookie('usuario', $usuario, time() + (3600 * 24), '/');
			setcookie('idusuario', $idusario, time() + (3600 * 24), '/');
			setcookie('ramal',null);
			setcookie('arquivo',null);
            echo json_encode(array("success" => false, "message" => "Autenticação Falhou","tipo"=>'0',"nome"=>'fail'));

        }


		}
	
		// bloco mobile

		function pegar_dados_evntos()
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->eventos();  
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		} 
		 
		return $resultado;
		}

		function pegar_dados_tarefas($evento,$usr)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->tarefas($evento,$usr);   
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		}

		return $resultado;
		}

		function alltarefas($evento)
		{
			
			$servicomapas = new reposirotiomapas();
			$ulti         = new Base();
			$data = $servicomapas->tt_tarefas($evento);   
			while ($row = $data->fetch_assoc())
			{
				$resultado[] = $row;
			} 
			
			return $resultado;
		}

		function pegar_dados_tarefasn($evento)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->tarefasn($evento);  
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		} 
		
		return $resultado;
		}


		function checar_data($evdata,$usr){

		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->checkev($evdata,$usr);
		while ($row = $data->fetch_assoc())
	    {
			$resultado[] = $row;
		} 
		
		return $resultado;
		}

		function checar_datai($evdata,$usr){

			$servicomapas = new reposirotiomapas();
			$ulti         = new Base();
			$data = $servicomapas->checkevi($evdata,$usr); 
			while ($row = $data->fetch_assoc())
			{
				$resultado[] = $row['nome'];
			} 
			
			return $resultado;
		}


		function checar_tarefas($tar)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->checktar($tar);  
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		} 
		
		return $resultado;
		}
		
		function inserir_tarefa($tarefa)
		{
        $servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->intar($tarefa);
		return $data;
		}

		function inserir_evento($idusario,$idtarefa,$idevento)
		{
        $servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->insereven($idusario,$idtarefa,$idevento);
		return $data;
		}


		function deletar_tarefa_evento($id,$evento)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->del_event_tarefa($id,$evento);
		return $data;
		}

		function update_us_tar($id,$evento,$usuario)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->up_usu_tar($id,$evento,$usuario);
		return $data;
		}


		function update_us($id,$email,$senha,$nome,$tel)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->update_usr($id,$email,$senha,$nome,$tel);
		return $data;
		}

		function update_conta_us($id,$tipo)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->updateconta($id,$tipo);
		return $data;
		}

		function confirma_evento($tipo,$evento,$usuario)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->confirmar($tipo,$evento,$usuario);
		return $data;
		}

		function pegar_grupos()
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->grupos();
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		} 
		
		return $resultado;
		}

		function pegar_urs($id,$tipo)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->pegar_usr($id,$tipo);
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		} 
		
		return $resultado;
		}

		function pegar_urs_mensage($id)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->mensagen($id);
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		} 
		
		return $resultado;
		}

		function pegar_tarefas()
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->p_tarefas();
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		} 
		
		return $resultado;
		}

		function evento($nome,$dataini,$datafim,$avulso)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->inserir_evento($nome,$dataini,$datafim,$avulso);
		return $data;
		}

		function trata_evento($evento,$data,$tipo)
		{
			$servicomapas = new reposirotiomapas();
		    $ulti         = new Base();
			 $array = explode(",",$data);
			 foreach ($array as $key => $value) {
				 if($tipo == '1'){
					$data = $servicomapas->ins_tarefas($value,$evento);
				 }
				 else{
                    $data = $servicomapas->ins_inscrit($value,$evento);
				 }
			 }

		} 

		function delete_evento($id)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->del_event($id);
		return $data;
		}


		function email_check($email)
		{
		$servicomapas = new reposirotiomapas();function update_us($id,$email,$senha,$nome,$tel)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->update_usr($id,$email,$senha,$nome,$tel);
		return $data;
		}
		$ulti         = new Base();
		$resultado = null;
		$data = $servicomapas->checar_email($email);  
		while ($row = $data->fetch_assoc())
		{
			$resultado = $row['email'];
		} 
		 
		if($resultado == $email)
		{
			return false;
		}
		else
		{
			return true;
		}
		
		}

        function user_insert($email,$nome,$senha,$tipo)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->inserir_user($email,$nome,$senha,$tipo);
		return $data;
		}


		function meu_perfil($id)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$resultado = null;
		$data = $servicomapas->perfil($id);  
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		}  
		
		return $resultado;
		}

		function all_users()
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$resultado = null;
		$data = $servicomapas->listartodos();  
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		}  
		
		return $resultado;
		}


		function user_mem($mensage,$userid,$desid)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->insmens($mensage,$userid,$desid);
		return $data;
		}

		function del_mem($id)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->idelmens($id);
		return $data;
		}


		function listar_todas_tarefas()
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$resultado = null;
		$data = $servicomapas->listas_tar();   
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		}  
		
		return $resultado;
		}


		function del_tarefa($id)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->del_tar($id);
		return $data;
		}

		function up_tarefa($nome,$id)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$data = $servicomapas->up_tar($nome,$id);
		return $data;
		}


		function pegar_mail($mail)
		{
		$servicomapas = new reposirotiomapas();
		$ulti         = new Base();
		$resultado = null;
		$data = $servicomapas->mail($mail);   
		while ($row = $data->fetch_assoc())
		{
			$resultado[] = $row;
		}  
		
		return $resultado;
		}


	}
?>

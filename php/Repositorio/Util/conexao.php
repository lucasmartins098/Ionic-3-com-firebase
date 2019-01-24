<?php


/*
https://sara.integrainfo.net/app/
var $host="localhost";
    var $username="casa";    // dados do servidor
    Var $password="KaZa%2013$";
    var $db="integra_casa";
*/
class criaconect //cria a conecao
{
    var $host="localhost";
    var $username="root";    
    Var $password="bob";
    var $db="casa";
    var $myconn;

    function conectanabase() // cria uma conecao
    {

        $conn= mysqli_connect($this->host,$this->username,$this->password,$this->db);
        

        if(!$conn)// testa o badulaq
        {
            die ("Não funcionou");
        }
        else
        {
            $this->myconn = $conn;
        }

        return $this->myconn;

    }



    function closeConnection() // finaliza a conec
    {
        mysql_close($this->myconn);

      //  echo "conecao fechada";
    }

}

?>
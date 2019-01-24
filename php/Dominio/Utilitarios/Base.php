<?php
 
function trataErros($errno, $errstr, $errfile, $errline)
{
   // $string = "$errno - $errstr em $errfile na linha $errline\n";
   // file_put_contents('error.log', $string, FILE_APPEND);
    throw new Exception($errstr);
}

class Base { 
    

    
    
    function ListaSimplesTipoConsulta()
    {
        $Lista= Array
        (           
            array("ID"=> 1, "Nome"=> "Ativo"),
            array("ID"=>2, "Nome"=> "Inativo")
        );
        
          echo json_encode($Lista);

    }
    
   function utf8_encode_deep(&$input) {

    if (is_string($input)) {
        $input = utf8_encode($input);
    } else if (is_array($input)) {
        foreach ($input as &$value) {
            $this->utf8_encode_deep($value);
        }

        unset($value);
    } else if (is_object($input)) {
        $vars = array_keys(get_object_vars($input));

        foreach ($vars as $var) {
            $this->utf8_encode_deep($input->$var);
        }
    }
    
}






}
?>
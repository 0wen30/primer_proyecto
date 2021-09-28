<?php

include_once 'config.php';

class Conexion{
    protected static function iniciar(){
        try {
            $conexion = new PDO(SGBD,USER,PASS,ERRORES);
        } catch (PDOException $e) {
            echo"error ".$e -> getMessage();
            return null;
        }
        return $conexion;
    }
}

?>
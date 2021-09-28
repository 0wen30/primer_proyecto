<?php
include 'consultas.php';

if(Consultas::estaRegistrado($_POST['user'])){
    echo 'El usuario ya esta registrado';
}else if($_POST['pass'] !== $_POST['confirm']){
    echo 'Las contraseñas no coinciden';
}else if($_POST['pass'] == "" || $_POST['user'] == ""){
    echo 'Llena todos los campos';
}else if(tieneespacios($_POST['user'])){
    echo 'El nombre de usuario solo admite texto';
}else{
    Consultas::registrar($_POST['user'],$_POST['pass']);
    echo 'Registro realizado';
}

function tieneespacios($str){
    $str = trim($str);
    if ($str !== '') {
        $pattern = '/^[a-zA-Z, ]*$/';
        if (preg_match($pattern, $str)) {
            return true;   
        }
    }
    return false;   
}
?>

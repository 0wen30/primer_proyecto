<?php include 'crearSesion.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="estilos.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet">
</head>
    <?php
    if(!isset($_SESSION['user'])){
        include "login.php";
    }else{
        include "perfil.php";
    }
    ?>
</html>
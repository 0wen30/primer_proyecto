<?php
include 'consultas.php';

if(!Consultas::estaRegistrado($_POST['user']))
    Consultas::registrar($_POST['user'],$_POST['pass']);

?>
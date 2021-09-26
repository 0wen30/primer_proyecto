let boton = document.getElementById('entrar');
let boton_reg = document.getElementById('registrar');
let modo_login = document.getElementById('enlaceLogin');
let modo_registro = document.getElementById('enlaceRegistro');
let modoRegistro = false;

boton.addEventListener('click',()=>{
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;
    if(usuario != "" && clave != "") {
        let datos = new FormData();
        datos.append('user',usuario);
        datos.append('pass',clave);
        let envio = {method:'POST',body:datos}
        fetch('controladorSesion.php',envio)
            .then(resp =>resp.json())
            .then(resp=>resp == 1 ? window.location.reload() : alert('revisa tus datos'))
    }else{
        alert('no has llenado el formulario correctamente');
    }
});

boton_reg.addEventListener('click',()=>{
    let usuario = document.getElementById('usuarior').value;
    let clave1 = document.getElementById('clave1').value;
    let clave2 = document.getElementById('clave2').value;
    if(usuario != "" && clave1 != "" && clave1 === clave2 ) {
        let datos = new FormData();
        datos.append('user',usuario);
        datos.append('pass',clave1);
        let envio = {method:'POST',body:datos}
        fetch('controladorRegistro.php',envio)
        .then(resp=>mostrarLogin())
    }else{
        alert('no has llenado el formulario correctamente');
    }
});

modo_registro.addEventListener('click',()=>{
    if(!modoRegistro){
        modoRegistro = true
        document.getElementById('contenedor_registro').style.display = 'flex';
        document.getElementById('contenedor_login').style.display = 'none';
    }
});

const mostrarLogin = () =>{
    if(modoRegistro){
        modoRegistro = false;
        document.getElementById('contenedor_registro').style.display = 'none';
        document.getElementById('contenedor_login').style.display = 'flex';
    }
};

modo_login.addEventListener('click', mostrarLogin);

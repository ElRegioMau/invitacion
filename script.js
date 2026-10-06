const usuarioAdmin = "admin";
const contrasenaAdmin = "12345";

const usuarioVentas = "ventas"
const contrasenaVentas = "12345"

function iniciarSesion() {

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (
        usuario == usuarioVentas
        && 
        contrasena == contrasenaVentas
    ) {
        window.location.href = "formulario_personalizado/index.html";
    } 
    if(
        usuario == usuarioAdmin
        &&
        contrasena == contrasenaAdmin
    ){
        window.location.href ="administrador/index.html"
    }

}
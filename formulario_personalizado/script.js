var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    var modelo = document.getElementById("modelo").value;
    var precio = document.getElementById("precio").value;
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;

    var datos = new URLSearchParams();

    datos.append("modelo", modelo);
    datos.append("precio", precio);
    datos.append("nombre", nombre);
    datos.append("telefono", telefono);

    fetch("https://script.google.com/macros/s/AKfycbzkWbiwCOHcJmq9dnnAK7NiU6HJuSuz4TwrWjxm8oTdv7D4uyEg9w8Lomd5QN2XZ205Vw/exec", {
        method: "POST",
        mode: "no-cors",
        body: datos
    });

    alert("Venta guardada");

});
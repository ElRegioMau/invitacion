var url = "https://script.google.com/macros/s/AKfycbzkWbiwCOHcJmq9dnnAK7NiU6HJuSuz4TwrWjxm8oTdv7D4uyEg9w8Lomd5QN2XZ205Vw/exec";

fetch(url)
    .then(function(respuesta) {

        return respuesta.json();

    })
    .then(function(datos) {

        mostrarVentas(datos);

    });


function mostrarVentas(datos) {

    var tabla = document.getElementById("tablaVentas");

    var totalVentas = 0;
    var totalDinero = 0;

    for (var i = 1; i < datos.length; i++) {

        var modelo = datos[i][0];
        var precio = datos[i][1];
        var nombre = datos[i][2];
        var telefono = datos[i][3];

        tabla.innerHTML +=
            "<tr>" +
                "<td>" + modelo + "</td>" +
                "<td>$" + precio + "</td>" +
                "<td>" + nombre + "</td>" +
                "<td>" + telefono + "</td>" +
            "</tr>";

        totalVentas = totalVentas + 1;

        totalDinero = totalDinero + Number(precio);
    }

    document.getElementById("totalVentas").innerHTML = totalVentas;

    document.getElementById("totalDinero").innerHTML =
        "$" + totalDinero;

}
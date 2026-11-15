document.addEventListener("DOMContentLoaded", function () {

    const mensaje = document.getElementById("mensajeBienvenida");
    const boton = document.getElementById("btnAceptar");

    boton.addEventListener("click", function () {
        mensaje.style.display = "none";
    });

});
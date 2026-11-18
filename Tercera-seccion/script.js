
const formularioAsesoria = document.getElementById("asesoria-formulario");
const necesidadAsesoria = document.getElementById("asesoria-necesidad");
const resultadoAsesoria = document.getElementById("asesoria-resultado");
const imagenResultado = document.getElementById("asesoria-imagen-resultado");
const textoResultado = document.getElementById("asesoria-texto-resultado");

formularioAsesoria.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const necesidad = necesidadAsesoria.value;
    let recomendacion = "";
    let imagen = "";
    let nombreImagen = "";

    if (necesidad === "puerta") {
        recomendacion = "Te recomendamos las bisagras, ya que permiten abrir y cerrar las puertas de tus muebles.";
        imagen = "imagenes-vectoriales/bisagras.svg";
        nombreImagen = "Bisagras para muebles";
    } else if (necesidad === "cajon") {
        recomendacion = "Te recomendamos las correderas, porque permiten que los cajones se deslicen correctamente.";
        imagen = "imagenes-vectoriales/corredora.svg";
        nombreImagen = "Correderas para muebles";
    } else if (necesidad === "acabado") {
        recomendacion = "Te recomendamos las manijas y herrajes, ideales para mejorar el acabado y la apariencia de tus muebles.";
        imagen = "imagenes-vectoriales/cierre.svg";
        nombreImagen = "Manijas y herrajes";
    }
    imagenResultado.src = imagen;
    imagenResultado.alt = nombreImagen;
    textoResultado.textContent = recomendacion;
    resultadoAsesoria.classList.add("asesoria-resultado-visible");
});

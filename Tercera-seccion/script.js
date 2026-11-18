
const formularioAsesoria = document.getElementById("asesoria-formulario");
const necesidadAsesoria = document.getElementById("asesoria-necesidad");
const resultadoAsesoria = document.getElementById("asesoria-resultado");

formularioAsesoria.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const necesidad = necesidadAsesoria.value;
    let recomendacion = "";

    if (necesidad === "puerta") {
        recomendacion = "Te recomendamos las bisagras, ya que permiten abrir y cerrar las puertas de tus muebles.";
    } else if (necesidad === "cajon") {
        recomendacion = "Te recomendamos las correderas, porque permiten que los cajones se deslicen correctamente.";
    } else if (necesidad === "acabado") {
        recomendacion = "Te recomendamos las manijas y herrajes, ideales para mejorar el acabado y la apariencia de tus muebles.";
    }

    resultadoAsesoria.textContent = recomendacion;
    resultadoAsesoria.style.display = "block";
});

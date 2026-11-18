// Buscador: oculta los productos que no coinciden y las categorías vacías
function buscar() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const productos = document.querySelectorAll(".producto");
    const categorias = document.querySelectorAll(".categorias");

    // 1. Mostrar u ocultar cada producto
    for (let i = 0; i < productos.length; i++) {
        const nombre = productos[i].querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            productos[i].style.display = "";
        } else {
            productos[i].style.display = "none";
        }
    }

    // 2. Ocultar las categorías que se quedaron sin productos visibles
    for (let i = 0; i < categorias.length; i++) {
        const items = categorias[i].querySelectorAll(".producto");
        let hayVisibles = false;

        for (let j = 0; j < items.length; j++) {
            if (items[j].style.display !== "none") {
                hayVisibles = true;
            }
        }

        if (hayVisibles) {
            categorias[i].style.display = "";
        } else {
            categorias[i].style.display = "none";
        }
    }
}

// Ventana flotante: copia los datos del producto al modal y lo muestra
function abrirVentana(producto) {
    document.getElementById("modal-imagen").src = producto.querySelector("img").src;
    document.getElementById("modal-titulo").textContent = producto.querySelector("h3").textContent;
    document.getElementById("modal-descripcion").textContent = producto.querySelector("p").textContent;
    document.getElementById("modal").style.display = "flex";
}

function cerrarVentana() {
    document.getElementById("modal").style.display = "none";
}

// Entrada y salida: confirm, prompt y alert
function cotizar() {
    const quiere = confirm("¿Deseas cotizar este producto?");

    if (quiere) {
        const nombre = prompt("¿Cuál es tu nombre?");
        alert("Gracias " + nombre + ", te contactaremos pronto.");
    }
}
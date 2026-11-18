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

(function () {
    const form = document.getElementById("formOpinion");
    const aviso = document.getElementById("opinionAviso");
    const avisoTexto = document.getElementById("opinionAvisoTexto");
    const btnCerrar = document.getElementById("opinionAvisoCerrar");

    if (!form || !aviso) return;

    const reglas = [
        { id: "opNombre", error: "errNombre", mensaje: "Escribe tu nombre.",
            valida: v => v.trim().length >= 2 },
        { id: "opCorreo", error: "errCorreo", mensaje: "Escribe un correo válido.",
            valida: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
        { id: "opCalificacion", error: "errCalificacion", mensaje: "Elige una calificación.",
            valida: v => v !== "" },
        { id: "opTema", error: "errTema", mensaje: "Elige un tema.",
            valida: v => v !== "" },
        { id: "opComentario", error: "errComentario", mensaje: "Cuéntanos un poco más (mínimo 10 caracteres).",
            valida: v => v.trim().length >= 10 }
    ];

    function validar() {
        let todoBien = true;

        reglas.forEach(function (r) {
            const campo = document.getElementById(r.id);
            const error = document.getElementById(r.error);

            if (r.valida(campo.value)) {
                error.textContent = "";
                campo.classList.remove("opinion-invalido");
            } else {
                error.textContent = r.mensaje;
                campo.classList.add("opinion-invalido");
                todoBien = false;
            }
        });

        return todoBien;
    }

    function abrirAviso(nombre) {
        avisoTexto.textContent = "Gracias, " + nombre + ". Tu opinión nos ayuda a mejorar.";
        aviso.hidden = false;
    }

    function cerrarAviso() {
        aviso.hidden = true;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // evita que la página se recargue

        if (!validar()) return;

        const nombre = document.getElementById("opNombre").value.trim();
        abrirAviso(nombre);
        form.reset();
    });

    reglas.forEach(function (r) {
        document.getElementById(r.id).addEventListener("input", function () {
            document.getElementById(r.error).textContent = "";
            this.classList.remove("opinion-invalido");
        });
    });

    btnCerrar.addEventListener("click", cerrarAviso);
    aviso.addEventListener("click", function (e) {
        if (e.target === aviso) cerrarAviso(); // clic fuera de la caja
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") cerrarAviso();
    });
})();
<div id="mensajeBienvenida" class="mensaje">
    <div class="mensaje-contenido">
        <h2>¡Bienvenido a EMMALUX!</h2>
        <p>
            Conoce nuestros productos y soluciones
            para tus proyectos de muebles y decoración.
        </p>
        <button onclick="cerrarMensaje()">Aceptar</button>
    </div>
</div>

<script>
    function cerrarMensaje() {
    document.getElementById("mensajeBienvenida").style.display = "none"
    }
</script>
// JavaScript Básico - Portafolio v1 (2016)

// 1. Menú hamburguesa para dispositivos móviles
var btnMenu = document.getElementById("btnMenu");
var navLinks = document.getElementById("navLinks");

if (btnMenu) {
    btnMenu.addEventListener("click", function () {
        navLinks.classList.toggle("activo");
    });
}

// 2. Botón Descargar Curriculum
var btnCurriculum = document.getElementById("btnCurriculum");
if (btnCurriculum) {
    btnCurriculum.addEventListener("click", function () {
        alert("Descargando Currículum Vitae en formato PDF...");
    });
}

// 3. Validación básica del formulario de Contacto
var formContacto = document.getElementById("formContacto");
if (formContacto) {
    formContacto.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var telefono = document.getElementById("telefono").value;

        if (nombre === "" || correo === "" || telefono === "") {
            alert("Por favor, complete los campos obligatorios (*).");
            return;
        }

        alert("¡Gracias " + nombre + "! Tu consulta fue enviada correctamente.");
        formContacto.reset();
    });
}

// 4. Botón Donate en el pie de página
var btnDonate = document.getElementById("btnDonate");
if (btnDonate) {
    btnDonate.addEventListener("click", function () {
        alert("¡Gracias por apoyar este proyecto de Portafolio!");
    });
}

// Guardar el nombre del usuario en localStorage
function guardarUsuario(nombre) {
    localStorage.setItem("nombreUsuario", nombre);
}

// Obtener el nombre del usuario de localStorage
function obtenerUsuario() {
    return localStorage.getItem("nombreUsuario");
}

// Eliminar el nombre del usuario de localStorage (Cerrar sesión)
function cerrarSesion() {
    localStorage.removeItem("nombreUsuario");
    actualizarVista(); // Actualizar la vista después de cerrar sesión
}

// Actualizar la vista dependiendo de si el usuario está logueado o no
function actualizarVista() {
    const nombreUsuario = obtenerUsuario();
    const loginLink = document.getElementById("login-link");
    const logoutLink = document.getElementById("logout-link");

    if (nombreUsuario) {
        loginLink.textContent = nombreUsuario;
        loginLink.href = "#";
        logoutLink.style.display = "inline-block"; // Mostrar "Cerrar sesión"
    } else {
        loginLink.textContent = "Iniciar sesión";
        logoutLink.style.display = "none"; // Ocultar "Cerrar sesión" si no hay usuario
    }
}

// Función para manejar el envío del formulario de inicio de sesión
function guardarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    guardarUsuario(nombre);
    window.location.href = "index.html"; // Redirigir al inicio
}

// Llamar a actualizarVista cuando la página se carga
document.addEventListener("DOMContentLoaded", actualizarVista);

// Agregar el evento de "Cerrar sesión" si está presente el enlace
const logoutButton = document.getElementById("logout-link");
if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir la acción predeterminada del enlace
        cerrarSesion();
        window.location.href = "index.html"; // Redirigir después de cerrar sesión
    });
}

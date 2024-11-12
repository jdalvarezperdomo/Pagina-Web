
function guardarUsuario(nombre) {
    localStorage.setItem("nombreUsuario", nombre);
}


function obtenerUsuario() {
    return localStorage.getItem("nombreUsuario");
}


function cerrarSesion() {
    localStorage.removeItem("nombreUsuario");
    actualizarVista(); 
}


function actualizarVista() {
    const nombreUsuario = obtenerUsuario();
    const loginLink = document.getElementById("login-link");
    const logoutLink = document.getElementById("logout-link");

    if (nombreUsuario) {
        loginLink.textContent = nombreUsuario;
        loginLink.href = "#";
        logoutLink.style.display = "inline-block"; 
    } else {
        loginLink.textContent = "Iniciar sesión";
        logoutLink.style.display = "none"; 
    }
}


function guardarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    guardarUsuario(nombre);
    window.location.href = "index.html"; 
}


document.addEventListener("DOMContentLoaded", actualizarVista);


const logoutButton = document.getElementById("logout-link");
if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        cerrarSesion();
        window.location.href = "index.html"; 
    });
}

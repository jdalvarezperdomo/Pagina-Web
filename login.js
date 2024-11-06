document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    // Guardar el nombre en el localStorage
    localStorage.setItem("nombreUsuario", nombre);

    // Redirigir a la página principal (index.html)
    window.location.href = "index.html";
});

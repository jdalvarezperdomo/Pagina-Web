document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    
    localStorage.setItem("nombreUsuario", nombre);

    
    window.location.href = "index.html";
});
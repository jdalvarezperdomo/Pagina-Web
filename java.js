let cart = JSON.parse(localStorage.getItem("cart")) || []; // Cargar el carrito del localStorage

function addToCart(id, name, price) {
    const item = { id, name, price };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart)); // Guardar el carrito en localStorage
    alert(`${name} añadido al carrito.`);
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("carrito-items");
    cartItemsContainer.innerHTML = ""; // Limpiar la vista actual

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "moto"; // Puedes ajustar el estilo según necesites
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p class="precio">$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); // Actualizar el carrito en localStorage
    updateCartDisplay();
}

function pagar() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Total a pagar: $${total.toFixed(2)}`);
    // Aquí puedes agregar lógica adicional para procesar el pago
    cart = []; // Vaciar el carrito después del pago
    localStorage.removeItem("cart"); // Eliminar el carrito del localStorage
    updateCartDisplay(); // Actualizar la vista
}

// Llamar a la función para actualizar la vista del carrito al cargar la página
updateCartDisplay();


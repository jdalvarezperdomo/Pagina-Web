let cart = JSON.parse(localStorage.getItem("cart")) || []; 

function addToCart(id, name, price) {
    const motoImage = document.querySelector(`.moto[data-id="${id}"] img`).src; 
    const item = { id, name, price, motoImage }; 
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    alert(`${name} añadido al carrito.`);
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("carrito-items");
    cartItemsContainer.innerHTML = ""; 

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "moto"; 
        itemDiv.innerHTML = `
            <img src="${item.motoImage}" alt="${item.name}" class="moto-img">
            <h3>${item.name}</h3>
            <p class="precio">$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    updateCartDisplay();
}

function pagar() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Total a pagar: $${total.toFixed(2)}`);
    
    cart = []; 
    localStorage.removeItem("cart"); 
    updateCartDisplay(); 
}


updateCartDisplay();
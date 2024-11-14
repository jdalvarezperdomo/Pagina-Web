

let cart = JSON.parse(localStorage.getItem("cart")) || []; 


const quantities = {};


function adjustQuantity(id, amount) {
    if (!quantities[id]) quantities[id] = 0; 
    quantities[id] += amount; 
    if (quantities[id] < 0) quantities[id] = 0; 
    document.getElementById(`quantity-${id}`).textContent = quantities[id]; 
}


function addToCart(id, name, price) {
    const quantity = quantities[id] || 1; 
    const motoImage = document.querySelector(`.moto[data-id="${id}"] img`).src; 

    
    const item = { id, name, price, motoImage, quantity };
    
    
    const existingItemIndex = cart.findIndex(product => product.id === id);
    
    if (existingItemIndex !== -1) {
        
        cart[existingItemIndex].quantity += quantity;
    } else {
        
        cart.push(item);
    }
    
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
    
    alert(`${quantity}x ${name} añadido(s) al carrito.`);
}


function loadCart() {
    const cartContainer = document.getElementById("carrito-items");
    const totalContainer = document.getElementById("total");
    cartContainer.innerHTML = ""; 

    let total = 0; 

    
    cart.forEach((item) => {
        
        const itemElement = document.createElement("div");
        itemElement.classList.add("moto");

        
        itemElement.innerHTML = `
            <img src="${item.motoImage}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Precio: $${item.price.toFixed(2)}</p>
            <p>Cantidad: ${item.quantity}</p>
            <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
        `;

        
        total += item.price * item.quantity;

        
        cartContainer.appendChild(itemElement);
    });

    
    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}


function emptyCart() {
    cart = []; 
    localStorage.removeItem("cart"); 
    loadCart(); 
    alert("Carrito vaciado.");
}


if (document.body.classList.contains("carrito-pagina")) {
    loadCart();
}


function pagar() {
    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de pagar.");
        return;
    }

    
    const confirmacion = confirm("¿Deseas completar tu compra?");

    if (confirmacion) {
        
        alert("Gracias por tu compra. Tu pedido se ha procesado exitosamente.");
        
        
        emptyCart();
        
        
        window.location.href = "index.html";
    }
}
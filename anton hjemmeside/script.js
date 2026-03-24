// script.js
// Hent eksisterende kurv fra localStorage eller lav ny
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Tilføj til kurv-knapper
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        // Tilføj produkt til kurv
        cart.push({name, price});

        // Gem kurv i localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Bekræftelse til brugeren
        alert(`${name} er tilføjet til kurven!`);
    });
});

// kurv.js
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const clearCartBtn = document.getElementById('clear-cart');

// Hent kurv fra localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Funktion: opdater kurven på siden
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Din kurv er tom.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} kr.`;
            cartItems.appendChild(li);
            total += item.price;
        });
    }

    cartTotal.textContent = `Total: ${total} kr.`;
}

// Funktion: ryd kurv
clearCartBtn.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
});

// Opdater kurven ved indlæsning af siden
updateCart();
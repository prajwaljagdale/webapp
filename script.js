let total = 0;

function addToCart(product, price) {
    const cartItems = document.getElementById("cartItems");
    const li = document.createElement("li");
    li.textContent = `${product} - ₹${price}`;
    cartItems.appendChild(li);

    total += price;
    document.getElementById("total").innerText = total;
}
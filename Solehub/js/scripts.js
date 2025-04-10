const products = [
  { id: 1, name: "Cloud Runner", price: 129.99, image: "images/shoe1.jpg" },
  { id: 2, name: "Urban Trekker", price: 159.99, image: "images/shoe2.jpg" },
  { id: 3, name: "Retro Classic", price: 89.99, image: "images/shoe3.jpg" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

$(document).ready(function () {
  if (window.location.pathname.includes('products.html')) renderProducts();
  if (window.location.pathname.includes('cart.html')) renderCart();
  updateCartCounter();
});
function renderProducts() {
  const grid = $('.products-grid');
  grid.empty();
  products.forEach(product => {
    grid.append(`
      <div class="col">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">£${product.price}</p>
            <select class="form-select mb-2" id="size-${product.id}">
              <option value="" disabled selected>Select UK Size</option>
              <option value="6">UK 6</option>
              <option value="7">UK 7</option>
              <option value="8">UK 8</option>
              <option value="9">UK 9</option>
              <option value="10">UK 10</option>
              <option value="11">UK 11</option>
              <option value="12">UK 12</option>
            </select>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `);
  });
}

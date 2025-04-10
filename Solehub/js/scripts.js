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

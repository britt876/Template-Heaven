/* 
   Student Name: Brittney Lobban
  Student ID: 2406413
  Course: Web Programming
  Lab: Individual Assignment 2
  Date: 28 March 2026 
*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let summary = document.getElementById("order-summary");

let total = 0;

cart.forEach(item => {
  let p = document.createElement("p");
  p.innerText = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
  summary.appendChild(p);

  total += item.price * item.quantity;
});

let tax = total * 0.1;

summary.innerHTML += `<p>Tax: $${tax.toFixed(2)}</p>`;
summary.innerHTML += `<p><strong>Total: $${(total + tax).toFixed(2)}</strong></p>`;

function completeOrder(e) {
  e.preventDefault();

  alert("Order placed successfully!");

  localStorage.removeItem("cart");

  window.location.href = "invoice.html";
}
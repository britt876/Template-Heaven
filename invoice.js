/* 
   Student Name: Brittney Lobban
  Student ID: 2406413
  Course: Web Programming
  Lab: Individual Assignment 2
  Date: 28 March 2026 
*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("invoice-items");

let total = 0;

cart.forEach(item => {
  let p = document.createElement("p");
  p.innerText = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
  container.appendChild(p);

  total += item.price * item.quantity;
});

let tax = total * 0.1;

container.innerHTML += `<p>Tax: $${tax.toFixed(2)}</p>`;
container.innerHTML += `<p><strong>Grand Total: $${(total + tax).toFixed(2)}</strong></p>`;
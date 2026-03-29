/* 
   Student Name: Brittney Lobban
  Student ID: 2406413
  Course: Web Programming
  Lab: Individual Assignment 2
  Date: 28 March 2026 
*/

// showCart.js - displays items on cart page
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let table = document.getElementById("cart-table");
let total = 0;

// Loop through each cart item and display in table
cart.forEach(item => {
  let row = table.insertRow();
  row.innerHTML = `
    <td>${item.name}</td>
    <td>$${item.price}</td>
    <td>${item.quantity}</td>
    <td>$${item.price * item.quantity}</td>
  `;
  total += item.price * item.quantity;
});

// Calculate tax (10%)
let tax = total * 0.1;

// Display tax and total
document.getElementById("tax").innerText = "Tax: $" + tax.toFixed(2);
document.getElementById("total").innerText = "Total: $" + (total + tax).toFixed(2);

// Clear cart function
function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
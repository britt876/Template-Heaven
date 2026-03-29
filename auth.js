/* 
   Student Name: Brittney Lobban
  Student ID: 2406413
  Course: Web Programming
  Lab: Individual Assignment 2
  Date: 28 March 2026 
*/

// Register user
function registerUser(e) {
  e.preventDefault();

  let username = document.getElementById("regUser").value;
  let password = document.getElementById("regPass").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration successful!");

  window.location.href = "login.html";
}

// Login user
function loginUser(e) {
  e.preventDefault();

  let username = document.getElementById("loginUser").value.trim();
  let password = document.getElementById("loginPass").value.trim();

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  console.log("loginUser", { username, password, savedUser, savedPass, loggedIn: localStorage.getItem("loggedIn") });

  if (username === savedUser && password === savedPass) {
    alert("Login successful!");

    localStorage.setItem("loggedIn", "true");

    window.location.href = "index.html";
  } else {
    alert("Invalid username or password!");
  }
}
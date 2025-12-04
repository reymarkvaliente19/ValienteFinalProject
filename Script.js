// Hardcoded demo account
const USER = "admin";
const PASS = "12345";

// Save login status
function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if (u === USER && p === PASS) {
        localStorage.setItem("loggedIn", "true");
        window.location = "index.html"; // redirect to home
    } else {
        document.getElementById("error").innerText = "Invalid credentials!";
    }
}

function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location = "login.html";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    alert("You have logged out.");
    window.location = "login.html";
}
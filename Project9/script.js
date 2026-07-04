const login = document.querySelector(".loginForm"); // Login Form
const register = document.querySelector(".registerForm"); // Register Form

const showRegister = document.querySelector(".showRegister");
const showLogin = document.querySelector(".showLogin");

const inputUser = document.querySelector("#username");
const inputPass = document.querySelector("#password");

const regstUser = document.querySelector("#reg-username");
const regstPass = document.querySelector("#reg-password");

const registerBtn = document.querySelector("#reg-Btn");
const loginBtn = document.querySelector("#log-Btn");

registerBtn.addEventListener("click", () => {
    const username = regstUser.value;
    const password = regstPass.value;

    if (username === "" || password === "") {
        alert("Please fill all fields!!")
        return;
    }

    let user = { username, password };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful! Please login.");

    register.classList.add("hidden")
    login.classList.remove("hidden")
})

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let userData = JSON.parse(localStorage.getItem("user")) || [];

    const username = inputUser.value;
    const password = inputPass.value;
    if (userData.username === username && userData.password === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
        console.log(window.location.href);
    } else {
        alert("Login Failed Try Agine Latter!!!")
    }
})


showRegister.addEventListener("click", (e) => {
    e.preventDefault();

    login.classList.add("hidden");
    register.classList.remove("hidden");
})



showLogin.addEventListener("click", (e) => {
    e.preventDefault();

    register.classList.add("hidden");
    login.classList.remove("hidden");
});
const inputs = document.querySelectorAll(".time-slot input");
const clearBtn = document.getElementById("clrBtn");

const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeIcon.className = "ri-sun-line";
} else {
    themeIcon.className = "ri-moon-line";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeIcon.className = "ri-sun-line";
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.className = "ri-moon-line";
        localStorage.setItem("theme", "light");
    }
});

let planner = JSON.parse(localStorage.getItem("planner")) || [];

inputs.forEach((input, index) => {

    input.value = planner[index] || "";

});


inputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        planner[index] = input.value;

        localStorage.setItem("planner", JSON.stringify(planner));

    });

});

clearBtn.addEventListener('click', () => {
    planner = [];
    localStorage.removeItem("planner");
    
    inputs.forEach((input) => {
        input.value = "";
    });
})
const display = document.getElementById("display")
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

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

let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;

function displayFunction() {

    if (timer !== null) return;

    timer = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        display.textContent = `${hours}:${minutes}:${seconds}`

    }, 1000)
};

start.addEventListener("click", () => {
    displayFunction()
});

stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click", () => {

    clearInterval(timer);

    hours = 0;
    minutes = 0;
    seconds = 0;

    timer = null;

    display.textContent = `00:00:00`;

})



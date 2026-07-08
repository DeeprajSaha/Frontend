const display = document.getElementById("display")
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

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



const API_KEY = "3abd2e9cd94d420d898182336260707";

const weatherSection = document.querySelector("main");

const time = document.getElementById("time")
const day = document.getElementById("day")
const date = document.getElementById("date");
const condition = document.getElementById("condition");

const city = document.getElementById("city");
const heat = document.getElementById("heat");
const humidity = document.getElementById("humidity");
const sunrise = document.getElementById("sunrise");
const temp = document.getElementById("temp");

const icon = document.querySelector(".weather-icon")

const body = document.body;

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

const quoteToggle = document.getElementById("quoteToggle");
const quotePopup = document.getElementById("quotePopup");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const closeQuote = document.getElementById("closeQuote");
const nextQuote = document.getElementById("nextQuote");

const quotes = [
    {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Dream big. Start small. Act now.",
        author: "Robin Sharma"
    },
    {
        text: "Small progress is still progress.",
        author: "Unknown"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    }
];

let currentIndex = Math.floor(Math.random() * quotes.length);

function showQuote() {
    quoteText.textContent = `"${quotes[currentIndex].text}"`;
    quoteAuthor.textContent = `— ${quotes[currentIndex].author}`;
}

quoteToggle.addEventListener("click", () => {
    showQuote();
    quotePopup.classList.remove("hidden");
})

closeQuote.addEventListener("click", () => {
    quotePopup.classList.add("hidden");
})

nextQuote.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= quotes.length) {
        currentIndex = 0;
    }

    showQuote();
});

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

function updateClock() {
    const curTime = new Date();

    time.textContent = curTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    day.textContent = curTime.toLocaleDateString("en-US", {
        weekday: "long"
    });

    date.textContent = curTime.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

updateClock();
setInterval(updateClock, 1000);

function getCurrentLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        getWeather("Mumbai");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            getWeather(`${lat},${lon}`);
        },

        (error) => {
            console.log(error);
            getWeather("Mumbai");
        }
    );
}

async function getWeather(location) {

    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1&aqi=no&alerts=no`
    );

    const data = await response.json();

    temp.innerText = data.current.temp_c + "°C";

    condition.innerText = data.current.condition.text;

    city.innerText = `${data.location.name}`;

    heat.innerText = data.current.feelslike_c + "°C";

    humidity.innerText = data.current.humidity + "%";

    icon.src = "https:" + data.current.condition.icon;

    const localTime = data.location.localtime;

    const hour = Number(localTime.split(" ")[1].split(":")[0]);

    if (hour >= 5 && hour < 12) {
        document.querySelector("main").style.backgroundImage = "url(./assets/timeImgs/morning.jpg)";
    }
    else if (hour >= 12 && hour < 17) {
        document.querySelector("main").style.backgroundImage = "url(./assets/timeImgs/afternoon.jpg)";
    }
    else if (hour >= 17 && hour < 20) {
        document.querySelector("main").style.backgroundImage = "url(./assets/timeImgs/evening.jpg)";
    }
    else {
        document.querySelector("main").style.backgroundImage = "url(./assets/timeImgs/night.jpg)";
    }
}

getCurrentLocation();
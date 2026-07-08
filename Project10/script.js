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


async function getWeather(location) {

    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1&aqi=no&alerts=no`
    );

    const data = await response.json();

    temp.innerText = data.current.temp_c + "°C";

    condition.innerText = data.current.condition.text;

    city.innerText = `${data.location.name}, ${data.location.region}`;

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

getWeather("siliguri")
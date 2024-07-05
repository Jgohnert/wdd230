const currentWeather = "https://api.openweathermap.org/data/2.5/weather?lat=44.31&lon=-94.46&units=imperial&appid=5a40c3ad9421527ea932b2660d18d087";
const forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=44.53&lon=-94.72&cnt=24&units=imperial&appid=5a40c3ad9421527ea932b2660d18d087";

const weatherTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("figcaption");
const weatherForecast = document.querySelector("#forecast");

async function apiFetch() {
    try {
        const response = await fetch(currentWeather);
        const forecastResponse = await fetch(forecastWeather);

        if (response.ok && forecastResponse.ok) {
            const currentData = await response.json();
            const forecastData = await forecastResponse.json();
            displayWeather(currentData, forecastData);
        }
        else {
            throw new Error(`Failed to fetch data. Response: ${response.status}, ForecastResponse: ${forecastResponse.status}`);
      }
    } 
    catch (error) {}
}

function displayWeather(currentData, forecastData) {
    weatherTemp.innerHTML = `${currentData.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
    let weatherDescription = currentData.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", weatherDescription);
    weatherDesc.textContent = `${weatherDescription}`;

    for (let i = 1; i <= 3; i++) {
        const forecast = forecastData.list[i * 8 - 1];

        const date = new Date(forecast.dt * 1000);
        const weekDay = date.toLocaleDateString("en-US", {weekday: "short"});
        const temp = Math.round(forecast.main.temp);
        const icon = forecast.weather[0].icon;

        const threeDayForecast = `
            <div>
                <h5>${weekDay}</h5>
                <img src="https://openweathermap.org/img/w/${icon}.png" alt="${forecast.weather[0].description}">
                <p>${temp}&deg;F</p>
            </div>
        `;
        weatherForecast.innerHTML += threeDayForecast;
    }
}

apiFetch();


//Windchill calculator that extracts text from the inner html.

// function windChill() {
//     var temp = parseFloat(document.getElementById("temperature").innerText);
//     var wind = parseFloat(document.getElementById("windchill").innerText);

//     if (temp <= 50 && wind > 3.0) {
//         var windChill = calculateWindChill(temp, wind);
//         document.getElementById("windchill").innerText = windChill.toFixed(0) + "°F";
//     } else {
//         document.getElementById("windchill").innerText = "N/A";
//     }
// }

// function calculateWindChill(temp, wind) {
//     return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
// }
// windChill();

//Inner html text:

//<span id="temperature">40</span>°F<br>
//Windchill: <span id="windchill">12</span> 
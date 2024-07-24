const currentWeather = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=imperial&appid=5a40c3ad9421527ea932b2660d18d087";
const forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&cnt=16&units=imperial&appid=5a40c3ad9421527ea932b2660d18d087";

const tomorrowWeather = document.querySelector("#tomorrow-forecast");
const todayWeather = document.querySelector("#today-forecast");
const maxTemp = document.querySelector("#max-temp");

async function apiFetch() {
        const weatherResponse = await fetch(currentWeather);
        const forecastResponse = await fetch(forecastWeather);

        if (weatherResponse.ok && forecastResponse.ok) {
            const weatherData = await weatherResponse.json();
            const forecastData = await forecastResponse.json();
            displayWeather(weatherData, forecastData);
        }
        else {
            throw new Error(`Failed to fetch data. Response: ${weatherResponse.status}, ForecastResponse: ${forecastResponse.status}`);
        }
}

function displayWeather(weatherData, forecastData) {

    maxTemp.innerHTML = `${Math.round(weatherData.main.temp_max)}&deg;F`

    todayWeather.innerHTML = `
            <p>${Math.round(weatherData.main.temp)}&deg;F</p>
            <p>${weatherData.main.humidity}% Humidity</p>
            <figure>
                <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="${weatherData.weather[0].description}">
                <figcaption>${weatherData.weather[0].description}</figcaption>
            </figure>
        `;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split("T")[0];

    const tomorrow3pmForecast = forecastData.list.find(time => {
        const forecastDate = time.dt_txt.split(" ")[0];
        const forecastTime = parseInt(time.dt_txt.split(" ")[1].split(":")[0], 10);
        return forecastDate === tomorrowDate && forecastTime === 15;
    });

    tomorrowWeather.innerHTML = `
        <p>${Math.round(tomorrow3pmForecast.main.temp)}&deg;F</p>
        <p>${tomorrow3pmForecast.main.humidity}% Humidity</p>
        <figure>
            <img src="https://openweathermap.org/img/w/${tomorrow3pmForecast.weather[0].icon}.png" alt="${tomorrow3pmForecast.weather[0].description}">
            <figcaption>${tomorrow3pmForecast.weather[0].description}</figcaption>
        </figure>
    `;
}

apiFetch();


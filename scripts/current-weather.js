const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.31&lon=-94.46&units=imperial&appid=5a40c3ad9421527ea932b2660d18d087";

const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const Desc = document.querySelector("figcaption");

async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          displayResults(data)
      } 
      else {
            throw Error(await response.text());
      }
  } 
  catch (error) {
      console.log(error);
  }
}
      
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let weatherDesc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", weatherDesc);
  Desc.textContent = `${weatherDesc}`;
}

apiFetch();
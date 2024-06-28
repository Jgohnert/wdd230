const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=5a40c3ad9421527ea932b2660d18d087";

  const temp = document.querySelector("#current-temp");
  const icon = document.querySelector("#weather-icon");
  const caption = document.querySelector("figcaption");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
  temp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  icon.setAttribute("src", iconsrc);
  icon.setAttribute("alt", desc);
  caption.textContent = `${desc}`;
}

apiFetch();
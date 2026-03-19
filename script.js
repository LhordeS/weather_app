"use strict";

async function fetchWeather() {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
  const city = document.getElementById("city").value.trim();
  //   const cityCap = city.charAt(0).toUpperCase() + city.slice(1);
  const card = document.getElementById("card");
  const img = document.createElement("img");

  if (!city) {
    card.textContent = "Please Enter a city.";
    return;
  }

  const response = await fetch(`${url}${city}`);
  const data = await response.json();
  //   console.log(data);

  if (!response.ok) {
    card.textContent = "Could not find that city.";
    return;
  }

  img.src = data.current.condition["icon"];

  card.textContent = "";

  card.appendChild(img);
  const resultText = document.createTextNode(
    `${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition["text"]}`,
  );
  card.appendChild(resultText);
}

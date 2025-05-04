const lat = 45.81;
const lon = 15.98;
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code`;

// Try to fetch the API and show the weather, or else log the error to the console
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response error');
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.log('There was an error: ', error);
    });

function displayWeather(data) {
    // Map API's weather codnition numbers to their name
    const weatherConditions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Slight snow fall",
        73: "Moderate snow fall",
        75: "Heavy snow fall",
        95: "Thunderstorm"
    };

    // Show current weather data on the screen
    const current = data.current;
    document.getElementById("temperature").innerHTML = current.temperature_2m + "°C";
    document.getElementById("condition").innerHTML = weatherConditions[current.weather_code] || "Unknown";
    document.getElementById("windspeed").innerHTML = current.wind_speed_10m + "km/h";
    document.getElementById("humidity").innerHTML = current.relative_humidity_2m + "%";
    document.getElementById("weathericon").src = getWeatherImageUrl(current.weather_code);
}

// Mappings from GitHub
function getWeatherImageUrl(weatherCode) {
    // Direct mapping of Open-Meteo codes to image URLs
    const weatherImages = {
      0: "https://cdn.weatherapi.com/weather/64x64/day/113.png", // Clear sky
      1: "https://cdn.weatherapi.com/weather/64x64/day/116.png", // Mainly clear
      2: "https://cdn.weatherapi.com/weather/64x64/day/119.png", // Partly cloudy
      3: "https://cdn.weatherapi.com/weather/64x64/day/122.png", // Overcast
      45: "https://cdn.weatherapi.com/weather/64x64/day/143.png", // Fog
      48: "https://cdn.weatherapi.com/weather/64x64/day/260.png", // Depositing rime fog
      51: "https://cdn.weatherapi.com/weather/64x64/day/263.png", // Light drizzle
      53: "https://cdn.weatherapi.com/weather/64x64/day/266.png", // Moderate drizzle
      55: "https://cdn.weatherapi.com/weather/64x64/day/281.png", // Dense drizzle
      61: "https://cdn.weatherapi.com/weather/64x64/day/296.png", // Slight rain
      63: "https://cdn.weatherapi.com/weather/64x64/day/302.png", // Moderate rain
      65: "https://cdn.weatherapi.com/weather/64x64/day/308.png", // Heavy rain
      71: "https://cdn.weatherapi.com/weather/64x64/day/326.png", // Slight snow fall
      73: "https://cdn.weatherapi.com/weather/64x64/day/332.png", // Moderate snow fall
      75: "https://cdn.weatherapi.com/weather/64x64/day/338.png", // Heavy snow fall
      95: "https://cdn.weatherapi.com/weather/64x64/day/389.png"  // Thunderstorm
    };
    
    // Return the image URL for the given weather code, or a default image if not found
    return weatherImages[weatherCode] || "https://cdn.weatherapi.com/weather/64x64/day/113.png";
  }

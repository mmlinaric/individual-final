
<?php
$title = "Current Weather";
include("core/tpl/header.php");
?>

<img id="weathericon" src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="weather icon">
<p>Temperature: <span id="temperature">0</span></p>
<p>Condition: <span id="condition">0</span></p>
<p>Wind Speed: <span id="windspeed">0</span></p>
<p>Humidity: <span id="humidity">0</span></p>

<p>Live data provided by <a target="_blank" href="https://open-meteo.com">Open-meteo</a></p>

<script src="js/weather.js"></script>

<?php include("core/tpl/footer.php"); ?>

<?php
$title = "GDP in Croatia";
include("core/tpl/header.php");
?>

<div id="nominal_chart"></div>
<div id="growth_chart"></div>

<p>Source: <a target="_blank" href="https://www.worldometers.info/gdp/croatia-gdp/">https://www.worldometers.info/gdp/croatia-gdp/</a></p>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script src="js/gdp.js"></script>

<?php include("core/tpl/footer.php"); ?>
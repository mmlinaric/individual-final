<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">

    <title><?php echo (isset($title) ? $title : ""); ?> - Zagreb</title>

    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Merriweather&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- NAVIGATION -->
    <ul class="nav">
        <a href="index.php"><img src="img/logo.png" alt="zagreb" height="50"></a>

        <div class="nav-toggle">
            <span class="hamburger" onclick="toggleNav()">&#9776;</a>
        </div>

        <div class="nav-links">
            <li><a href="index.php">Home</a></li>
            <li><a href="contact.php">Contact</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="references.php">References</a></li>
            <li><a href="weather.php">Weather</a></li>
            <li><a href="grading.php">Grading</a></li>
        </div>
    </ul>
    <!-- END NAVIGATION -->

    <?php if (defined('NO_DISPLAY_HEADER')): ?>
        <div>
    <?php else: ?>
        <div class="container">
            <?php if (isset($title)): ?><h1><?php echo $title; ?></h1><?php endif; ?>
            <hr>
    <?php endif; ?>
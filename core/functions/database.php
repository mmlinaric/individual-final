<?php

$hostname = "localhost";
$username = "root";
$password = "Aabbcc123@@";
$database = "finalproject";

try {
    $conn = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed");
}
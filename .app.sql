DROP DATABASE IF EXISTS finalproject;
CREATE DATABASE finalproject;
USE finalproject;

CREATE TABLE comments(
	id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(50),
    created_at DATETIME DEFAULT NOW(),
    comment_body TEXT
);

CREATE TABLE contacts(
	id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(50),
    email VARCHAR(50),
    created_at DATETIME DEFAULT NOW(),
    contact_body TEXT
);
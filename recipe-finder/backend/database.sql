-- For demonstration - you can use any MySQL database
CREATE DATABASE recipe_finder;
USE recipe_finder;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    name VARCHAR(255)
);

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    ingredients TEXT,
    instructions TEXT,
    cooking_time INT,
    difficulty VARCHAR(50)
);
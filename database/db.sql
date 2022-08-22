-- creating database
CREATE DATABASE crudmysql;

-- using the database
use crudmysql;

-- creating a table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL, 
    address VARCHAR(100) NOT NULL, 
    phone VARCHAR(15) 
); 

-- show all tables
SHOW TABLES;

-- describe tables
describe customer;
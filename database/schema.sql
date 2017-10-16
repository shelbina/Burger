-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.
CREATE DATABASE burgers_db;
Use burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(50),
	devoured boolean,
	date timestamp);
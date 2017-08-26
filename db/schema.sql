-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.

Use heroku_;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	`burger_name` varchar(50) NOT NULL,
	devoured boolean,
	date timestamp,
	primary key (id),
);
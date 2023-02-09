
CREATE DATABASE IF NOT EXISTS company;
USE company;
CREATE TABLE users (
   uuid VARCHAR(200) NOT NULL,
   name VARCHAR(100) DEFAULT NULL,
   nickname VARCHAR(100) DEFAULT NULL,
   password VARCHAR(100) DEFAULT NULL,
   avatar VARCHAR(255) DEFAULT NULL,
   roles INT DEFAULT NULL,
   PRIMARY KEY (uuid)
);

DESCRIBE users;

INSERT INTO users VALUES
   ('4g9as4asv531321', 'Roman', 'https://pbs.twimg.com/media/FoEo8kLXwAAoykf?format=jpg&name=large', 5),
   ('6g9as4d853bg41', 'Messi', 'https://pbs.twimg.com/media/FoEo8kLXwAAoykf?format=jpg&name=large', 5),
   ('5gurh4d8531321', 'Ortega', 'https://pbs.twimg.com/media/FoEo8kLXwAAoykf?format=jpg&name=large', 5);
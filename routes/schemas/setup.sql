CREATE SCHEMA `react_lms` ;

USE react_LMS;

CREATE TABLE students (studentID INT NOT NULL AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (studentID));

INSERT INTO students (firstName, lastName, email, password)
VALUES ('Allen', 'Welch', 'allenjwelch@gmail.com', 'password');

SELECT * FROM students;

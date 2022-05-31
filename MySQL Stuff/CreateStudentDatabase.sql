DROP DATABASE IF EXISTS studentDatabase;
CREATE DATABASE studentDatabase;
USE studentDatabase;

DROP TABLE IF EXISTS studentTable;
CREATE TABLE studentTable(
	studentID int NOT NULL AUTO_INCREMENT,
    studentName varchar(255),
    studentPicture longblob,
    PRIMARY KEY(studentID)
);

INSERT INTO studentTable (studentName) VALUES('Nathanael Setiawan');
INSERT INTO studentTable (studentName) VALUES('Jayson Michael');
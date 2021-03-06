DROP DATABASE IF EXISTS studentDatabase;
CREATE DATABASE studentDatabase;
USE studentDatabase;

DROP TABLE IF EXISTS studentTable;
CREATE TABLE studentTable(
	studentID int NOT NULL AUTO_INCREMENT,
    studentName varchar(255) NOT NULL,
    studentClass varchar(255) NOT NULL,
    studentPicture varchar(255) NOT NULL,
    studentSession1 varchar(255) NOT NULL,
    studentSession2 varchar(255) NOT NULL,
    studentSession3 varchar(255) NOT NULL,
    PRIMARY KEY(studentID)
);


-- DROP TABLE IF EXISTS teacherTable;
-- CREATE TABLE teacherTable(
-- 	teacherID int NOT NULL AUTO_INCREMENT,
--     teacherName varchar(255),
--     PRIMARY KEY(teacherID)
-- );

-- DROP TABLE IF EXISTS lessonsTable;
-- CREATE TABLE lessonsTable(
-- 	lessonID int NOT NULL AUTO_INCREMENT,
--     lessonName varchar(255),
--     teacherID int,
--     PRIMARY KEY(lessonID),
--     FOREIGN KEY(teacherID) REFERENCES teacherTable(teacherID)
-- );

-- DROP TABLE IF EXISTS attendanceTable;
-- CREATE TABLE attendanceTable(
-- 	attendanceID int NOT NULL AUTO_INCREMENT,
--     attendanceDate datetime,
--     lessonID int,
--     studentID int,
--     attendance bool,
--     PRIMARY KEY(attendanceID),
--     FOREIGN KEY(lessonID) REFERENCES lessonsTable(lessonID),
--     FOREIGN KEY(studentID) REFERENCES studentTable(studentID)
-- )

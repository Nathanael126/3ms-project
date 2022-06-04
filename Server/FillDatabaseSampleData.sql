INSERT INTO studentTable (studentName) VALUES('Nathanael Setiawan');
INSERT INTO studentTable (studentName) VALUES('Jayson Michael');
INSERT INTO teacherTable (teacherName) VALUES('Mr.Ida Bagus');
INSERT INTO lessonsTable (lessonName, teacherID) VALUES ('WADS',1);
INSERT INTO attendanceTable (attendanceDate,lessonID,studentID,attendance) VALUES (CURRENT_TIMESTAMP(), 1, 1, True);
INSERT INTO attendanceTable (attendanceDate,lessonID,studentID,attendance) VALUES (CURRENT_TIMESTAMP(), 1, 2, False);
use 128a7l;

-- (1) Insertion of regcomm sample data
INSERT INTO regcomm(username, password, position)
VALUES
	("comm1", "12345", "head"),
	("comm2", "12345", "member"),
	("comm3", "12345", "member"),
	("comm4", "12345", "member"),
	("comm5", "12345", "member");
-- end (1)

-- (2) course offering
INSERT INTO schedule(sem, acadyr)
VALUES
	("1", "2018-2019"),
	("2", "2018-2019"),
	("S", "2017-2018"),
	("1", "2018-2019"),
	("S", "2017-2018");
-- end (2)

-- (3) faculty
INSERT INTO faculty(facultyfname, facultymname, facultylname, isadviser, username, password, status)
VALUES 
	("Tamala", "Andaya", "Mcmillan", true, "tamcmillan", "12345", "WORKING"),
	("Mickie", "Buko", "Mirando", false, "mimirando", "12345", "STUDY LEAVE"),
	("Yukiko","Chrysler","Raymo", false,"yukichrys","12345","RESIGNED"),
	("Jacob","Domino","Seidman", true,"domseid32","12345","STUDY LEAVE"),
	("Kati","Egot","Domina",false,"katidom55","12345","WORKING");
-- end (3)

-- (4) curriculum
INSERT INTO curriculum(curriculumname) 
VALUES
	("2011 BS Computer Science Curriculum, UPLB"),
	("2012 BS Computer Science Curriculum, UPLB"),
	("2013 BS Computer Science Curriculum, UPLB"),
	("2014 BS Computer Science Curriculum, UPLB"),
	("2015 BS Computer Science Curriculum, UPLB");
-- end (4)

-- (5) student
INSERT INTO student(studnum, studentfname, studentmname, studentlname, status, curriculumid)
VALUES
	("2013-11111","Khalil","Arimao","Amparo", "graduated", 1),
	("2014-22222","Spencer","Quindipan","Cabrera", "shifted", 2),
	("2015-33333","Zaire","Calapatia","Legazpi", "loa", 3),
	("2016-44444","Wayne","Dalrymple","Cariño", "studying", 4),
	("2017-55555","Eron","Ampaso","Araneta", "studying", 4);
-- end (5)

-- (6) faculty has student
INSERT INTO faculty_has_student(date_assigned, status, studnum, enum)
VALUES
	("2013-07-18", "old","2013-11111", 1),
	("2014-07-20", "current", "2014-22222", 1),
	("2015-09-15", "old", "2015-33333", 4),
	("2016-07-06", "old", "2016-44444", 4),
	("2017-09-10", "current", "2017-55555", 4);
-- (6)

-- (7) course offering
INSERT INTO course_offering(coursecode, coursetitle, semtaken, scheduleid)
VALUES
	("CMSC125","Operating Systems", "12", 1),
	("CMSC127", "Database", "2", 2),
	("CMSC132", "Computer Architecture","1", 3), 
	("CMSC170", "Artificial Intelligence", "12S", 4),
	("CMSC141", "Language Theory and Automata", "12S", 5);
-- (7)

-- (8) course prereq
INSERT INTO course_prereq(prereq, courseoffid)
VALUES 
	("CMSC123", 1),
	("CMSC123", 2),
	("CMSC127", 3),
	("CMSC131", 4),
	("CMSC57", 5);
-- end (8)


-- (9) section
INSERT INTO section(starttime, endtime, room, day, actualsize, idealsize, status, courseoffid, enum)
VALUES
	("07:00", "08:00", "ICSMH", "TTh", 43, 50, "Low Class Size", 1, 1),
	("08:00", "09:00", "ICSLH 3", "WF", 27, 50, "Additional", 2, 2),
	("09:00", "10:00", "ICSMH", "WF", 45, 50, "Petitioned", 3, 1),
	("10:00", "11:00", "ICSMH", "TTh", 50, 50, "Petitioned", 4, 3),
	("11:00", "12:00", "ICSLH 3", "WF", 9, 50, "Dissolved", 5, 4);
-- end (9)



-- DATABASE SCHEMA
-- TOTAL TABLES: 9
DROP DATABASE IF EXISTS 128a7l;
CREATE DATABASE 128a7l;

USE 128a7l;

#REGISTRATION COMMITTEE:
CREATE TABLE regcomm(
  regcommid int NOT NULL AUTO_INCREMENT,
  username varchar(256) NOT NULL,
  password varchar(256) NOT NULL,
  position varchar(20) NOT NULL,
  CONSTRAINT regcomm_regcommid_pk PRIMARY KEY (regcommid) 
);

#SCHEDULE (Course Offering):
CREATE TABLE schedule(
  scheduleid int NOT NULL AUTO_INCREMENT,
  sem varchar(1) NOT NULL,
  acadyr varchar(15) NOT NULL,
  -- regcommid int NOT NULL,
  CONSTRAINT schedule_scheduleid PRIMARY KEY(scheduleid)
  -- CONSTRAINT schedule_regcommid FOREIGN KEY(regcommid) REFERENCES regcomm(regcommid) ON DELETE CASCADE ON UPDATE CASCADE
);

#START OF FACULTY:
CREATE TABLE faculty(
  enum int NOT NULL AUTO_INCREMENT,
  facultyfname varchar(30) NOT NULL,
  facultymname varchar(30) NOT NULL,
  facultylname varchar(30) NOT NULL,
  isadviser boolean NOT NULL,
  username varchar(256) NOT NULL,
  password varchar(256) NOT NULL,
  status varchar(20) NOT NULL,
  -- scheduleid int NOT NULL,
  CONSTRAINT faculty_enum_pk PRIMARY KEY(enum)
  -- CONSTRAINT faculty_scheduleid_fk FOREIGN KEY(scheduleid) REFERENCES schedule(scheduleid) ON DELETE CASCADE ON UPDATE CASCADE
);
#END OF FACULTY

#START OF CURRICULUM:
CREATE TABLE curriculum(
  curriculumid int NOT NULL AUTO_INCREMENT,
  curriculumname varchar(50) NOT NULL,
  CONSTRAINT curriculum_curriculumid_pk PRIMARY KEY(curriculumid)
);
#END OF CURRICULUM


#START OF STUDENT:
CREATE TABLE student(
  studnum varchar(10) NOT NULL,
  studentfname varchar(30) NOT NULL,
  studentmname varchar(30) NOT NULL,
  studentlname varchar(30) NOT NULL,
  status varchar(20) NOT NULL,
  -- enum int,
  curriculumid int NOT NULL,
  CONSTRAINT student_studnum_pk PRIMARY KEY(studnum),
  CONSTRAINT student_curriculumid_fk FOREIGN KEY(curriculumid) REFERENCES curriculum(curriculumid) ON DELETE CASCADE ON UPDATE CASCADE
  -- CONSTRAINT student_enum_fk FOREIGN KEY(enum) REFERENCES faculty(enum) ON DELETE CASCADE ON UPDATE CASCADE
);

#END OF STUDENT

#FACULTY-STUDENT
CREATE TABLE faculty_has_student(
  date_assigned date NOT NULL, 
  status varchar(20) NOT NULL,
  studnum varchar(10) NOT NULL,
  enum int NOT NULL
);


#START OF COURSE OFEERING:
CREATE TABLE course_offering(
  courseoffid int NOT NULL AUTO_INCREMENT,
  coursecode varchar(10) NOT NULL,
  coursetitle varchar(256) NOT NULL,
  semtaken varchar(3) NOT NULL,
  scheduleid int NOT NULL,
  CONSTRAINT course_offering_courseoffid_pk PRIMARY KEY(courseoffid),
  CONSTRAINT course_offering_scheduleid_fk FOREIGN KEY(scheduleid) REFERENCES schedule(scheduleid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE course_prereq(
  prereq varchar(10) NOT NULL,
  courseoffid int NOT NULL,
  CONSTRAINT course_offering_prereq_courseid_fk FOREIGN KEY(courseoffid) REFERENCES course_offering(courseoffid) ON DELETE CASCADE ON UPDATE CASCADE
);

#END OF COURSE

#START OF SECTION:
CREATE TABLE section(
  sectionid int NOT NULL AUTO_INCREMENT,
  starttime time NOT NULL,
  endtime time NOT NULL,
  room varchar(20) NOT NULL,
  day varchar(4) NOT NULL,
  actualsize decimal(3,0) NOT NULL,
  idealsize decimal(3,0) NOT NULL,
  status varchar(20) NOT NULL,
  courseoffid int NOT NULL,
  enum int NOT NULL,
  CONSTRAINT secion_sectionid_pk PRIMARY KEY(sectionid),
  CONSTRAINT section_courseoffid_fk FOREIGN KEY(courseoffid) REFERENCES course_offering(courseoffid) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT section_enum_fk FOREIGN KEY(enum) REFERENCES faculty(enum) ON DELETE CASCADE ON UPDATE CASCADE
);
#END OF SECTION







'use strict'
const db = require('../db/db');

exports.prereq_add = (req, res) => {
	//var prereq = req.body.prereq;
	//var courseoffid = req.body.courseoffid;
	
	var prereq = 'CMSC123';
	var courseoffid = 4;
	var queryString = 'INSERT INTO course_prereq(prereq, courseoffid) VALUES (\''+prereq+'\', \''+courseoffid+'\');';
	db.query(queryString, function(error, results, fields){
		if(error) res.send(error);
		res.send("Course Prerequisite successfully added!");
		res.end("Transaction ended.");
	});
}


exports.prereq_delete = (req, res) => {
	//var inputId = req.body.id;

	var inputId = 4;
	var inputPrereq =  'CMSC123';
	var queryString = 'DELETE FROM course_prereq WHERE prereq = \''+inputPrereq+'\' AND courseoffid = \''+inputId+'\';';

	db.query(queryString, function(error, results, fields){
		if(error) res.send(error);
		res.send("Course Prerequisite successfully deleted!");
		res.end("Transaction ended.");
	});
}

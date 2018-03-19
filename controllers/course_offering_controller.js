'use strict'
const db = require('../db/db');

exports.course_offering_add = (req, res) => {
	/*
	var newCourseOffId = req.body.courseoffid;
	var newCourseCode = req.body.coursecode;
	var newCourseTitle = req.body.coursetitle;
	var newSemTaken = req.body.semtaken;
	var newScheduleId = req.body.scheduleid;
	*/

	var newCourseOffId = 6;
	var newCourseCode = 'CMSC128';
	var newCourseTitle = 'Introduction to Software Engineering'
	var newSemTaken = 2;
	var newScheduleId = 2;

	var queryString = 'INSERT INTO course_offering VALUES(?,?,?,?,?)';
	var params = [newCourseOffId, newCourseCode, newCourseTitle, newSemTaken, newScheduleId];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Course Offering sucessfully added");
		res.end("Transaction ended");
	});
}

//EDIT ATTRIBUTES
exports.course_offering_edit_coursecode = (req, res) => {
	/*
	var id = req.body.id;
	var coursecode = req.body.coursecode;
	*/

	var id = 1;
	var coursecode = 'samplecoursecode';

	db.query('UPDATE course_offering SET coursecode = \'' + coursecode + '\' WHERE ' + 'courseoffid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send('Edit Successful!');
		res.end('message');
	});
}

exports.course_offering_edit_coursetitle = (req, res) => {
	/*
	var id = req.body.id;
	var coursetitle = req.body.coursetitle;
	*/

	var id = 1;
	var coursetitle = 'coursetitlehere';

	db.query('UPDATE course_offering SET coursetitle = \'' + coursetitle + '\' WHERE ' + 'courseoffid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		res.send('Edit Successful!');
		res.end('message');
	});
}

exports.course_offering_edit_semtaken = (req, res) => {
	/*
	var id = req.body.id;
	var semtaken = req.body.semtaken;
	*/	

	var id = 1;
	var semtaken = '12S';

	db.query('UPDATE course_offering SET semtaken = \'' + semtaken + '\' WHERE ' + 'courseoffid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		res.send('Edit successful!');
		res.end('message');
	});
}
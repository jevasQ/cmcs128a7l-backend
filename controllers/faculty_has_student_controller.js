'use strict'
const db = require('../db/db');

exports.faculty_has_student_add = (req, res) => {
	/*
	var date = req.body.date;
	var status = req.body.status;
	var studnum = req.body.studnum;
	var empnum = req.body.empnum;
	*/

	var date = '2018-03-15';
	var status = 'current';
	var studnum = '2015-00001';
	var empnum = 1;

	var queryString = 'INSERT INTO faculty_has_student VALUES(?,?,?,?);';
	var params = [date, status, studnum, empnum];

	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Insertion successful!");
		res.end("Transaction ended.");
	});
}

exports.faculty_has_student_editStatus = (req, res) => {
	// var studnum = req.body.studnum; // uncomment for actual run
	// var status = req.body.status;

	// for testing only;
	var studnum = '2017-55555';
	var status = 'old';
	
	var queryString = 'UPDATE faculty_has_student SET status = ? WHERE studnum = ?;';
	var params = [status, studnum];

	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end("Transaction ended.");
	});
};

exports.faculty_has_student_editDate = (req, res) => {
	// var studnum = req.body.studnum; // uncomment for actual run
	// var date = req.body.date;

	// for testing only;
	var studnum = '2017-55555';
	var date = '1999-10-11';
	
	var queryString = 'UPDATE faculty_has_student SET date_assigned = ? WHERE studnum = ?;';
	var params = [date, studnum];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end("Transaction ended.");
	});
};

exports.faculty_has_student_editEnum = (req, res) => {
	// var studnum = req.body.studnum; // uncomment for actual run
	// var id = req.body.id;

	// for testing only;
	var studnum = '2017-55555';
	var id = 1;
	
	var queryString = 'UPDATE faculty_has_student SET enum = ? WHERE studnum = ?;';
	var params = [id, studnum];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end("Transaction ended.");
	});
};

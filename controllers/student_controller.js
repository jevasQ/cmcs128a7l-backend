'use strict'
const db = require('../db/db');

exports.student_add = (req, res) => {
	/*
	var newStudNum = req.body.studnum;
	var newFname = req.body.fname;
	var newMname = req.body.mname;
	var newLname = req.body.lname;
	var newStatus = req.body.status;
	var newId = req.body.curriculumid;
	*/

	var newStudNum = '2015-00002';
	var newFname = 'Sharon';
	var newMname = 'Umali';
	var newLname = 'Del Mundo';
	var newStatus = 'studying';
	var newId = 4;
	var queryString = 'INSERT INTO student VALUES(?,?,?,?,?,?);';
	var params = [newStudNum, newFname, newMname, newLname, newStatus, newId];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Student successfully added");
		res.end("Transaction ended.");
	});
}

exports.student_editFname = (req, res) => {
	// var studnum = req.body.studnum; // uncomment for actual run
	// var fname = req.body.fname;

	// for testing only;
	var studnum = '2015-00002';
	var fname = 'Shawie';

	var queryString = 'UPDATE student SET studentfname = ? WHERE studnum = ?;';
	var params = [fname, studnum];
	
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.student_editMname = (req, res) => {
	// var studnum = req.body.studnum; // uncomment for actual run
	// var mname = req.body.mname;

	// for testing only;
	var studnum = '2015-00002';
	var mname = 'Kawali';
	
	var queryString = 'UPDATE student SET studentmname = ? WHERE studnum = ?;';
	var params = [mname, studnum];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.student_editLname = (req, res) => {
	// var studnum = req.body.studnum; // uncomment for actual run
	// var lname = req.body.lname;

	// for testing only;
	var studnum = '2015-00002';
	var lname = 'Dela Cruz';

	var queryString = 'UPDATE student SET studentlname = ? WHERE studnum = ?;';
	var params = [lname, studnum];
	
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.student_editStatus = (req, res) => {
	// var studnum = req.body.studnum; // uncomment for actual run
	// var status = req.body.status;

	// for testing only;
	var studnum = '2015-00002';
	var status = 'shifted';

	var queryString = 'UPDATE student SET status = ? WHERE studnum = ?;';
	var params = [status, studnum];
	
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.student_editCurriculumId = (req, res) => {
	// var studnum = req.body.studnum; // uncomment for actual run
	// var id = req.body.id;

	// for testing only;
	var studnum = '2015-00002';
	var id = 5;

	var queryString = 'UPDATE student SET curriculumid = ? WHERE studnum = ?;';
	var params = [status, studnum];
	
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.student_deleteByStudNum = (req, res) => {
	//var studnum = req.body.studnum;

	var studnum = '2015-00002';	
	
	var queryString = 'DELETE FROM student WHERE studnum = ?;';
	
	db.query(queryString, [studnum], function(error, results, fields){
		if(error) throw error;
		res.send("Student successfully deleted!");
		res.end("Transaction ended.");	
	});
}

exports.student_deleteByLname = (req, res) => {
	//var lname = req.body.lname;
	
	var lname = 'Facundo';

	var queryString = 'DELETE FROM student WHERE studentlname = ?;';

	db.query(queryString, [lname], function(error, results, fields){
		if(error) throw error;
		res.send("Student successfully deleted!");
		res.end("Transaction ended.");
	});
}

exports.student_searchByStudNum = (req, res) => {
	//var studnum = req.body.studnum;

	var studnum = "2015-00001";
	
	var queryString = 'SELECT * FROM student WHERE studnum = ?;';
	
	db.query(queryString, [studnum], function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
}

exports.student_searchByFName = (req, res) => {
	//var fname = req.body.fname;	

	var fname = 'Wayne'
	
	var queryString = 'SELECT * FROM student WHERE student fname LIKE ?;';
	
	db.query(queryString, [fname], function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
}

exports.student_searchByLName = (req, res) => {
	//var lname = req.body.lname;

	var lname = 'Legazpi'

	var queryString = 'SELECT * FROM student WHERE studentlname LIKE ?;';
	
	db.query(queryString, [lname], function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
}

exports.student_searchByStatus = (req, res) => {
	//var status = req.body.status;

	var status = 'studying'

	var queryString = 'SELECT * FROM student WHERE status = ?;';
	
	db.query(queryString, [status], function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
}

exports.student_searchByCurriculumId = (req, res) => {
	//var id = req.body.id;

	var id = 5;

	var queryString = 'SELECT * FROM student WHERE curriculumid = ?;';
	
	db.query(queryString, [id], function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
}

exports.student_viewByStudnum = (req, res) => {

	db.query('SELECT * FROM student ORDER BY studnum;', [], function(error, results, fields){
		if(error) throw error;
    		res.send(results);
  	});
}

exports.student_viewByLname = (req, res) => {

	db.query('SELECT * FROM student ORDER BY studentlname;', [], function(error ,results, fields){
		if(error) throw error;
    		res.send(results);
  	});
}

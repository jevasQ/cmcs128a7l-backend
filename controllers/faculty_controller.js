'use strict'
const db = require('../db/db');

exports.faculty_add = (req, res) => {
	/*
	var newFname = req.body.fname;
	var newMname = req.body.mname;
	var newLname = req.body.lname;
	var newIsAdviser = req.body.isadviser;
	var newUserName = req.body.username;
	var newPassword = req.body.password;
	var newStatus = req.body.status;
	*/

	var newFname = 'Malia';
	var newMname = 'Garcia';
	var newLname = 'Zapanta';
	var newIsAdviser = 0;
	var newUserName = 'mgzapanta';
	var newPassword = '12345';
	var newStatus = 'STUDY LEAVE';

	var queryString = 'INSERT INTO faculty(facultyfname, facultymname, facultylname, isadviser, username, password, status) VALUES (?,?,?,?,?,?,?);';
	var params = [newFname, newMname, newLname, newIsAdviser, newUserName, newPassword, newStatus];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Faculty successfully added!");
		res.end("Transaction ended.");
	});
};

exports.faculty_setAdviser = (req, res) => {
	// var id = req.body.id;

	// for testing only;
	var id = 5;

	var queryString = 'UPDATE faculty SET isadviser = 1 WHERE enum = ?;';
	var params = [id];	
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
};

exports.faculty_unsetAdviser = (req, res) => {
	// var id = req.body.id;

	// for testing only;
	var id = 5;
	
	var queryString = 'UPDATE faculty SET isadviser = 0 WHERE enum = ?;';
	var params = [id];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
};

exports.faculty_editStatus = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var status = req.body.status;

	// for testing only;
	var id = 5;
	var status = 'RESIGNED'

	var queryString = 'UPDATE faculty SET status = ? WHERE enum = ?;';
	var params = [status, id];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
};

exports.faculty_editFname = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var fname = req.body.name;

	// for testing only;
	var id = 5;
	var fname = 'Franklin'
	
	var queryString = 'UPDATE faculty SET facultyfname = ? WHERE enum = ?;';
	var params = [fname, id];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
};

exports.faculty_editMname = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var mname = req.body.name;

	// for testing only;
	var id = 5;
	var mname = 'Vera'
	
	var queryString = 'UPDATE faculty SET facultymname = ? WHERE enum = ?;';
	var params = [mname, id];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
};

exports.faculty_editLname = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var lname = req.body.name;

	// for testing only;
	var id = 5;
	var lname = 'Tamagochi'
	
	var queryString = 'UPDATE faculty SET facultylname = ? WHERE enum = ?;';
	var params = [lname, id];
	

	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end('message');
	});
};

exports.faculty_editUsername = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var username = req.body.name;

	// for testing only;
	var id = 5;
	var username = 'franktama111'
	
	var queryString = 'UPDATE faculty SET username = ? WHERE enum = ?;';
	var params = [username, id];

	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
};

exports.faculty_editPassword = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var password = req.body.password;

	// for testing only;
	var id = 5;
	var password = 'gintamagochi01'

	var queryString = 'UPDATE faculty SET password = ? WHERE enum = ?;';
	var params = [password, id];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send("Edit Successful!");
		res.end('message');
	});
};

exports.faculty_deleteByEnum = (req, res) => {
	//var empNum = req.body.empNum;

	var empNum = 6;
	var queryString = 'DELETE FROM faculty WHERE enum = ?;';
	var params = [empNum];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Faculty successfully deleted!");
		res.end("Transaction ended.");
	});
};

exports.faculty_deleteByLname = (req, res) => {
	//var lname = req.body.lname;

	var lname = 6;
	var queryString = 'DELETE FROM faculty WHERE lname LIKE ?;';
	var params = [lname];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Faculty successfully deleted!");
		res.end("Transaction ended.");
	});
};

exports.faculty_searchById = (req, res) => {
	//var empNum = req.body.empNum;
	
	var empNum = 5;
	var queryString = 'SELECT * FROM faculty WHERE enum = ?;';
	var params = [empNum];	

	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
};

exports.faculty_searchByFname = (req, res) => {
	//var fname = req.body.fname;

	var fname = 'John';
	var queryString = 'SELECT * FROM faculty WHERE facultyfname LIKE ?;';
	var params = [fname];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
};

exports.faculty_searchByLname = (req, res) => {
	//var lname = req.body.lname;

	var lname = 'Doe'
	var queryString = 'SELECT * FROM faculty WHERE facultylname LIKE ?;';
	var params = [lname];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send(results);
		res.end('message');
	});
};

exports.faculty_searchByStatus = (req, res) => {
	//var status = req.body.status;
	
	var status = 'RESIGNED'
	var queryString = 'SELECT * FROM faculty WHERE status = ?;';
	var params = [status];

	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
};

exports.faculty_searchByUsername = (req, res) => {
	//var username = req.body.username;

	var username = 'mgzapanta';
	var queryString = 'SELECT * FROM faculty WHERE username LIKE ?;';
	var params = [username];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
};

exports.faculty_viewAll = (req, res) => {
	db.query('SELECT * FROM faculty', [], function(error, results, fields){
		if(error) res.send(error);
		res.send(results);
	});
};

exports.faculty_viewByEnum = (req, res) => {
	db.query('SELECT * FROM faculty ORDER BY enum', [], function(error, results, fields){
		if(error) res.send(error);
		res.send(results);
	});
};

exports.faculty_viewByLname = (req, res) => {
	db.query('SELECT * FROM faculty ORDER BY facultylname', [], function (error, results, fields){
		if(error) res.send(error);
		res.send(results);
	});
};

exports.faculty_viewAdvisers = (req, res) => {
	db.query('SELECT * FROM faculty WHERE isadviser = 1;', function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
};

exports.faculty_viewNonAdvisers = (req, res) => {
	db.query('SELECT * FROM faculty WHERE isadviser = 0;', function(error, results, fields){
		if(error) throw error;
		res.send(results);
		res.end('message');
	});
};

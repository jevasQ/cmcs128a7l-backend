'use strict'
const db = require('../db/db');

db.connect();

exports.curriculum_add = (req, res) => {
	//var newName = req.body.name;
	
	var newName = '2017 BS Computer Science Curriculum, UPLB';
	var queryString = 'INSERT INTO curriculum(curriculumname) VALUES(?);';
	var params = [newName];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Curriculum successfully added!");
		res.end("Transaction ended.");
	});
}

exports.curriculum_edit = (req, res) => {
	// var name = req.body.name;

	// for testing only;
	var inputId = 6;
	var inputName = '1999 BS Computer Science Curriculum, UPLB';
	var queryString = 'UPDATE curriculum SET curriculumname = ? WHERE curriculumid = ?;';
	var params = [inputName, inputId];
	
	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Curriculum successfully edited!");
		res.end("Transaction ended.");
	});
}

exports.curriculum_delete = (req, res) => {
	//var inputId = req.body.id;

	var inputId = 6;
	var queryString = 'DELETE FROM curriculum WHERE curriculumid = ?';
	var params = [inputId];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Curriculum successfully deleted!");
		res.end("Transaction ended.");
	});
}

exports.curriculum_searchById = (req, res) => {
	//var inputId = req.body.id;
	
	var inputId = 2;
	var queryString = 'SELECT * FROM curriculum WHERE curriculumid = ?;';
	var params = [inputId];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send(results);
		res.end("Transaction ended.");
	});
}

exports.curriculum_searchByName = (req, res) => {
	//var inputName = req.body.name;
	
	var inputName = '2011 BS Computer Science Curriculum, UPLB';
	var queryString = 'SELECT * FROM curriculum WHERE curriculumname LIKE ?;';
	var params = [inputName];

	db.query(queryString, [inputName], function(error, results, fields){
		if(error) res.send(error);
		res.send(results);
		res.end("Transaction ended.");
	});
}

exports.curriculum_viewAll = (req, res) => {

	db.query('SELECT * FROM curriculum', [], function (error, results, fields){
		if(error) res.send(error);
	    	res.send(results);
  	});
};

exports.curriculum_viewById = (req, res) => {

	db.query('SELECT * FROM curriculum order by curriculumid', [], function (error, results, fields){
		if(error) res.send(error);
		res.send(results);
	});
};

exports.curriculum_viewByName = (req, res) => {
	
	db.query('SELECT * FROM curriculum order by curriculumname', [], function (error, results, fields){
		if(error) res.send(error);
		res.send(results);
	});
};

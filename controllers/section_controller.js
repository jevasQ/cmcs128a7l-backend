'use strict'
const db = require('../db/db');

exports.section_add = (req, res) => {
	/*
	var newSectionId = req.body.sectionId;
	var newStartTime = req.body.startTime;
	var newEndTime = req.body.endTime;
	var newRoom = req.body.room;
	var newDay = req.body.day;
	var newActualSize = req.body.actualSize;
	var newIdealSize = req.body.idealSize;
	var newStatus = req.body.status;
	var newCourseOffId = req.body.couseOffId;
	var newEnum = req.body.enum;
	*/
	var newSectionId = 6;
	var newStartTime = "08:00:00";
	var newEndTime = "09:00:00";
	var newRoom = "ICSMH";
	var newDay = "TTH";
	var newActualSize = 51;
	var newIdealSize = 50;
	var newStatus = "High Class Size";
	var newCourseOffId = 1;
	var newEnum = 1;

	var queryString = 'INSERT INTO section VALUES(?,?,?,?,?,?,?,?,?,?);';
	var params = [newSectionId, newStartTime, newEndTime, newRoom, newDay, newActualSize, newIdealSize, newStatus, newCourseOffId, newEnum];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Section successfully added");
		res.end("Transaction ended.");
	});//REYES-----------------------------
}//REYES-------------------------------------------------------

exports.section_edit_starttime = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var time = req.body.time;

	// for testing only;
	var id = 1;
	var time = '08:00:00';
	
	
	db.query('UPDATE section SET starttime = \'' + time + '\' WHERE ' + 'sectionid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.section_edit_endtime = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var time = req.body.time;

	// for testing only;
	var id = 1;
	var time = '09:00:00';
	
	
	db.query('UPDATE section SET endtime = \'' + time + '\' WHERE ' + 'sectionid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.section_edit_room = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var room = req.body.room;

	// for testing only;
	var id = 1;
	var room = 'myroom';
	
	
	db.query('UPDATE section SET room = \'' + room + '\' WHERE ' + 'sectionid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.section_edit_day = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var day = req.body.day;

	// for testing only;
	var id = 1;
	var day = 'DAY';
	
	
	db.query('UPDATE section SET day = \'' + day + '\' WHERE ' + 'sectionid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.section_edit_status = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var status = req.body.status;

	// for testing only;
	var id = 1;
	var status = 'mystatus';
	
	
	db.query('UPDATE section SET status = \'' + status + '\' WHERE ' + 'sectionid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.section_edit_idealsize = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var size = req.body.size;

	// for testing only;
	var id = 1;
	var size = 80;
	
	
	db.query('UPDATE section SET idealsize = ' + size + ' WHERE ' + 'sectionid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end('message');
	});
}

exports.section_edit_actualsize = (req, res) => {
	// var id = req.body.id; // uncomment for actual run
	// var size = req.body.size;

	// for testing only;
	var id = 1;
	var size = 35;
	
	
	db.query('UPDATE section SET actualsize = ' + size + ' WHERE ' + 'sectionid = ' + id + ';', function(error, results, fields){
		if(error) throw error;
		//do everything inside this
		res.send("Edit Successful!");
		res.end('message');
	});
}

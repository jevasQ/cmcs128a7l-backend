'use strict'
const db = require('../db/db');
exports.schedule_add = (req, res) => {
	/*
	var newScheduleId = req.body.schedId;
	var newSem = req.body.sem;
	var newAcadyr = req.body.acadyr;
	*/

	var newScheduleId = 6;
	var newSem = 1;
	var newAcadyr = "2016-2017";

	var queryString = 'INSERT INTO schedule VALUES(?,?,?);';
	var params = [newScheduleId, newSem, newAcadyr];

	db.query(queryString, params, function(error, results, fields){
		if(error) res.send(error);
		res.send("Schedule successfully added");
		res.end("Transaction ended.");
	});//REYES---------------
}//REYES------------------------------------------------------
'use strict'
const db = require('../db/db');

exports.regcomm_add = (req, res) => {
	var newName = 'comm6';
	var newPassword = '12345';
	var position = 'member';
	var queryString = 'INSERT INTO regcomm(username, password, position) VALUES (?, ?, ?)';
	var params = [newName, newPassword, position];

	db.query(queryString, params, function(error, results, fields) {
		if(error) res.send(error);
		res.send("Regcomm successfully added!");
		res.end("Transaction ended.")
	});
}
var connection = require('../config/database')();

module.exports = function(app) {
	app.get('/product', function(req, res) {
		var mysql = require('mysql');
		
		connection.query('select * from products', function(err, result){
			res.render("produtos/lista", {result: result});
		});

		connection.end();
	});
}
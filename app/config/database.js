var mysql = require('mysql');

 var createDBConnection = function() {
	 return mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'node_project'
	});
};

//wrapper
module.exports = function(){
	return createDBConnection;
}	
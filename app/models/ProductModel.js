function Product(connection) {
	this._connection = connection;
}

Product.prototype.result = function(callback) {
	this._connection.query('select * from products', callback);
}

Product.prototype.save = function(data, callback) {
	this._connection.query('insert into products set ?', data, callback);
}

module.exports = function() {
	return Product;
}

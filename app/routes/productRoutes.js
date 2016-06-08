module.exports = function(app) {
	app.get('/product', function(req, res) {
		var connection = app.config.database();
		var productQuery = new app.models.ProductModel(connection);
		productQuery.result(function(err, result){
			res.render("produtos/lista", {result:result});
		});
		connection.end();
	});

	app.get('/product/create', function(req, res){
		res.render("produtos/form");
	});

	app.post('/product/create', function(req, res){
		var connection = app.config.database();
		var productQuery = new app.models.ProductModel(connection);
		var form_request = req.body;
		productQuery.save(form_request, function(err, result) {
			if (err) console.log(err);
			res.redirect("/product");
		});
	});
}
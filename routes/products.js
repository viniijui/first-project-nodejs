'use strict'; // use strict is required to use ES6 with node until now

const controllers = require('../controllers');

const renderer = controllers.renderer;
const products = new controllers.Products();

module.exports = router => {
	router.get('/products', renderer.call(params => products.index(params)));
	router.get('/products/:id', renderer.call(params => products.product(params)));
}

// module.exports = app => {
	// app.get('/product', function(req, res) {
	// 	var connection = app.config.database();
	// 	var productQuery = new app.models.ProductModel(connection);
	// 	productQuery.result(function(err, result){
	// 		res.render("produtos/lista", {result:result});
	// 	});
	// 	connection.end();
	// });

	// app.get('/product/create', function(req, res){
	// 	res.render("produtos/form");
	// });

	// app.post('/product/create', function(req, res){
	// 	var connection = app.config.database();
	// 	var productQuery = new app.models.ProductModel(connection);
	// 	var form_request = req.body;

	// 	req.assert('name', 'Name is required.').notEmpty();
	// 	req.assert('qtd', 'Qtd is required').notEmpty();

	// 	var errorValidation = req.validationErrors();

	// 	if (errorValidation) {
	// 		res.render('produtos/form', {errorValidations:errorValidation});
	// 		return;
	// 	}

	// 	productQuery.save(form_request, function(err, result) {
	// 		if (err) console.log(err);
	// 		res.redirect("/product");
	// 	});
	// });
// }

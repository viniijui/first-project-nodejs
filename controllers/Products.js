'use strict';

const models = require('../models');
const products = new models.Products();

class Products {
	index(params) {
		return products.fetch(params.limit)
			.then(products => ({
				template: 'products/index.ejs',
				params: {
					title: 'Products page',
					products
				}
			}));
	}

	product(params) {
		return products.get(params.id)
			.then(product => ({
				template: 'products/product',
				params: {
					product
				}
			}));

	}
}

module.exports = Products;

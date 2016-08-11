'use strict';

const _ = require('lodash');
const Promise = require('bluebird');
const Products = require('./Products');

class Renderer {
	call(method) {
		// return a request handler which resolves your controller as Promisified way
		return (req, res) => this.callController(method, req)
			.then(response => {
				res.render(response.template, response.params);
			})
			.catch(err => {
				// show errors
				res.json({
					error: err.message
				});
			})
			.finally(() => {
				// @optional is executd even with success or error
			});
	}

	callController(method, req) {
		try {
			let params = _.extend({}, req.params, req.query, req.body);

			return method(params); // <- is a promise
		} catch (err) {
			return Promise.reject(err);
		}
	}
}

module.exports = {
	renderer: new Renderer(),
	Products
}

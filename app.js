'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;

    next(err);
});

// final error middleware, note last 'next' paramater, read express documentation to understand
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
    	error: err.message
    });
});

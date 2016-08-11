'use strict';

const express = require('express');
const router = express.Router();
const products = require('./products')(router);

module.exports = router;

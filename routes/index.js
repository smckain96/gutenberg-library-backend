var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gutenberg Library API' });
});


module.exports = router;

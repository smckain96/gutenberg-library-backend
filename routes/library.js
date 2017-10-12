var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

//Get library
router.get('/', function(req, res, next) {
  knex('library')
    .select()
    .then(data => res.json(data))
});

//Create new library entry
router.post('/', function(req, res, next) {
  knex('library')
    .insert()
    .then(entry => res.json(entry))
});

//Show library entry
router.get('/:id', function(req, res, next) {
  knex('library')
    .select()
    .where('id', req.params.id)
    .then(function(entry) {
      console.log('entry data:', entry)
      res.json(entry)
    })
});

//Delete entry
router.post('/:id', function(req, res, next) {
  knex('library')
  .delete()
  .where('id', req.params.id)
});




module.exports = router;

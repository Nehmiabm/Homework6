var express = require('express');
var jsonArray = require('../inventors.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //read json data from inventors.json
  res.render('index', { inventors: jsonArray });
});

module.exports = router;

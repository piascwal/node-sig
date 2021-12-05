var express = require('express');
var router = express.Router();
var xml2js       = require('xml2js');
var parser       = new xml2js.Parser();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/mat', function(req, res, next) {

  res.send('Hello Mat' + req.query.user);
});

module.exports = router;

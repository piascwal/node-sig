var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers);
  res.render('index', { title: 'Express', dirname:__dirname});
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const awsKey = 'AKIAYRTGSDFDSTGSHJKT';
  res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const clientId = 'AKIAYRTGSDFDSTGSHJKT';
  const clientSecret = 'f=~er2+cxj&x<*(K}_Dm1e^-U';
  res.render('index', { title: 'Express' });
});

module.exports = router;

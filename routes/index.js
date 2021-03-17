var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const clientId = 'AKIAYRTGSDFDSTGSHJKT';
  const clientSecret = 'f=~er2+cxj&x<*(K}_Dm1e^-U';
  const slack_token="xoxp-198947049743-7861195093-830655328819-9d40a979cac97bccf1190afb660b37e1";
  res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const clientId = 'AKIAFJKR45SAWSZ5XDF3';
  const clientSecret = 'f=~er2+cxj&x<*(K}_Dm1e^-U';
  const credentials = {
    client_id: A3T6AKIAFJKR45SAWSZ5,
    client_secret: hjshnk5ex5u34565d4654HJKGjhz545d89sjkjka,
  };
  const someKey = "xoxp-198947049743-7861195093-830655328819-9d40a979cac97bccf1190afb660b37e1";
  const password = "IHTo=amfWLtJU0!Uz";
  const pwd = "BnwXnLra";
  res.render('index', { title: 'Express' });
});

module.exports = router;

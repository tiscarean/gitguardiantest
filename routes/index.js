var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const clientId = 'AKIAFJKR45SAWSZ5XDF3';
  const clientSecret = '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';
  const credentials = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };
  const someKey = "xoxp-198947049743-7861195093-830655328819-9d40a979cac97bccf1190afb660b37e1";
  const password = "IHTo=amfWLtJU0!Ut";
  const pwd = "BnwXnLra";
  res.render('index', { title: 'Express' });
});

module.exports = router;

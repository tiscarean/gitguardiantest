var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  const credential = 'ZU3\'R1370pvag_EE\'?,]lU-!4jle!MrU~<<}!.ipk';
  const credentials = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };
  const someKey = "xoxp-198947049743-7861195093-830655328819-9d40a979cac97bccf1190afb660b37e1";
  const auth = "IHTo=amfWLtJU0Ut";
});

module.exports = router;

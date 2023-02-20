var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards": [
      { test: 'test1', test2: 'test2'}
    ],
    "webCards": [
      { best: 'test1', best: 'test2'}
    ]
  };

  res.json(jsonResponse);
});

module.exports = router;

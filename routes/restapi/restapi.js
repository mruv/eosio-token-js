var express = require('express');
var router = express.Router();

/* RESTful API endpoints */
router.get('/', function(req, res, next) {
  res.send("REST API v1");
});

module.exports = router;
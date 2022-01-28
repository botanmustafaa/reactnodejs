var express = require('express');
var router = express.Router();

const me = {
    myName: "botan barzan",
    age: 23,
    hobby: "programming"
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(me));
});

module.exports = router;
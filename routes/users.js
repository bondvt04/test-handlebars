var express = require('express');
var router = express.Router();

var controller = require("../controllers/site/usersController");

/* GET users listing. */
router.get('/', controller.indexAction);

module.exports = router;

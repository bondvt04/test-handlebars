var express = require('express');
var router = express.Router();

var controller = require("../controllers/site/usersController");

/* GET users listing. */
//router.get('/', controller.indexAction.bind(controller));

router.get('/', function(req, res, next) {
    controller.indexAction(req, res, next)
});

module.exports = router;

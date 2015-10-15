"use strict"

var SiteControllerAbstract = require("../abstracts/SiteControllerAbstract");

class UsersController extends SiteControllerAbstract {
    indexAction(req, res, next) {
        res.render("screens/users/index");
    }
}

// we do "new" stuff here, so we have singleton
module.exports = new UsersController();
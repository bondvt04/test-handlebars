"use strict"

var SiteControllerAbstract = require("../abstracts/SiteControllerAbstract");

class UsersController { //extends SiteControllerAbstract {
    indexAction(req, res, next) {
        res.render("screens/users/index", {
            users: this._getUsers()
        });
    }

    asdf() {
        this._asdf();
    }

    _asdf() {
        console.log("asdf");
    }

    _getUsers(filters, orders) {
        var filters = filters || {},
            orders = orders || {};

        var users = [
            {
                name: "John",
                email: "john@gmail.com"
            },
            {
                name: "Mary",
                email: "mary@gmail.com"
            }
        ];

        return users;
    }
}

var controllerInstance = new UsersController();

//controllerInstance.asdf();

// we do "new" stuff here, so we have singleton
module.exports = controllerInstance;
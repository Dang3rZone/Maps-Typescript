"use strict";
exports.__esModule = true;
exports.User = void 0;
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1["default"].name.firstName();
        this.location = {
            lat: +faker_1["default"].address.latitude(),
            lng: +faker_1["default"].address.longitude()
        };
    }
    return User;
}());
exports.User = User;

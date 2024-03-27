"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOrDoctors = void 0;
var checkRole_1 = require("../../Users/checkRole");
// this is just to check if the user is either an admin or a doctor
var adminsOrDoctors = function (_a) {
    var user = _a.req.user;
    // Scenario #1 - Check if user has the 'admin' role
    if (user && (0, checkRole_1.checkRole)(['admin'], user)) {
        return true;
    }
    // Scenario #2 - Check if user has the 'doctor role
    if (user && (0, checkRole_1.checkRole)(['doctor'], user)) {
        return true;
    }
    // Scenario #3 - Dissallow all others
    return false;
};
exports.adminsOrDoctors = adminsOrDoctors;

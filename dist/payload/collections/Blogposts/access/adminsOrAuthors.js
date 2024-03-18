"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOrAuthors = void 0;
var checkRole_1 = require("../../Users/checkRole");
// this is just to check if the user is either an admin or an author
var adminsOrAuthors = function (_a) {
    var user = _a.req.user;
    // Scenario #1 - Check if user has the 'admin' role
    if (user && (0, checkRole_1.checkRole)(['admin'], user)) {
        return true;
    }
    // Scenario #2 - Check if user has the 'author' role
    if (user && (0, checkRole_1.checkRole)(['author'], user)) {
        return true;
    }
    // Scenario #3 - Disallow all others
    return false;
};
exports.adminsOrAuthors = adminsOrAuthors;

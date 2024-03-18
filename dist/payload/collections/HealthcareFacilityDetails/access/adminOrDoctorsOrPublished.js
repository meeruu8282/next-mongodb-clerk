"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOrDoctorsOrPublished = void 0;
var checkRole_1 = require("../../Users/checkRole");
var adminsOrDoctorsOrPublished = function (_a) {
    var user = _a.req.user;
    // Scenario #1 - Check if user has the 'admin' role
    if (user && (0, checkRole_1.checkRole)(['admin'], user)) {
        return true;
    }
    // Scenario #2 - Check if user has the 'doctor' role
    if (user && (0, checkRole_1.checkRole)(['doctor'], user)) {
        // Will only return access for documents that were created by the current user
        return {
            doctors: {
                equals: user.id,
            },
        };
    }
    // Scenario #3 - Allow only documents that are published
    return {
        _status: {
            equals: 'published',
        },
    };
};
exports.adminsOrDoctorsOrPublished = adminsOrDoctorsOrPublished;

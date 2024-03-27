"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOrAuthorsOrPublished = void 0;
var checkRole_1 = require("../../Users/checkRole");
var adminsOrAuthorsOrPublished = function (_a) {
    var user = _a.req.user;
    // Scenario #1 - Check if user has the 'admin' role
    if (user && (0, checkRole_1.checkRole)(['admin'], user)) {
        return true;
    }
    // Scenario #2 - Check if user has the 'author' role
    if (user && (0, checkRole_1.checkRole)(['author'], user)) {
        // Will only return access for documents that were created by the current user
        return {
            authors: {
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
exports.adminsOrAuthorsOrPublished = adminsOrAuthorsOrPublished;

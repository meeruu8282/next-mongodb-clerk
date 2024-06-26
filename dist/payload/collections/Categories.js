"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Categories = {
    slug: 'categories',
    admin: {
        useAsTitle: 'title',
        group: 'Blog',
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
    ],
};
exports.default = Categories;

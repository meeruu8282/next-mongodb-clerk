"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Specializations = {
    slug: 'specializations',
    admin: {
        useAsTitle: 'title',
        group: 'Providers',
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
exports.default = Specializations;

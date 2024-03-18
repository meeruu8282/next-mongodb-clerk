"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FacilityTypes = {
    slug: 'facilitytypes',
    labels: {
        singular: 'Facility Type',
        plural: 'Facility Types',
    },
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
exports.default = FacilityTypes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var link_1 = __importDefault(require("../fields/link"));
exports.Footer = {
    slug: 'footer',
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'copyright',
            label: 'Copyright',
            type: 'text',
            required: true,
        },
        {
            name: 'navItems',
            type: 'array',
            maxRows: 6,
            fields: [
                (0, link_1.default)({
                    appearances: false,
                }),
            ],
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            required: true,
        },
        {
            name: 'phonenumber',
            label: 'Phonenumber',
            type: 'text',
            required: true,
        },
        {
            name: 'headernavItems',
            type: 'array',
            maxRows: 14,
            fields: [
                (0, link_1.default)({
                    appearances: false,
                }),
            ],
        },
        {
            name: 'socialmedianavitems',
            type: 'array',
            maxRows: 3,
            fields: [
                (0, link_1.default)({
                    appearances: false,
                }),
            ],
        },
    ],
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var admins_1 = require("../../access/admins");
var anyone_1 = require("../../access/anyone");
var adminsAndUser_1 = __importDefault(require("./access/adminsAndUser"));
var ensureFirstUserIsAdmin_1 = require("./hooks/ensureFirstUserIsAdmin");
var loginAfterCreate_1 = require("./hooks/loginAfterCreate");
var Users = {
    slug: 'users',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email'],
        group: 'Users',
    },
    access: {
        read: adminsAndUser_1.default,
        create: anyone_1.anyone,
        update: adminsAndUser_1.default,
        delete: admins_1.admins,
    },
    hooks: {
        afterChange: [loginAfterCreate_1.loginAfterCreate],
    },
    auth: true,
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'roles',
            type: 'select',
            hasMany: true,
            required: true,
            defaultValue: ['user'],
            options: [
                {
                    label: 'admin',
                    value: 'admin',
                },
                {
                    label: 'user',
                    value: 'user',
                },
                {
                    label: 'author',
                    value: 'author'
                },
                {
                    label: 'doctor',
                    value: 'doctor',
                }
            ],
            hooks: {
                beforeChange: [ensureFirstUserIsAdmin_1.ensureFirstUserIsAdmin],
            },
            access: {
                read: admins_1.admins,
                create: admins_1.admins,
                update: admins_1.admins,
            },
        },
    ],
    timestamps: true,
};
exports.default = Users;

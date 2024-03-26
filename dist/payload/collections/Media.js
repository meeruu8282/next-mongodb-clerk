"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var path_1 = __importDefault(require("path"));
var richtext_slate_1 = require("@payloadcms/richtext-slate");
exports.Media = {
    slug: 'media',
    admin: {
        group: 'Media',
    },
    upload: {
        staticDir: path_1.default.resolve(__dirname, '../../../media'),
        imageSizes: [
            {
                // not sure what the image sizes are going to be, leaving the example sizes here for now
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                // By specifying `undefined` or leaving a height undefined,
                // the image will be sized to a certain width,
                // but it will retain its original aspect ratio
                // and calculate a height automatically.
                height: undefined,
                position: 'centre',
            },
        ],
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'caption',
            type: 'richText',
            editor: (0, richtext_slate_1.slateEditor)({
                admin: {
                    elements: ['link'],
                },
            }),
        },
    ],
};

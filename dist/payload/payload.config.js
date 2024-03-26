"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_cloud_1 = require("@payloadcms/plugin-cloud");
// import formBuilder from '@payloadcms/plugin-form-builder'
var plugin_nested_docs_1 = __importDefault(require("@payloadcms/plugin-nested-docs"));
var plugin_redirects_1 = __importDefault(require("@payloadcms/plugin-redirects"));
var plugin_seo_1 = __importDefault(require("@payloadcms/plugin-seo"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var config_1 = require("payload/config");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var Categories_1 = __importDefault(require("./collections/Categories"));
var Comments_1 = __importDefault(require("./collections/Comments"));
var Media_1 = require("./collections/Media");
var Pages_1 = require("./collections/Pages");
var Posts_1 = require("./collections/Posts");
var Projects_1 = require("./collections/Projects");
var Users_1 = __importDefault(require("./collections/Users"));
//import { seed } from 'endpoints/seed'
var Footer_1 = require("./globals/Footer");
var Header_1 = require("./globals/Header");
var Settings_1 = require("./globals/Settings");
var Blogposts_1 = require("./collections/Blogposts");
var HealthcareFacilityDetails_1 = require("./collections/HealthcareFacilityDetails");
var FacilityTypes_1 = __importDefault(require("./collections/FacilityTypes"));
var Specializations_1 = __importDefault(require("./collections/Specializations"));
var generateTitle = function () {
    return 'My Website';
};
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../../.env'),
});
exports.default = (0, config_1.buildConfig)({
    admin: {
        user: 'users',
        components: {},
        bundler: (0, bundler_webpack_1.webpackBundler)(),
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [Blogposts_1.BlogPosts, Categories_1.default, HealthcareFacilityDetails_1.HealthCareFacilityDetails, FacilityTypes_1.default, Specializations_1.default, Users_1.default, Pages_1.Pages, Posts_1.Posts, Projects_1.Projects, Media_1.Media, Comments_1.default,],
    globals: [Settings_1.Settings, Header_1.Header, Footer_1.Footer],
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URI,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
    cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
    csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
    // endpoints: [
    //   // The seed endpoint is used to populate the database with some example data
    //   // You should delete this endpoint before deploying your site to production
    //   {
    //     path: '/seed',
    //     method: 'get',
    //     handler: seed,
    //   },
    // ],
    plugins: [
        // formBuilder({}),
        (0, plugin_redirects_1.default)({
            collections: ['pages', 'posts', 'blogposts'],
        }),
        (0, plugin_nested_docs_1.default)({
            collections: ['categories'],
        }),
        (0, plugin_seo_1.default)({
            collections: ['pages', 'posts', 'projects'],
            generateTitle: generateTitle,
            uploadsCollection: 'media',
        }),
        (0, plugin_cloud_1.payloadCloud)(),
    ],
});

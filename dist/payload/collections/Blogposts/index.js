"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPosts = void 0;
var ArchiveBlock_1 = require("../../blocks/ArchiveBlock");
var CallToAction_1 = require("../../blocks/CallToAction");
var Content_1 = require("../../blocks/Content");
var MediaBlock_1 = require("../../blocks/MediaBlock");
var hero_1 = require("../../fields/hero");
var slug_1 = require("../../fields/slug");
var populateArchiveBlock_1 = require("../../hooks/populateArchiveBlock");
var populatePublishedDate_1 = require("../../hooks/populatePublishedDate");
var populateAuthors_1 = require("./hooks/populateAuthors");
var revalidatePost_1 = require("./hooks/revalidatePost");
var adminsOrAuthorsOrPublished_1 = require("./access/adminsOrAuthorsOrPublished");
var adminsOrAuthors_1 = require("./access/adminsOrAuthors");
var adminsOrCreatedBy_1 = require("./access/adminsOrCreatedBy");
exports.BlogPosts = {
    slug: 'blogposts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
        group: 'Blog',
        preview: function (doc) {
            return "".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/api/preview?url=").concat(encodeURIComponent("".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/blogposts/").concat(doc === null || doc === void 0 ? void 0 : doc.slug)), "&secret=").concat(process.env.PAYLOAD_PUBLIC_DRAFT_SECRET);
        },
    },
    hooks: {
        beforeChange: [
            populatePublishedDate_1.populatePublishedDate,
        ],
        afterChange: [revalidatePost_1.revalidatePost],
        afterRead: [populateArchiveBlock_1.populateArchiveBlock, populateAuthors_1.populateAuthors],
    },
    versions: {
        drafts: true,
    },
    access: {
        read: adminsOrAuthorsOrPublished_1.adminsOrAuthorsOrPublished,
        update: adminsOrCreatedBy_1.adminsOrCreatedBy,
        create: adminsOrAuthors_1.adminsOrAuthors,
        delete: adminsOrCreatedBy_1.adminsOrCreatedBy,
    },
    fields: [
        {
            name: 'meta',
            label: 'Meta',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea',
                },
                {
                    name: 'keywords',
                    label: 'Keywords',
                    type: 'text',
                },
                {
                    name: 'readTime',
                    label: 'Read Time',
                    type: 'text',
                },
                {
                    name: 'image',
                    label: 'Featured Image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ]
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedDate',
            type: 'date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        {
            name: 'authors',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        // This field is only used to populate the user data via the `populateAuthors` hook
        // This is because the `user` collection has access control locked to protect user privacy
        // GraphQL will also not return mutated user data that differs from the underlying schema
        {
            name: 'populatedAuthors',
            type: 'array',
            admin: {
                readOnly: true,
                disabled: true,
            },
            access: {
                update: function () { return false; },
            },
            fields: [
                {
                    name: 'id',
                    type: 'text',
                },
                {
                    name: 'name',
                    type: 'text',
                },
            ],
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    fields: [hero_1.hero],
                },
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'layout',
                            type: 'blocks',
                            required: true,
                            blocks: [CallToAction_1.CallToAction, Content_1.Content, MediaBlock_1.MediaBlock, ArchiveBlock_1.Archive],
                        },
                    ],
                },
            ],
        },
        {
            name: 'relatedPosts',
            type: 'relationship',
            relationTo: 'blogposts',
            hasMany: true,
            filterOptions: function (_a) {
                var id = _a.id;
                return {
                    id: {
                        not_in: [id],
                    },
                };
            },
        },
        (0, slug_1.slugField)(),
    ],
};

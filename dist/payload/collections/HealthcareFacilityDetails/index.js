"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCareFacilityDetails = void 0;
var ArchiveBlock_1 = require("../../blocks/ArchiveBlock");
var CallToAction_1 = require("../../blocks/CallToAction");
var Content_1 = require("../../blocks/Content");
var MediaBlock_1 = require("../../blocks/MediaBlock");
var hero_1 = require("../../fields/hero");
var slug_1 = require("../../fields/slug");
var populateArchiveBlock_1 = require("../../hooks/populateArchiveBlock");
var populatePublishedDate_1 = require("../../hooks/populatePublishedDate");
var populateDoctors_1 = require("./hooks/populateDoctors");
var revalidatePost_1 = require("./hooks/revalidatePost");
var adminOrDoctors_1 = require("./access/adminOrDoctors");
var adminOrDoctorsOrPublished_1 = require("./access/adminOrDoctorsOrPublished");
var adminsOrCreatedBy_1 = require("./access/adminsOrCreatedBy");
exports.HealthCareFacilityDetails = {
    slug: 'healthcarefacilitydetails',
    labels: {
        singular: 'Healthcare Facility Details',
        plural: 'Healthcare Facility Details',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
        group: 'Providers',
        preview: function (doc) {
            return "".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/api/preview?url=").concat(encodeURIComponent("".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/blogposts/").concat(doc === null || doc === void 0 ? void 0 : doc.slug)), "&secret=").concat(process.env.PAYLOAD_PUBLIC_DRAFT_SECRET);
        },
    },
    hooks: {
        beforeChange: [populatePublishedDate_1.populatePublishedDate],
        afterChange: [revalidatePost_1.revalidatePost],
        afterRead: [populateArchiveBlock_1.populateArchiveBlock, populateDoctors_1.populateDoctors],
    },
    versions: {
        drafts: true,
    },
    access: {
        read: adminOrDoctorsOrPublished_1.adminsOrDoctorsOrPublished,
        update: adminsOrCreatedBy_1.adminsOrCreatedBy,
        create: adminOrDoctors_1.adminsOrDoctors,
        delete: adminsOrCreatedBy_1.adminsOrCreatedBy,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'facilitytype',
            type: 'relationship',
            relationTo: 'facilitytypes',
            hasMany: false,
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'specializations',
            type: 'relationship',
            relationTo: 'specializations',
            required: true,
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
            name: 'doctors',
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
            name: 'populatedDoctors',
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
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media',
                        },
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
        (0, slug_1.slugField)(),
    ],
};

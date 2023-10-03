import type { CollectionConfig } from 'payload/types'

import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/MediaBlock'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { populateDoctors } from './hooks/populateDoctors'
import { revalidatePost } from './hooks/revalidatePost'
import { adminsOrDoctors } from './access/adminOrDoctors'
import { adminsOrDoctorsOrPublished } from './access/adminOrDoctorsOrPublished'
import { adminsOrCreatedBy } from './access/adminsOrCreatedBy'

export const HealthCareFacilityDetails: CollectionConfig = {
  slug: 'healthcarefacilitydetails',
  labels: {
    singular: 'Healthcare Facility Details',
    plural: 'Healthcare Facility Details',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Providers',
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/blogposts/${doc?.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [populatePublishedDate],
    afterChange: [revalidatePost],
    afterRead: [populateArchiveBlock, populateDoctors],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrDoctorsOrPublished,
    update: adminsOrCreatedBy,
    create: adminsOrDoctors,
    delete: adminsOrCreatedBy,
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
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
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
        update: () => false,
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
          fields: [hero],
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
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
          ],
        },
      ],
    },

    slugField(),
  ],
}

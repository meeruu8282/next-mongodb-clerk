import path from 'path'
import type { CollectionConfig } from 'payload/types'
import { slateEditor } from '@payloadcms/richtext-slate'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Media',
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
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
    read: () => true,
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
      editor: slateEditor({
        admin: {
          elements: ['link'],
        },
      }),
    },
  ],
}

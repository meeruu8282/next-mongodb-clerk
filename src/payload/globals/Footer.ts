import type { GlobalConfig } from 'payload/types'


import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
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
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'headernavItems',
      type: 'array',
      maxRows: 14,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'socialmedianavitems',
      type: 'array',
      maxRows: 3,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}

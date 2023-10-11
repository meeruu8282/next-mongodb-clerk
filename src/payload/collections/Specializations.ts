import type { CollectionConfig } from 'payload/types'

const Specializations: CollectionConfig = {
    slug: 'specializations',
    admin: {
      useAsTitle: 'title',
      group: 'Providers',
    },
    access: {
      read: () => true,
    },
    fields: [
      {
        name: 'title',
        type: 'text',
      },
    ],
  }
  
  export default Specializations
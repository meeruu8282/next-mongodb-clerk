import type { CollectionConfig } from 'payload/types'

const FacilityTypes: CollectionConfig = {
    slug: 'facilitytypes',
    labels: {
      singular: 'Facility Type',
      plural: 'Facility Types',
    },
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
  
  export default FacilityTypes
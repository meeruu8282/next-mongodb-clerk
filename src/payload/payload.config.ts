import { payloadCloud } from '@payloadcms/plugin-cloud'
// import formBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import Comments from './collections/Comments'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Projects } from './collections/Projects'
import Users from './collections/Users'
import BeforeDashboard from './components/BeforeDashboard'
import { seed } from './endpoints/seed'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { Settings } from './globals/Settings'
import { BlogPosts } from './collections/Blogposts'
import { HealthCareFacilityDetails } from './collections/HealthcareFacilityDetails'
import FacilityTypes from './collections/FacilityTypes'
import Specializations from './collections/Specializations'

const generateTitle: GenerateTitle = () => {
  return 'My Website'
}

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

export default buildConfig({
  admin: {
    user: 'users',
    components: {
    },
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [BlogPosts, Categories, HealthCareFacilityDetails, FacilityTypes, Specializations, Users, Pages, Posts, Projects, Media, Comments,],
  globals: [Settings, Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  endpoints: [
    // The seed endpoint is used to populate the database with some example data
    // You should delete this endpoint before deploying your site to production
    {
      path: '/seed',
      method: 'get',
      handler: seed,
    },
  ],
  plugins: [
    // formBuilder({}),
    redirects({
      collections: ['pages', 'posts', 'blogposts'],
    }),
    nestedDocs({
      collections: ['categories'],
    }),
    seo({
      collections: ['pages', 'posts', 'projects'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    payloadCloud(),
  ],
})

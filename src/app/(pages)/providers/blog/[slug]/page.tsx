import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Blogpost } from '@/payload/payload-types'
import { fetchDoc } from '@/app/_api/fetchDoc'
import { fetchDocs } from '@/app/_api/fetchDocs'
import { RelatedPosts } from '@/app/_blocks/RelatedPosts'
import { Blocks } from '@/app/_components/Blocks'
import { generateMeta } from '@/app/_utilities/generateMeta'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function BlogPost({ params: { slug } }) {
    const { isEnabled: isDraftMode } = draftMode()
  
    let blogPost: Blogpost | null = null
  
    try {
      blogPost = await fetchDoc<Blogpost>({
        collection: 'blogposts',
        slug,
        draft: isDraftMode,
      })
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    }
  
    if (!blogPost) {
      notFound()
    }
  
    const { layout } = blogPost

    return(
        <React.Fragment>
            
        </React.Fragment>
    )
}

export async function generateStaticParams() {
    try {
      const blogPosts = await fetchDocs<Blogpost>('blogposts')
      return blogPosts?.map(({ slug }) => slug)
    } catch (error) {
      return []
    }
  }
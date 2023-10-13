import SuperCharge from "../Components/superCharge/superCharge"
import React from 'react'

import { Blogpost } from "@/payload/payload-types"
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchDocs } from '../../../_api/fetchDocs'
import { fetchDoc } from "@/app/_api/fetchDoc"
import { RelatedPosts } from '../../../_blocks/RelatedPosts'
import { Blocks } from '../../../_components/Blocks'
import { ProjectHero } from '../../../_heros/ProjectHero'
import { generateMeta } from '../../../_utilities/generateMeta'
import { formatBlogPosts } from "@/app/_utilities/formatBlogPosts"

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Blog() {

  let blogPosts: Blogpost[] | null = null

  try {
    blogPosts = await fetchDocs<Blogpost>('blogposts')
    //console.log(blogPosts)
    
  } catch (error) {

  }


  return (
    <div>Blog

      {/* Code in components folder then superCarge */}
      <SuperCharge />
    </div>



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

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let blogPost: Blogpost | null = null

  try {
    blogPost = await fetchDoc<Blogpost>({
      collection: 'blogposts',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateMeta({ doc: blogPost })
}
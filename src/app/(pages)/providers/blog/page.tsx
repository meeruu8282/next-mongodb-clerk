import SuperCharge from '../Components/superCharge'
import React from 'react'

import { Blogpost } from '@/payload/payload-types'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchDocs } from '../../../_api/fetchDocs'
import { fetchDoc } from '@/app/_api/fetchDoc'
import { RelatedPosts } from '../../../_blocks/RelatedPosts'
import { Blocks } from '../../../_components/Blocks'
import { ProjectHero } from '../../../_heros/ProjectHero'
import { generateMeta } from '../../../_utilities/generateMeta'
import { formatBlogPosts } from '@/app/_utilities/formatBlogPosts'
import SearchBar from '../Components/searchBar'
import LatestBlog from '../Components/LatestBlog'
import CarelyoButton from '../Components/getStartedButton'
import NavbarMobile from '../Components/NavBar/NavbarMobile'
import Navbar from '../Components/NavBar/navbar'
import SuperChargeMobile from '../Components/superCharge/SuperChargeMobile'
// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Blog() {
  let blogPosts: Blogpost[] | null = null

  try {
    blogPosts = await fetchDocs<Blogpost>('blogposts')
    console.log(blogPosts)
  } catch (error) {}

  return (
    <div>

    <div className="  max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
            <Navbar />
        </div>
        <div className="block md:hidden">
            <NavbarMobile />
        </div>
    </div>
      <SearchBar />
      <LatestBlog />
      {/*  Categories */}
      <section>
        <div className="container py-12 px-12 flex justify-around mx-auto">
          <button className="bg-[#45AC60] text-white rounded-full text-md font-semibold py-2 px-3 w-24 h-10">
            For you
          </button>
          <button className="bg-none text-black rounded-full text-md font-semibold py-2 px-3 w-fit h-10">
            Health and Wellness
          </button>
          <button className="bg-none text-black rounded-full text-md font-semibold py-1 px-2 w-fit h-10">
            Healthy Living
          </button>
          <button className="bg-none text-black rounded-full text-md font-semibold py-1 px-2 w-fit h-10">
            Medical Innovations
          </button>
          <button className="bg-none text-black rounded-full text-md font-semibold py-1 px-2 w-fit h-10">
            Patient Stories
          </button>
        </div>

        {/*   3 posts in a column with a button to view more */}
        <div className="container mx-auto">
          <div className="posts">
            <div className="post flex gap-5">
              <div className="post-image">
                <div className="placeholder w-36 h-36 bg-red-200 rounded-3xl"></div>
              </div>
              <div className="post-content">
                <h3 className="text-2xl font-bold">The Importance of Mental Health</h3>
                <p className="font-thin my-5">
                  Mental health is an important aspect of our overall health. It affects how we
                  think, feel, and act. It also helps determine how we handle stress, relate to
                  others, and make choices. Mental health is important at every stage of life, from
                  childhood and adolescence through adulthood.
                </p>
                <div className="button flex justify-between">
                  <p className="font-thin my-5">Author</p>
                  <CarelyoButton buttonText="Read More" />
                </div>
              </div>
            </div>
            <div className="post flex gap-5">
              <div className="post-image">
                <div className="placeholder w-36 h-36 bg-red-200 rounded-3xl"></div>
              </div>
              <div className="post-content">
                <h3 className="text-2xl font-bold">The Importance of Mental Health</h3>
                <p className="font-thin my-5">
                  Mental health is an important aspect of our overall health. It affects how we
                  think, feel, and act. It also helps determine how we handle stress, relate to
                  others, and make choices. Mental health is important at every stage of life, from
                  childhood and adolescence through adulthood.
                </p>
                <div className="button flex justify-between">
                  <p className="font-thin my-5">Author</p>
                  <CarelyoButton buttonText="Read More" />
                </div>
              </div>
            </div>
            <div className="post flex gap-5">
              <div className="post-image">
                <div className="placeholder w-36 h-36 bg-red-200 rounded-3xl"></div>
              </div>
              <div className="post-content">
                <h3 className="text-2xl font-bold">The Importance of Mental Health</h3>
                <p className="font-thin my-5">
                  Mental health is an important aspect of our overall health. It affects how we
                  think, feel, and act. It also helps determine how we handle stress, relate to
                  others, and make choices. Mental health is important at every stage of life, from
                  childhood and adolescence through adulthood.
                </p>

                <div className="button flex justify-between">
                  <p className="font-thin my-5">Author</p>
                  <CarelyoButton buttonText="Read More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 <div className="supercharge hidden lg:flex justify-center">
              <SuperCharge />
            </div>
            <div className="superChargeMobile lg:hidden">
              <SuperChargeMobile />
            </div> </div>
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

'use client'

import React from 'react'
import Link from 'next/link'

import type { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import  HeaderComponent  from './HeaderComponent'
import { headers } from 'next/headers'



export async function Header() {
  let header: Header | null = null

  try {
    console.log('Before fetching header...');
    header = await fetchHeader()
    console.log('Header fetched successfully:', header);
  } catch (error) {
    console.log('Error fetching header:', error);
    console.log(error)
  }

  return (
    <>
     <HeaderComponent header={header}/>
    </>
  )
}

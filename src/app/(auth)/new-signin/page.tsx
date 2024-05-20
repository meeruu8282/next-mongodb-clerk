import React from 'react'
import { SignIn } from '@clerk/nextjs'

const NewSignInPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center mt-[200px]'>  
     <SignIn/>
    </div>
 
  )
}
export default NewSignInPage 
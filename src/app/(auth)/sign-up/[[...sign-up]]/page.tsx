import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center mt-[100px]'>
            <SignUp
    afterSignInUrl='/dashboard'
    appearance={{
        elements: {
            rootBox: 'mx-auto'
        }
    }}/>
    </div>

  )
}

export default SignUpPage
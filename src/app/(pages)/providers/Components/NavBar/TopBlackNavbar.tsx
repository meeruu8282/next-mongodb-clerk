'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

const TopBlackNavbar = () => {
  //Read current url pathname
  const currentPath = usePathname()
  const { user } = useUser() // Using useUser hook to get the user object

  const isCurrentPath = pathName => {
    return currentPath.startsWith(`/${pathName}`)
  }

  return (
    <div className="z-auto">
      <div className="w-full justify-between mb-4 hidden bg-richBlack md:flex">
        <div className="flex text-white justify-end ml-[8vw]">
          <div
            className="mt-6 mb-2 flex space-x-10 text-[13px] 
            font-inter leading-5"
          >
            {/* FOR PATIENTS */}
            <div>
              <Link href="/patients/howitworks">
                <h1 className={isCurrentPath('patients') ? 'font-semibold' : 'font-normal'}>
                  FOR PATIENTS
                </h1>
                <div className="flex justify-center">
                  <div
                    className={`w-[94%] h-[0.32rem] mt-1
                    ${isCurrentPath('patients') && 'bg-white rounded-tr-[24px] rounded-tl-[24px]'}`}
                  ></div>
                </div>
              </Link>
            </div>
            {/* FOR PROVIDERS */}
            <div>
              <Link href="/providers/howItWorks">
                <h1 className={isCurrentPath('providers') ? 'font-semibold' : 'font-normal'}>
                  FOR PROVIDERS
                </h1>
                <div className="flex justify-center">
                  <div
                    className={`w-[94%] h-[0.32rem] mt-1
                    ${
                      isCurrentPath('providers') && 'bg-white rounded-tr-[24px] rounded-tl-[24px]'
                    }`}
                  ></div>
                </div>
              </Link>
            </div>
            {/* FOR PARTNERS */}
            <div>
              <Link href="/partners/howitworks">
                <h1 className={isCurrentPath('partners') ? 'font-semibold' : 'font-normal'}>
                  FOR PARTNERS
                </h1>
                <div className="flex justify-center">
                  <div
                    className={`w-[94%] h-[0.32rem] mt-1
                    ${isCurrentPath('partners') && 'bg-white rounded-tr-[24px] rounded-tl-[24px]'}`}
                  ></div>
                </div>
              </Link>
            </div>
            {/* FOR SHOP */}
            <div>
              {/* To Do: a correct pathname and a link*/}
              <h1 className={isCurrentPath('shop') ? 'font-semibold' : 'font-normal'}>FOR SHOP</h1>
              <div className="flex justify-center">
                <div
                  className={`w-[94%] h-[0.32rem] mt-1
                  ${isCurrentPath('shop') && 'bg-white rounded-tr-[24px] rounded-tl-[24px]'}`}
                ></div>
              </div>
            </div>
            {/* Other menu items */}
            {/* ... */}
            {/* Authentication links */}
          </div>
        </div>
        <div className=" flex">
          <div className="flex h-auto items-center text-white ">
            {!user?.id && (
              <>
               <Link href={'/sign-in'} className=" text-gray-300 hover:text-white mr-4">
              Sign In
            </Link>
            <Link href={'/sign-up'} className=" text-gray-300 hover:text-white mr-4">
              Sign Up
            </Link>
              </>
            )}
           
          </div>
          {/* Profile and user button */}
          <div className="flex items-center ml-4 mr-5">
            {user?.id && (
              <> 
                <Link href="/profile" className=" text-gray-300 hover:text-white mr-4">
              Profile
            </Link>
            <UserButton afterSignOutUrl="/" />
              </>
            )}
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBlackNavbar

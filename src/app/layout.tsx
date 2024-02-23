import Navbar from './(pages)/providers/Components/NavBar/navbar'

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import SuperCharge from './(pages)/providers/Components/superCharge'
import NavbarMobile from './(pages)/providers/Components/NavBar/NavbarMobile'
import FooterComponent from './_components/Footer/FooterComponent'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import { Providers } from './_providers'
import { HeaderNav } from './_components/Header/Nav'
import { Footer } from './_components/Footer'
import SuperChargeMobile from './(pages)/providers/Components/superCharge/SuperChargeMobile'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className=" h-[157.69px] gap-[24px] z-auto ">
            <div> </div>
            <div className="h-[65px] w-screen hidden bg-[rgba(22,28,40,1)] md:flex items-end ">
              <div className="topNavbarInner justify-end ml-28">
                <div className="  w-[391px] h-[17px]">
                  <div className="  flex space-x-3 h-[17px] text-[13px] font-[Inter] leading-5 ">
                    <h1>FOR PATIENTS</h1>
                    <div> </div>
                    <div>
                      <div>
                        <h1>
                          FOR PROVIDERS
                          <div className="bg-white w-[100px] h-[6px] rounded-tr-[25px] rounded-tl-[24px]"></div>
                        </h1>
                      </div>
                    </div>

                    <h1>FOR PARTNERS</h1>
                    <h1>FOR SHOP</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="  max-h-32px top-25px left-144px ">
              <div className="hidden md:block">
                <Navbar />
              </div>
              <div className="">{/*<NavbarMobile />*/}</div>
            </div>
            <div className="rounded-[30px] ">
              <h1 className="text-[64px]  leading-[83px];"></h1>
            </div>
          </div>
          <main className="min-h-screen main">{children}</main>

          <div className="supercharge hidden lg:flex justify-center">
            <SuperCharge />
          </div>
          <div className="superChargeMobile lg:hidden">
            <SuperChargeMobile />
          </div>

          <div className="">
            <Footer />
          </div>
          <div className="">{/*<FooterMobile/>*/}</div>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}

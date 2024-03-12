import Navbar from './(pages)/providers/Components/NavBar/navbar'

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import SuperCharge from './(pages)/providers/Components/superCharge'
import FooterComponent from './_components/Footer/FooterComponent'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import { Providers } from './_providers'
import { HeaderNav } from './_components/Header/Nav'
import { Footer } from './_components/Footer'
import SuperChargeMobile from './(pages)/providers/Components/superCharge/SuperChargeMobile'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <div className="mb-6 z-auto">
            <div className="w-full mb-4 hidden bg-richBlack md:flex">
              <div className="flex text-white justify-end ml-28">
                  <div className="mt-6 mb-2 flex space-x-3 text-[13px] gap-6
                  font-inter leading-5">
                    <div>
                      <Link href="/patients/howitworks">
                        <h1>FOR PATIENTS</h1>
                      </Link>
                    </div>
                    <div>
                      <Link href="/providers/howItWorks">
                        <h1>
                          FOR PROVIDERS
                          <div className="flex justify-center">
                            <div className="bg-white w-[95%] h-[6px] mt-1
                            rounded-tr-[24px] rounded-tl-[24px]">
                            </div>
                          </div>
                        </h1>
                      </Link>
                    </div>
                  <div>
                    <Link href="/partners/howitworks">
                      <h1>FOR PARTNERS</h1>
                    </Link>
                  </div>
                  <div>
                    <h1>FOR SHOP</h1>
                  </div>
                </div>
              </div>
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

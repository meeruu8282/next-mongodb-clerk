import Navbar from './(pages)/providers/Components/NavBar/navbar'

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import TopBlackNavbar from './(pages)/providers/Components/NavBar/TopBlackNavbar'
import SuperCharge from './(pages)/providers/Components/superCharge'
import FooterComponent from './_components/Footer/FooterComponent'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import { Providers } from './_providers'
import { HeaderNav } from './_components/Header/Nav'
import { Footer } from './_components/Footer'
import SuperChargeMobile from './(pages)/providers/Components/superCharge/SuperChargeMobile'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
        <body>
          <Providers>
            <TopBlackNavbar />
 
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
    </ClerkProvider>
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

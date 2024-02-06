'use client'
import React from 'react'
import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  const navItems = footer.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
             
            </Link>
            <p>{footer.copyright}</p>
            <div className={classes.socialLinks}>
              {navItems.map(item => {
                

                return (
                  <a
                  key={item.link.label}
                  href={item.link.url}
                  target="_blank" // Öppna länkar i ny flik
                  rel="noopener noreferrer" // Rekommenderad säkerhetspraxis för länkar som öppnar nya flikar
                  className={classes.socialLinksItem}
                >
                
                  <span>{item.link.label}</span> {/* Visa länkens etikett */}
                </a>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent

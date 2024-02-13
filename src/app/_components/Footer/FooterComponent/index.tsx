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
  const headernavItems = footer.headernavItems || []

  return (
    <footer className={classes.includes}>
      <Gutter>
      <ul className={classes.inclusions}>
  {inclusions.map((inclusion, index) => (
    <li key={inclusion.title + index}>
              {inclusion.icon && (
                <Image
                  src={inclusion.icon}
                  alt={inclusion.title}
                  width={105}
                  height={68}
                  className={classes.icon}
                />
              )}
              
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p className={classes.description}>{inclusion.description}</p>
              <div className={classes.navigator}>
                  {inclusion.title === 'NAVIGATION LINKS' && (
                <div className={classes.links}>
                  {headernavItems.map(item => (
                    <Button
                      key={item.link.label}
                      el="link"
                      href={item.link.url}
                    
                      className={classes.navlinks}
                    >
                      {item.link.label}
                    </Button>
                  ))}
                </div>
              )}
              </div>

            
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <p>{footer.copyright}</p>

            <div className={classes.socialLinks}>
              {navItems.map(item => {
                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinksItem}
                  >
                    {item.link.label}
                  </Button>
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

'use client'
import React from 'react'
import classes from './index.module.scss'
import { inclusions } from '../../../constants'
import { usePathname } from 'next/navigation'

import { Gutter } from '../../Gutter'
import Image from 'next/image'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const navItems = footer?.navItems || []
  const headernavItems = footer?.headernavItems || []
  const socialmedianavitems = footer?.socialmedianavitems || []
  console.log("Footer prop:", footer);

  {
    /* funktion to scroll to top of page */
  }
  const handleClickScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className={classes.includes}>
      <Gutter>
        <ul className={classes.inclusions}>
          {/*inclusions commes from ../../../constants (map next to layout file)  */}
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
                    {/*maps all links to pages  */}
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

                {inclusion.title === 'CONTACT INFORMATION' && (
                  <div>
                    <p className={classes.contact}>{footer?.email}</p>
                    <p className={classes.contact}>{footer?.phonenumber}</p>
                  </div>
                )}

                {inclusion.title === 'SOCIAL MEDIA' && (
                  <div className={classes.socialmedianavitems}>
                    {/*maps the social media icons with tab redirekt*/}
                    {socialmedianavitems.map(item => {
                      const icon = item?.link?.icon as Media

                      return (
                        <Button
                          key={item.link.label}
                          el="link"
                          href={item.link.url}
                          className={classes.socialmedianavitems}
                        >
                          <Image
                            src={icon?.url}
                            alt={item.link.label}
                            width={40}
                            height={40}
                            className={classes.socialmedianavitems}
                          />
                        </Button>
                      )
                    })}
                  </div>
                )}
              </div>
            </li>
          ))}
          {/*pagescroll button located in bottom right corner  */}
          <div className=" absolute right-5 bottom-3 w-[44px] h-[44px] bg-[#EFEEE8] rounded-[15px]">
            <button
              className=" flex items-center justify-center w-[44px] h-[44px]"
              onClick={handleClickScrollTop}
            >
              <Image
                className=""
                layout="fixed "
                width={15.18}
                height={15.58}
                src="/uparrow.svg"
                alt="Superchargebody"
              />
            </button>
          </div>
        </ul>
      </Gutter>

      <div className={classes.footer}>
        {/*black footer  */}
        <Gutter>
          <div className={classes.wrap}>
            <p>{footer?.copyright}</p>

            <div className={classes.socialLinks}>
              {/*maps all links in black footer lecal policy etc.. */}
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

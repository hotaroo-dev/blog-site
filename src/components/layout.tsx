import React, { ReactNode } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  title,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import useSiteMetadata from './use-siteMetadata'

interface Props {
  pageTitle: string
  children: ReactNode
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  const siteTitle = useSiteMetadata()

  return (
    <div className={container}>
      <header className={title}>{siteTitle}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout

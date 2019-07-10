import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          subtitle,
        }
      }
    }
  `)

  return (
    <>
      <header>
        <span>{data.site.siteMetadata.title}</span>
        <span>{data.site.siteMetadata.subtitle}</span>
      </header>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout

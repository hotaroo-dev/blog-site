import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data.site.siteMetadata.title
}

export default useSiteMetadata

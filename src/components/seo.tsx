import React from 'react'
import useSiteMetadata from './use-siteMetadata'

interface Props {
  title?: string
}

const Seo: React.FC<Props> = ({ title }) => {
  const siteTitle = useSiteMetadata()

  return (
    <title>
      {title} | {siteTitle}
    </title>
  )
}

export default Seo

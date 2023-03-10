import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import type { HeadFC } from 'gatsby'

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="https://i.redd.it/2tche7dz21i81.jpg" alt="Lofi boy" />
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Home Page" />

export default IndexPage

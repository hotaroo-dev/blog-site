import React from 'react'
import Layout from '../components/layout'
import type { HeadFC } from 'gatsby'

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage

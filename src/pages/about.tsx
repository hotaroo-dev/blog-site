import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import type { HeadFC } from 'gatsby'

const About: React.FC = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="About Me" />

export default About

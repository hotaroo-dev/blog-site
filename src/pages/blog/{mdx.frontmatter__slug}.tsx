import React, { ReactNode } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import type { HeadFC } from 'gatsby'

interface IData {
  mdx: {
    frontmatter: {
      date: string
      title: string
    }
  }
}

interface Props {
  data: IData
  children: ReactNode
}

const BlogPost: React.FC<Props> = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head: HeadFC = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
)

export default BlogPost

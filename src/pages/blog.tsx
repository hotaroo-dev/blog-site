import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import type { HeadFC } from 'gatsby'

interface INode {
  frontmatter: {
    date: string
    title: string
  }
  id: string
  excerpt: string
}

interface Props {
  data: {
    allMdx: {
      nodes: INode[]
    }
  }
}

const Blog: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: ASC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="My Blog Posts" />

export default Blog

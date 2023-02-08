import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import type { HeadFC } from 'gatsby'

interface INode {
  frontmatter: {
    date: string
    title: string
    slug: string
  }
  id: string
}

interface Props {
  data: {
    allMdx: {
      nodes: INode[]
    }
  }
}

const Blog: React.FC<Props> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
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
          slug
        }
        id
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="My Blog Posts" />

export default Blog

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import type { HeadFC } from 'gatsby'

interface INode {
  name: string
}

interface Props {
  data: {
    allFile: {
      nodes: INode[]
    }
  }
}

const Blog: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="My Blog Posts" />

export default Blog

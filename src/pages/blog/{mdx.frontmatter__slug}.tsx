import React, { ReactNode } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import type { HeadFC } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

interface IData {
  mdx: {
    frontmatter: {
      date: string
      title: string
      hero_image_alt: string
      hero_image: IGatsbyImageData
    }
  }
}

interface Props {
  data: IData
  children: ReactNode
}

const BlogPost: React.FC<Props> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image) as IGatsbyImageData

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head: HeadFC = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
)

export default BlogPost

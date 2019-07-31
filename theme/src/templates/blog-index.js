import React from "react"

import Layout from './layout.js'
import ListOfPosts from '../components/ListOfPosts'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <ListOfPosts data={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx (sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
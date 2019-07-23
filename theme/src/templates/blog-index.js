import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/layout.js'
import Post from '../components/Post'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      {posts.map(({ node: post }) => (
        <Post key={post.id}>
          <header>
            <h1 style={{fontSize: '2.5rem', margin: '0', lineHeight: '1.2'}}>
              <Link to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </h1>
          </header>
          <p>{post.excerpt}</p>
        </Post>
      ))}
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
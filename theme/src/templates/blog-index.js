import React from "react"
import { Link, graphql } from "gatsby"
import moment from 'moment';

import Layout from '../components/layout.js'
import Post from '../components/Post'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      {posts.map(({ node: post }) => (
        <Post key={post.id}>
          <header>
            {post.frontmatter.date && <p style={{marginTop: 0,color: '#696969', fontSize: '1rem'}}>{moment(post.frontmatter.date, "MM-DD-YYYY").format('LL')}</p>}
            <h1 style={{marginTop: '-.703125rem'}}>
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
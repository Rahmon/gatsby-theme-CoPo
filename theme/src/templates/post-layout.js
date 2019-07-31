import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from './layout';
import DatePost from '../components/DatePost';
import TitlePost from '../components/TitlePost';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <header>
        <DatePost>{mdx.frontmatter.date}</DatePost>
              
        <TitlePost>
            {mdx.frontmatter.title}
        </TitlePost>
      </header>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
      }
      body
    }
  }
`
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if ('Mdx' === node.internal.type) {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: 'slug',
            node,
            value: value
        })
    }
    
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {

        createPage({
            path: '/',
            component: path.resolve(`${__dirname}/src/templates/blog-index.js`),
        })

      resolve(
        graphql(
          `
            {
              allMdx {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          // this is some boilerlate to handle errors
          if (result.errors) {
            console.error(result.errors)
            reject(result.errors)
          }
  
          result.data.allMdx.edges.forEach(({ node }) => {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`${__dirname}/src/components/posts-page-layout.js`),
              context: { id: node.id },
            })
          })
        })
      )
    })
  }


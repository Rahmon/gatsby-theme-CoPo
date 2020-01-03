const fs = require("fs");

const pagesPath = fs.existsSync("./src/pages")
  ? "./src/pages"
  : `${__dirname}/src/pages/`;

const postsPath = fs.existsSync("./src/posts")
  ? "./src/posts"
  : `${__dirname}/src/posts/`;

module.exports = {
  siteMetadata: {
    title: "CoPo",
    subtitle: "code is poetry",
    navigationLinks: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "About",
        link: "/about"
      }
    ],
    language: "en"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/templates/layout.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
              wrapperStyle: "margin-top: 3rem;"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: pagesPath
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: postsPath
      }
    }
  ]
};

const fs = require('fs');

const postsPath = fs.existsSync('./src/posts') ? './src/posts' : `${__dirname}/src/posts/`;

module.exports = {
    siteMetadata: {
        title: 'CoPo',
        subtitle: 'code is poetry',
        navigationLinks: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'About',
                link: '/about'
            }
        ],
        language: 'en'
    },
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
                defaultLayouts: {
                    default: require.resolve('./src/templates/layout.js'),
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: postsPath
            },
        },
    ],
}
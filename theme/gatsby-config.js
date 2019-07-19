module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                    posts: require.resolve('./src/components/layout.js'),
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts/`
            },
        },
    ],
}
# gatsby-theme-CoPo

Code is Poetry

## Install

```bash
npm i --save gatsby react react-dom gatsby-theme-copo
```

or

```bash
yarn add gatsby react react-dom gatsby-theme-copo
```

## Usage

### Project structure

Create the following project structure for your website.

```
your-website
├── src
│   ├── pages
│   │   └── yourPage.mdx
|   ├── posts
│   │   └── myFirstPost.mdx
├── gatsby-config.js
└── package.json
```

### Configuration

In the `gatsby-config.js` file add the following changes

```js
module.exports = {
  siteMetadata: {
    title: '', // Site Title
    subtitle: '', // Site Subtitle
    navigationLinks: 
    [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'Page',
            link: '/yourPage'
        }
    ], // Navigation links of the website,
    language: '' // Language of the website
    
  },
  plugins: [
    {
      resolve: 'gatsby-theme-copo',
      
    },
  ],
};
```

### Blog posts

The theme supports creating blog posts using markdown files. You can start adding your first page by creating a file at `src/posts/my-first-post.md` with the following content.

```md
---

title: My first post <!-- Title of the post -->
date: '2019-07-31' <!-- Date of the post in which it is published -->

---

Your content comes here
```
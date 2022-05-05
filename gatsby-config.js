module.exports = {
  siteMetadata: {
    title: `DRUMASTERS`,
    siteUrl: `https://gatsbydrupalmaster90340.gatsbyjs.io/`
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://tr3.loc/`,
        apiBase: `jsonapi`,
        skipFileDownloads: true,
      },
    },
    {
      resolve: `gatsby-source-drupal-menu-links`,
      options: {
        baseUrl: `http://tr3.loc/`,
        apiBase: `jsonapi`,
        menus: ["main"], // Which menus to fetch, there are the menu IDs.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ]
};
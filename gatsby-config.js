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
      },
    },
    {
      resolve: `gatsby-source-drupal-menu-links`,
      options: {
        baseUrl: `http://tr3.loc/`,
        apiBase: `jsonapi`,
        menus: ["main"],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ]
};
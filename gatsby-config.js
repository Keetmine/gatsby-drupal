module.exports = {
  siteMetadata: {
    title: `DRUMASTERS`,
    siteUrl: `https://gatsbydrupalmaster90340.gatsbyjs.io/`
  },
  plugins: [
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
module.exports = {
  siteMetadata: {
    title: `Qiver Tree Forest`,
    subtitle: `水のない厳しい世界でも生き延びたいエンジニアのブログ`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    `react-hooks`,
    `gatsby-plugin-material-ui`,
    //`gatsby-background-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  /*
  rules: {
    // ...
    `react-hooks/rules-of-hooks": error`, // Checks rules of Hooks
    `react-hooks/exhaustive-deps": warn` // Checks effect dependencies
  }  */
}

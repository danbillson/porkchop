module.exports = {
  siteMetadata: {
    title: `Porkchop`,
    description: `A little experiment using a monorepo`,
    author: `Dan Billson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `porkchop`,
        short_name: `porkchop`,
        start_url: `/`,
        background_color: `#ee7071`,
        theme_color: `#ee7071`,
        display: `minimal-ui`,
        icon: `src/images/porkchop.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Karla`,
          },
        ],
      },
    },
  ],
}

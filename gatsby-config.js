module.exports = {
  siteMetadata: {
    title: `Bushwhacker Bend Winery`,
    description: `Bushwhacker Bend Winery is a unique, local venue situated on the bank of the Missouri River in delightful Glasgow, Missouri.`,
    author: `Aleksandar Trujic`,
    menuLinks: [
      {
        id: 1,
        title: "Home",
        to: "/",
      },
      {
        id: 2,
        title: "Wines",
        to: "/wines",
      },
      {
        id: 3,
        title: "About us",
        to: "/about-us",
      },
      {
        id: 4,
        title: "Gallery",
        to: "/gallery",
      },
      {
        id: 5,
        title: "Blog",
        to: "/blog",
      },
      {
        id: 6,
        title: "Contact",
        to: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 20,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
};

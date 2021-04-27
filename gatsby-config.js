module.exports = {
  siteMetadata: {
    title: `Front End Dev Adventures`,
    author: {
      name: `Cyn Romero`,
      summary: `Web Developer`,
    },
    description: `My first blog with React, Gatsby and GraphQL`,
    siteUrl: `https://localhost:8000`,
    social: {
      twitter: `ce_y_ene`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
  ],
};

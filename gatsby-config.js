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
  ],
};

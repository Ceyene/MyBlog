module.exports = {
  siteMetadata: {
    title: `My first blog with React, Gatsby and GraphQL`,
    author: {
      name: `Cyn Romero`,
      summary: `Web Developer`,
    },
    description: `A simple blog page with Gatsby`,
    siteUrl: `https://localhost:8000`,
    social: {
      twitter: `ce_y_ene`,
    },
  },
  plugins: [
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

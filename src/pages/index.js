import { graphql } from "gatsby";
import React from "react";

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.nodes;

  return (
    <div>
      <h1>Front End Dev Adventures!</h1>
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug;
        return (
          <div>
            <h1>{title}</h1>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        slug
        frontmatter {
          date(formatString: "Do MMMM YYYY")
          title
          description
        }
      }
    }
  }
`;

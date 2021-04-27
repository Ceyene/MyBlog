import { graphql } from "gatsby";
import React from "react";
import Container from "../components/container";

const Home = ({ data }) => {
  //const siteTitle = data.site.siteMetadata.title;
  //const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.nodes;

  return (
    <Container>
      <h1>Front End Dev Adventures!</h1>
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug;
        return (
          <div className="card">
            <h1 className="card-title">{title}</h1>
            <p className="card-date">{post.frontmatter.date}</p>
            <p className="card-description">{post.frontmatter.description}</p>
          </div>
        );
      })}
    </Container>
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

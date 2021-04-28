import React from "react";
import { Link, graphql } from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo";

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.nodes;

  return (
    <Container>
      <SEO title={siteTitle} description={siteDescription} />
      <h1 className="main-title">Front End Dev Adventures!</h1>
      <p className="main-description">
        A Gatsby and GraphQL Blog - By Cynthia Romero
      </p>
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug;
        return (
          <div className="card" key={post.key}>
            <Link className="card-link" to={post.slug}>
              <h1 className="card-title">{title}</h1>
              <p className="card-date">{post.frontmatter.date}</p>
              <p className="card-description">{post.frontmatter.description}</p>
            </Link>
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

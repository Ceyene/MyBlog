import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Container from "../components/container";

const blogPosts = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Container>
      <div className="post">
        <h1 className="post-heading">{frontmatter.title}</h1>
        <h5 className="post-date">{frontmatter.date}</h5>
        <article className="post-body">
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </div>
      <div className="previous-next">
        {previous === false ? null : (
          <>
            {previous && (
              <Link to={previous.fields.slug}>
                <button className="previous-next-button">
                  {previous.frontmatter.title}
                </button>
              </Link>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug}>
                <button className="previous-next-button">
                  {next.frontmatter.title}
                </button>
              </Link>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default blogPosts;

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`;

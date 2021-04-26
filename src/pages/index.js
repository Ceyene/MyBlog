import { graphql } from "gatsby";
import React from "react";

const Home = ({ data }) => {
  console.log(data.site);
  return (
    <div>
      <h1>Front End Dev Adventures!</h1>
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
  }
`;

import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "components/layout";
import SEO from "components/SEO";
import Landing from "components/landing";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    landing: file(relativePath: { eq: "landing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

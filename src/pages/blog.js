import React from "react";
import { Link } from "gatsby";

import Layout from "components/layout";
import SEO from "components/SEO";

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <div style={{ marginTop: "10vh" }}>
      <h1>Hi from the Blog page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default Blog;

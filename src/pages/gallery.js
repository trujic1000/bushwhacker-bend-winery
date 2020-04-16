import React from "react";
import { Link } from "gatsby";

import Layout from "components/layout";
import SEO from "components/SEO";

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <div style={{ marginTop: "10vh" }}>
      <h1>Hi from the Gallery page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default Gallery;

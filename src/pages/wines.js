import React from "react";
import { Link } from "gatsby";

import Layout from "components/layout";
import SEO from "components/SEO";

const Wines = () => (
  <Layout>
    <SEO title="Wines" />
    <div style={{ marginTop: "10vh" }}>
      <h1>Hi from the Wines page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default Wines;

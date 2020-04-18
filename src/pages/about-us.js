import React from "react";
import { Link } from "gatsby";

import Layout from "components/layout";
import SEO from "components/SEO";

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <div style={{ marginTop: "10vh" }}>
      <h1>Hi from the About Us page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default AboutUs;

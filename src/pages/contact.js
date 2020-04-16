import React from "react";
import { Link } from "gatsby";

import Layout from "components/layout";
import SEO from "components/SEO";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ marginTop: "10vh" }}>
      <h1>Hi from the Contact page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default Contact;

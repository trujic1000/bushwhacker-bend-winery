import React from "react";

import Layout from "components/layout";
import SEO from "components/SEO";
import Hero from "components/hero";
import About from "components/about";

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <Hero title="About Us" />
    <About />
  </Layout>
);

export default AboutUs;

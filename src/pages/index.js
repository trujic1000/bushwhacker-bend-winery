import React from "react";
import Layout from "components/layout";
import SEO from "components/SEO";
import {
  Landing,
  FeaturedWines,
  AboutUs,
  Gallery,
  Contact,
} from "components/home";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <FeaturedWines />
    <AboutUs />
    <Gallery />
    <Contact />
  </Layout>
);

export default IndexPage;

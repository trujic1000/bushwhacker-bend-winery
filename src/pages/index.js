import React from "react";
import Layout from "components/layout";
import SEO from "components/SEO";
import { Landing, FeaturedWines, AboutUs, Gallery } from "components/home";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <FeaturedWines />
    <AboutUs />
    <Gallery />
  </Layout>
);

export default IndexPage;

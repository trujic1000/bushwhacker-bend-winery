import React from "react";

import Layout from "components/layout";
import SEO from "components/SEO";
import { WineList, Hero } from "components/wines";

const Wines = () => (
  <Layout>
    <SEO title="Wines" />
    <Hero />
    <WineList />
  </Layout>
);

export default Wines;

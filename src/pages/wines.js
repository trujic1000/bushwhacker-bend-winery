import React from "react";

import Layout from "components/layout";
import SEO from "components/SEO";
import Hero from "components/hero";
import { WineList } from "components/wines";

const Wines = () => (
  <Layout>
    <SEO title="Wines" />
    <Hero title="Our Wine Collection" />
    <WineList />
  </Layout>
);

export default Wines;

import React from "react";

import Layout from "components/layout";
import SEO from "components/SEO";
import Hero from "components/hero";
import GallerySection from "components/gallery";

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <Hero title="Gallery" />
    <GallerySection />
  </Layout>
);

export default Gallery;

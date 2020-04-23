import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Section, Container, Link } from "components/elements";

const GALLERY_QUERY = graphql`
  query fullGalleryQuery {
    images: allImageSharp(
      filter: { fluid: { originalName: { regex: "/gallery/" } } }
      limit: 9
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Gallery = () => {
  const { images } = useStaticQuery(GALLERY_QUERY);
  return (
    <GallerySection id="gallery" light>
      <Container className="gallery-wrap">
        {images.edges.map(({ node }) => (
          <figure key={node.id} className="gallery-item">
            <Img fluid={node.fluid} alt="gallery" />
          </figure>
        ))}
      </Container>
    </GallerySection>
  );
};

export default Gallery;

const GallerySection = styled(Section)`
  text-align: center;
  .gallery-wrap {
    margin: 60px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;

    img {
      object-fit: cover;
    }
  }
`;

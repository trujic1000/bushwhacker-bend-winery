import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import media from "styled-media-query";
import { Section, Container, Link } from "components/elements";

const GALLERY_QUERY = graphql`
  query galleryQuery {
    images: allImageSharp(
      filter: { fluid: { originalName: { regex: "/gallery-/" } } }
      limit: 6
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
      <h1>Gallery</h1>
      <Container className="gallery-wrap">
        {images.edges.map(({ node }) => (
          <figure key={node.id} className="gallery-item">
            <Img fluid={node.fluid} alt="gallery-image" />
          </figure>
        ))}
      </Container>
      <Link to="/gallery" type="dark">
        More photos
      </Link>
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

    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    a {
      text-align: center;
    }
  }
`;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const ABOUT_US_IMAGE_QUERY = graphql`
  query aboutUsHero {
    desktop: file(relativePath: { eq: "gallery-7.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Contact = ({ className }) => {
  const { desktop } = useStaticQuery(ABOUT_US_IMAGE_QUERY);
  const imageData = desktop.childImageSharp.fluid;

  return (
    <BackgroundImage className={className} fluid={imageData}>
      <span className="text-medium">Our Wine Collection</span>
    </BackgroundImage>
  );
};

const ContactSection = styled(Contact)`
  height: 50vh;
  padding: 0 40px;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default ContactSection;
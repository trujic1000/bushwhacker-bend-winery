import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Button from "../button";

const BackgroundSection = ({ className }) => {
  const { desktop } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "landing.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = desktop.childImageSharp.fluid;
  return (
    <BackgroundImage Tag="section" className={className} fluid={imageData}>
      <span className="text-medium">Welcome to</span>
      <span className="text-large">Bushwhacker Bend Winery</span>
      <Button to="#" className="cta">
        Explore our Wines
      </Button>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 100vh;
  font-family: "Oxanium", cursive;

  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    line-height: 1.2;
  }

  a.cta {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
`;

export default StyledBackgroundSection;

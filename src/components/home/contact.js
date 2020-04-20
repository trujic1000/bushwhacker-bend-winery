import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { Link } from "components/elements";

const CONTACT_IMAGE_QUERY = graphql`
  query contactImageQuery {
    desktop: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Contact = ({ className }) => {
  const { desktop } = useStaticQuery(CONTACT_IMAGE_QUERY);
  const imageData = desktop.childImageSharp.fluid;

  return (
    <BackgroundImage className={className} fluid={imageData}>
      <span className="text-medium">Visit our winery today</span>
      <span className="text-medium">and let us share our story with you</span>
      <Link to="/contact">Contact Us</Link>
    </BackgroundImage>
  );
};

const ContactSection = styled(Contact)`
  height: 400px;
  padding: 0 40px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: overlay;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    margin-top: 30px;
  }
`;

export default ContactSection;

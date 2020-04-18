import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import media from "styled-media-query";
import { Section, Container, Link } from "components/elements";

const IMAGE_QUERY = graphql`
  query imageQuery {
    image: file(relativePath: { eq: "deck-view.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const AboutUs = () => {
  const { image } = useStaticQuery(IMAGE_QUERY);
  const imageData = image.childImageSharp.fluid;
  return (
    <AboutUsSection id="about-us">
      <Container className="about-us">
        <Img fluid={imageData} alt="wineyard" />
        <div className="about-us__right">
          <h1>Who we are</h1>
          <p>
            Bushwhacker Bend Winery is a unique, local venue situated on the
            bank of the Missouri River in delightful Glasgow, Missouri.
          </p>
          <Link to="/about-us">Learn More</Link>
        </div>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;

const AboutUsSection = styled(Section)`
  .about-us {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    ${media.lessThan("medium")`
      grid-template-columns: 1fr;
      .about-us__right {
        padding: 30px 0;
      }
    `}
  }

  .about-us__right {
    text-align: left;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    p {
      margin: 20px 0;
      font-size: calc(0.6rem + 0.5vw);
    }
    a {
      margin-top: 10px;
    }
  }
`;

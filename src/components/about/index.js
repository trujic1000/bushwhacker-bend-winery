import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import media from "styled-media-query";
import { Section, Container, Link } from "components/elements";

const IMAGE_QUERY = graphql`
  query imageQuery {
    imageOne: file(relativePath: { eq: "gallery-03.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "gallery-05.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const AboutUs = () => {
  const { imageOne, imageTwo } = useStaticQuery(IMAGE_QUERY);
  const imageOneData = imageOne.childImageSharp.fluid;
  const imageTwoData = imageTwo.childImageSharp.fluid;
  return (
    <>
      <AboutUsSection light>
        <Container className="about-us">
          <Img fluid={imageOneData} alt="river-view-deck" />
          <div className="about-us__right">
            <p>
              Bushwhacker Bend Winery is a unique, local venue situated on the
              bank of the Missouri River in delightful Glasgow, Missouri.
            </p>
            <p>
              We not only welcome special events, but we also invite our guests
              to bring a lunch from a local restaurant or bakery and enjoy a
              glass of Bushwhacker Bend wine on our tranquil, river view deck.
              We also offer delectable cheeses and snacks that are hand-picked
              to accompany our wines.
            </p>
          </div>
        </Container>
      </AboutUsSection>
      <AboutUsSection>
        <Container className="about-us">
          <div className="about-us__right">
            <p>
              Bushwhacker Bend's fine selection of wines are never boring and
              our staff truly represents Missouri's charming hospitality. We are
              eager to make you a fan of the wines we are proud of! The Norton,
              Chambourcin, Grape Shot Red, Rivers Edge White, Wheelhouse White,
              and River Rat Rose are not to be missed... and neither is the
              stunning river view!
            </p>
            <p>
              With a winning combination of exquisite wines, hospitality, and
              scenery, Bushwhacker Bend Winery is truly a sip of Missouri
              splendor!
            </p>
          </div>
          <Img fluid={imageTwoData} alt="river-view-deck" />
        </Container>
      </AboutUsSection>
    </>
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
      line-height: 1.7;
    }
    a {
      margin-top: 10px;
    }
  }
`;

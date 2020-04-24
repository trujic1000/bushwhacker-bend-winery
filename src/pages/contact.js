import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "components/layout";
import SEO from "components/SEO";
import Hero from "components/hero";
import { Section } from "components/elements";
import GoogleMap from "components/contact/googleMap";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero title="Contact Us" />
    <Wrapper>
      <GoogleMap />
      <Details light fluid className="details">
        <h1>Contact details</h1>
        <span>
          <FontAwesomeIcon icon={faMapMarker} />
          515 First Street Glasgow, MO 65254
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} />
          660-338-2100
        </span>
        <span>
          <FontAwesomeIcon icon={faClock} />
          Wednesday - Saturday: 11:00 a.m. - 6:00 p.m.
        </span>
        <span style={{ margin: "0 0 0 20px" }}>
          Sunday: 12:00 p.m. - 5:00 p.m. <br /> <br />
          We will also be closed the following days:
          <ul>
            <li>Easter</li>
            <li>July 4</li>
            <li>Thanksgiving</li>
            <li>Christmas</li>
            <li>January 1 - 7</li>
          </ul>
        </span>
      </Details>
    </Wrapper>
  </Layout>
);

export default Contact;

const Wrapper = styled.div`
  display: flex;
  ${media.lessThan("large")`
    flex-direction: column;
    .details {
      width: 100%;
    }

  `}
`;

const Details = styled(Section)`
  flex: 2;
  height: 60vh;
  padding: 30px;
  text-align: left;
  h1 {
    text-align: left;
    margin-bottom: 10px;
    font-weight: bold;
  }
  span {
    display: block;
    margin-top: 10px;
  }
  svg {
    margin-right: 5px;
  }
`;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import media from "styled-media-query";
import { Section, Container, Link } from "components/elements";

const Contact = () => {
  return <ContactSection id="contact">Contac us</ContactSection>;
};

export default Contact;

const ContactSection = styled(Section)``;

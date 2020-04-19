import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <span className="address">
        515 First Street, Glasgow, MO 65254, USA Tel +1 660-338-2100
      </span>
      <span className="copyright">
        © {new Date().getFullYear()} - Bushwhacker Bend Winery
      </span>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 60px 20px;
  text-align: center;
  background-color: #000;
  span {
    display: block;
    line-height: 2;
  }
  span.copyright {
    font-size: 0.9rem;
    color: #a3a3a3;
  }
`;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import media from "styled-media-query";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";

const DesktopNavbar = ({ isOpen, setOpen }) => {
  return (
    <DesktopNav>
      <div className="logo">Logo</div>
      <NavLinks />
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </DesktopNav>
  );
};

DesktopNavbar.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  /* background: ${props => props.theme.colors.bg}; */
  /* box-shadow: 0 0 2px #000; */
  color: white;

  height: 10vh;
  padding: 0 120px;

  ${media.lessThan("large")`
    padding: 0 60px;
    `}
    
  ${media.lessThan("medium")`
    padding: 0 30px;
    `}

  .logo {
    font-size: 4vh;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    list-style: none;

    ${media.lessThan("medium")`
      display: none;
    `}

    li {
      &:not(:last-child) {
        margin-right: 26px;
      }
    }
  }

  .link {
    position: relative;
    color: white;
    text-decoration: none;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2px;
      width: 0;
      background: white;
      transition: width 150ms linear;
    }
    &:hover::before {
      width: 100%;
    }
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

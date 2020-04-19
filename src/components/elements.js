import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Link as GatsbyLink } from "gatsby";
import { AnchorLink as Anchor } from "gatsby-plugin-anchor-links";

export const Link = styled(GatsbyLink)`
  font-size: calc(0.7rem + 0.5vw);
  display: inline-block;
  padding: calc(0.5rem + 0.3vw) calc(1rem + 0.3vw);
  background: transparent;
  border: 2px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  font-family: "Open Sans", sans-serif;
  transition: all 150ms linear;
  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
  ${props =>
    props.type === "dark" &&
    css`
      border-color: ${props.theme.colors.black};
      color: ${props.theme.colors.black};
      &:hover {
        background: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
      }
    `}
`;

export const AnchorLink = styled(Anchor)`
  font-size: calc(0.7rem + 0.5vw);
  display: inline-block;
  padding: calc(0.5rem + 0.3vw) calc(1rem + 0.3vw);
  background: transparent;
  border: 2px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  font-family: "Open Sans", sans-serif;
  transition: all 150ms linear;
  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`;

export const Section = styled.section`
  padding: 100px 80px;
  margin: auto;
  color: ${props => props.theme.colors.white};

  ${media.lessThan("medium")`
    padding: 80px 40px;
  `}

  h1 {
    text-align: center;
    font-size: calc(1rem + 1vw);
    color: ${props => props.theme.colors.white};
  }

  ${props =>
    props.light &&
    css`
      background-color: ${props.theme.colors.bgLight};
      color: ${props.theme.colors.black};

      h1 {
        color: ${props => props.theme.colors.black};
      }
    `}
`;

export const Container = styled.div`
  max-width: 1140px;

  ${media.between("large", "huge")`
  max-width: 960px;
  `}

  ${media.between("medium", "large")`
  max-width: 720px;
  `}

  ${media.between("small", "medium")`
  max-width: 540px;
  `}

  ${media.lessThan("small")`
  max-width: 100%;
  `}
`;

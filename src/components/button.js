import styled from "styled-components";
import { Link } from "gatsby";

const Button = styled(Link)`
  font-size: calc(0.7rem + 0.5vw);
  display: inline-block;
  padding: calc(0.5rem + 0.3vw) calc(1rem + 0.3vw);
  background: transparent;
  border: 2px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  font-family: "Oxanium", cursive;
  transition: all 150ms linear;
  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
  }
`;

export default Button;

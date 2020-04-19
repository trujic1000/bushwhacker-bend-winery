import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import FontFaces from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${FontFaces};

	html {
		box-sizing: border-box;
	}
	*,
	*::before,
	*::after {
 		box-sizing: inherit;
  }
  html, body {
		height: 100%;
		background-color: ${props => props.theme.colors.bg};
		color: ${props => props.theme.colors.white};
  }
  body {
		overflow-x: hidden;
		line-height: 1.5;
		font-family: "Open Sans", sans-serif;
	}
	a {
		text-decoration: none;
  }
	p {
		font-family: "Roboto", sans-serif;
	}
	.active {
		border-bottom: 2px solid white;
	}
	.text-small {
		font-size: calc(1rem + 0.2vw);
	}
	.text-medium {
    font-size: calc(1rem + 1vw);
  }
  .text-large {
    font-size: calc(1rem + 1.6vw);
  }
`;

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "styles/GlobalStyle";
import { theme } from "styles/theme";
import Header from "../header";

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            id
            title
            to
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={site.siteMetadata.title} />
      <GlobalStyle />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

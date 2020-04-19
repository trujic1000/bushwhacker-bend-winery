import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "styles/GlobalStyle";
import { theme } from "styles/theme";
import Header from "./header";
import Footer from "./footer";

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
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

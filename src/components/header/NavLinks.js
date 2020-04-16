import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";

const NavLinks = ({ setOpen }) => {
  const closeNav = () => setOpen(false);
  const { site } = useStaticQuery(graphql`
    query NavLinksQuery {
      site {
        siteMetadata {
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
    <ul className="nav-links">
      {site.siteMetadata.menuLinks.map(link => (
        <li key={link.id}>
          <Link
            to={link.to}
            className="link"
            activeClassName="active"
            onClick={closeNav}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

NavLinks.propTypes = {
  setOpen: PropTypes.func,
};

NavLinks.defaultProps = {
  setOpen: () => {},
};

export default NavLinks;

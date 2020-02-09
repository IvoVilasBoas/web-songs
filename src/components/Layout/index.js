import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

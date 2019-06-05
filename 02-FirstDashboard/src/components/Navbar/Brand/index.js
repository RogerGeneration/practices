import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const NavbarBrand = props => {
  return (
    <div className={styles.navbarBrand}>
      <img
        src="https://www.generationinitiative.org/wp-content/themes/generation/images/logos/generation-logo.svg"
        alt=""
      />
    </div>
  );
};

NavbarBrand.propTypes = {
  children: PropTypes.node,
};

export default NavbarBrand;

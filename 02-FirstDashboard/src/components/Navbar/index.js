import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import NavbarItem from './Item';
import NavbarBrand from './Brand';

const Navbar = props => {
  const { children, ...other } = props;
  return (
    <div {...other} className={styles.navbar}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

Navbar.Item = NavbarItem;
Navbar.Brand = NavbarBrand;

export default Navbar;

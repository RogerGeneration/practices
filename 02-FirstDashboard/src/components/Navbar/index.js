import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import NavbarItem from './NavbarItem';

const Navbar = props => {
  const { children, ...other } = props;
  console.log(styles);
  return (
    <div {...other} className={styles.navbar}>
      {children}
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

Navbar.Item = NavbarItem;

export default Navbar;

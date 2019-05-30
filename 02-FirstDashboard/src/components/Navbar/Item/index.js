import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


const NavbarItem = props => {
  const { children, ...other } = props;
  return (
    <li {...other} className={styles.navbarItem}> {children}</li>
  );
};

NavbarItem.propTypes = {
  children: PropTypes.node,
};

export default NavbarItem;

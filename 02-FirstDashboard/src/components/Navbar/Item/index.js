import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


const NavbarItem = props => {
  const { children, ...other } = props;
  return (
    <div {...other} className={styles.navbarItem}> {children}</div>
  );
};

NavbarItem.propTypes = {
  children: PropTypes.node,
};

export default NavbarItem;

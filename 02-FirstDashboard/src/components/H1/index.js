import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const H1 = props => {
  const { children, ...other } = props;
  return (
    <h1 {...other} className={styles.h1}>
      {children}
    </h1>
  );
};

H1.propTypes = {
  children: PropTypes.node,
};

export default H1;

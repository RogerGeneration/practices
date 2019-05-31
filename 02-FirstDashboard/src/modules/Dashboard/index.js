
import React from 'react';
import classNames from 'classnames/bind';

import Navbar from 'Components/Navbar';

import styles from './styles.scss';

let cx = classNames.bind(styles);

class Dashboard extends React.PureComponent {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Brand />
          <Navbar.Item>Soy un item 1</Navbar.Item>
          <Navbar.Item>Soy un item 2</Navbar.Item>
        </Navbar>
        <div className={cx({ container: true })}>
         contenido
        </div>
      </div>
    );
  }
}

export default Dashboard;


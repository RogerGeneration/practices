import React from 'react';
import Navbar from 'Components/Navbar';

import styles from './styles.scss';

import FormBuilder from '../../components/Formio/FormBuilder';

class Dashboard extends React.PureComponent {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Brand />
          <Navbar.Item>Soy un item 1</Navbar.Item>
          <Navbar.Item>Soy un item 2</Navbar.Item>
        </Navbar>
        <div className={styles.container}>
          aqui va el builder
          <FormBuilder dir="asdasdasd" form={{ display: 'form' }} onChange={(schema) => console.log(schema)} />
        </div>
      </div>
    );
  }
}

export default Dashboard;

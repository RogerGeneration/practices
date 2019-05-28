import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from 'Components/Navbar';

class Welcome extends React.Component {
  render () {
    return (
      <Navbar>
        Soy una barra
        <Navbar.Item>Soy un item</Navbar.Item>
      </Navbar>
    );
  }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));

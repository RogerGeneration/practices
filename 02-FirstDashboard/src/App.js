import React from 'react';

import Navbar from 'Components/Navbar';

require('./assets/styles/main.scss');

const App = () => (
  <Navbar>
    Soy una barra
    <Navbar.Item>Soy un item</Navbar.Item>
  </Navbar>
);
export default App;

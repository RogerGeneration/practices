import React from 'react';
import ReactDOM from 'react-dom';

import H1 from 'Components/H1';

class Welcome extends React.Component {
  render () {
    return (
      <H1>Hello World from MyProject</H1>
    );
  }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));

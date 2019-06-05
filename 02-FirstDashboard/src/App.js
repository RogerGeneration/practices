import React from 'react';

import Webform from 'formiojs/Webform';
import WebformBuilder from 'formiojs/WebformBuilder';
import Wizard from 'formiojs/Wizard';
import WizardBuilder from 'formiojs/WizardBuilder';

export {
  Webform,
  WebformBuilder,
  Wizard,
  WizardBuilder
};

// My App
import Dashboard from 'Modules/Dashboard';

export * from './components/Formio';
export * from './modules/Formio';
export { Components, Formio, Utils } from 'formiojs';

// Global CSS
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'formiojs/dist/formio.full.css';
import './assets/styles/main.scss';

const App = () => <Dashboard />;
export default App;

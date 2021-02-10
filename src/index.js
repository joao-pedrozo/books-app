import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
      <GlobalStyles/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

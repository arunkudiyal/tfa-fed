import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App'

ReactDOM.render(
  <React.StrictMode>
    <App appTitle="Person Manager Application" />
  </React.StrictMode>,
  document.getElementById('root')
);
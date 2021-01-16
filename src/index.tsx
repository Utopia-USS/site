import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
//  <React.StrictMode> issues with material-ui lib
    <App />,
//  </React.StrictMode>
  document.getElementById('root')
);

reportWebVitals();

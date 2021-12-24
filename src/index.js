import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.scss';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App naming="Vlad" />
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App naming="Vlad" />
  </React.StrictMode>,
  document.getElementById('root'),
);

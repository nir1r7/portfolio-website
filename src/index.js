import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/custom.scss'
import App from './components/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


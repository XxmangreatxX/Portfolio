import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';    // Your consolidated styles
import './styles/all.min.css';    // Font Awesome icons

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

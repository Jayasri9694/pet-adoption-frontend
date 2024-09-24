import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Ensure this file exists, or remove this import if unnecessary
import App from './App';  // Ensure that the App.js file is correctly imported

// Ensure the root element in public/index.html exists
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Check that the element with id="root" exists in public/index.html
);

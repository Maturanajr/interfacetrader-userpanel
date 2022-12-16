import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/Root';
import './config/styles.css'
import 'normalize.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);



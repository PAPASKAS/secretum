import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from 'src/Routing';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from 'src/Routing';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'src/store';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/styles/css/main.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Routing />
    </ReduxProvider>
  </React.StrictMode>,
);

reportWebVitals();

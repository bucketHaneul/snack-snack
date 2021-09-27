import React from 'react';
import ReactDOM from 'react-dom';
import App from '../examples/App';
import SnackbarProvider from './SnackbarProvider';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

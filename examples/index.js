import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from '../src';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* 추가 부분 */}
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

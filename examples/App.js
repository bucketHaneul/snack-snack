import React from 'react';
import { SnackbarProvider } from '../src';
import Test from './Example';

const App = () => {
  // const customStylesExample = { backgroundColor: 'red' };
  const customStylesExample = { width: '500px', height: '60px', fontSize: '20px' };

  return (
    <SnackbarProvider customStyles={customStylesExample}>
      <Test />
    </SnackbarProvider>
  );
};

export default App;

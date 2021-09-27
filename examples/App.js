import React from 'react';
import useSnackBar from '../src/useSnackbar';
import Test from './Test';

const App = () => {
  const { isSnackbarOpen, SnackBar } = useSnackBar();

  return (
    <>
      <Test />
      {isSnackbarOpen && <SnackBar />}
    </>
  );
};

export default App;

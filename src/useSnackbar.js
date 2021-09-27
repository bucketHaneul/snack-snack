import React from 'react';
import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { default as SnackBarComponent } from './Snackbar/Snackbar';
import SnackbarContext from './SnackbarContext';

const useSnackBar = () => {
  const { snackbarMessage, setSnackbarMessage, isSnackbarOpen, setSnackbarOpen } =
    useContext(SnackbarContext);
  const SnackbarPortal = ({ children }) =>
    ReactDOM.createPortal(children, document.getElementById('snackbar'));

  const SnackBar = () => (
    <SnackbarPortal>
      <SnackBarComponent>{snackbarMessage}</SnackBarComponent>
    </SnackbarPortal>
  );

  const openSnackBar = (newMessage) => {
    setSnackbarMessage(newMessage);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    if (!isSnackbarOpen) return;

    const intervalId = setInterval(() => {
      setSnackbarMessage('newMessage');
      setSnackbarOpen(false);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isSnackbarOpen]);

  return { isSnackbarOpen, openSnackBar, SnackBar };
};

export default useSnackBar;

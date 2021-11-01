import { useContext, useEffect } from 'react';
import SnackbarContext from './SnackbarContext';

const useSnackbar = () => {
  const { isSnackbarOpen, setSnackbarMessage, setSnackbarOpen } = useContext(SnackbarContext);

  const openSnackbar = (newMessage) => {
    setSnackbarMessage(newMessage);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    if (!isSnackbarOpen) return;

    const timerId = setTimeout(() => {
      setSnackbarMessage('');
      setSnackbarOpen(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, [isSnackbarOpen]);

  return { isSnackbarOpen, openSnackbar };
};

export default useSnackbar;

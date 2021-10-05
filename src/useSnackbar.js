import { useContext, useEffect } from 'react';
import SnackbarContext from './SnackbarContext';

const useSnackbar = () => {
  const { setSnackbarMessage, isSnackbarOpen, setSnackbarOpen } = useContext(SnackbarContext);

  const openSnackbar = (newMessage) => {
    setSnackbarMessage(newMessage);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    if (!isSnackbarOpen) return;

    const intervalId = setTimeout(() => {
      setSnackbarMessage('');
      setSnackbarOpen(false);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isSnackbarOpen]);

  return { isSnackbarOpen, openSnackbar };
};

export default useSnackbar;

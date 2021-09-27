import { useContext, useEffect } from 'react';
import SnackbarContext from './SnackbarContext';

const useSnackBar = () => {
  const { setSnackbarMessage, isSnackbarOpen, setSnackbarOpen } = useContext(SnackbarContext);

  const openSnackBar = (newMessage) => {
    setSnackbarMessage(newMessage);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    if (!isSnackbarOpen) return;

    const intervalId = setInterval(() => {
      setSnackbarMessage('');
      setSnackbarOpen(false);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isSnackbarOpen]);

  return { isSnackbarOpen, openSnackBar };
};

export default useSnackBar;

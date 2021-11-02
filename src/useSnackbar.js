import { useContext } from 'react';
import SnackbarContext from './SnackbarContext';

const useSnackbar = () => {
  const { openSnackbar } = useContext(SnackbarContext);

  return { openSnackbar };
};

export default useSnackbar;

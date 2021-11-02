import React from 'react';
import PropTypes from 'prop-types';
import SnackbarContext from './SnackbarContext';
import useSnackbarProvider from './useSnackbarProvider';

const SnackbarProvider = ({ children, customStyles }) => {
  const { Snackbar, openSnackbar } = useSnackbarProvider();

  const store = { openSnackbar };

  return (
    <SnackbarContext.Provider value={store}>
      {children}
      <Snackbar customStyles={customStyles} />
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.object,
};

SnackbarProvider.defaultProps = {
  customStyles: {},
};

export default SnackbarProvider;

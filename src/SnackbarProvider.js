import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SnackbarContext from './SnackbarContext';

const SnackbarProvider = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState('원하는 메시지를 입력하세요!');
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const store = { snackbarMessage, setSnackbarMessage, isSnackbarOpen, setSnackbarOpen };

  return <SnackbarContext.Provider value={store}>{children}</SnackbarContext.Provider>;
};

SnackbarProvider.propTypes = {
  children: PropTypes.node,
};

export default SnackbarProvider;

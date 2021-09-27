import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SnackbarContext from './SnackbarContext';
import { default as SnackBarComponent } from './Snackbar/Snackbar';

const SnackbarProvider = ({ children, customStyles }) => {
  const [snackbarMessage, setSnackbarMessage] = useState('원하는 메시지를 입력하세요!');
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const store = { snackbarMessage, setSnackbarMessage, isSnackbarOpen, setSnackbarOpen };

  const SnackbarPortal = ({ children }) =>
    ReactDOM.createPortal(children, document.getElementById('snackbar'));

  const SnackBar = () => (
    <SnackbarPortal>
      <SnackBarComponent styles={customStyles}>{snackbarMessage}</SnackBarComponent>
    </SnackbarPortal>
  );

  return (
    <SnackbarContext.Provider value={store}>
      {children}
      {isSnackbarOpen && <SnackBar />}
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

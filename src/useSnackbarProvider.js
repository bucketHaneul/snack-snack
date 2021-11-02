import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { default as SnackbarComponent } from './Snackbar/Snackbar';

const useSnackbarProvider = () => {
  const [snackbarMessage, setSnackbarMessage] = useState('원하는 메시지를 입력하세요!');
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const openSnackbar = (newMessage) => {
    setSnackbarMessage(newMessage);
    setIsOpenSnackbar(true);

    setTimeout(() => {
      setIsOpenSnackbar(false);
    }, 3000);
  };

  const SnackbarPortal = ({ children }) =>
    ReactDOM.createPortal(children, document.getElementById('snackbar'));

  const Snackbar = ({ customStyles }) =>
    isOpenSnackbar && (
      <SnackbarPortal>
        <SnackbarComponent styles={customStyles}>{snackbarMessage}</SnackbarComponent>
      </SnackbarPortal>
    );

  Snackbar.propTypes = {
    customStyles: PropTypes.object,
  };

  Snackbar.defaultProps = {
    customStyles: {},
  };

  return { Snackbar, openSnackbar };
};

export default useSnackbarProvider;

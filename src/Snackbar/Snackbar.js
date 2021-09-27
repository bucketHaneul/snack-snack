import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Snackbar.styles';

const Snackbar = ({ children, styles }) => <Container styles={styles}>{children}</Container>;

Snackbar.propTypes = {
  children: PropTypes.string.isRequired,
  styles: {},
};

export default Snackbar;

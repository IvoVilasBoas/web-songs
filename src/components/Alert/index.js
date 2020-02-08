import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';

const alert = props => {
  const { variant, severity, children, color } = props;
  return (
    <Alert variant={variant} severity={severity} color={color}>
      {children}
    </Alert>
  );
};

alert.propTypes = {
  variant: PropTypes.string,
  severity: PropTypes.string,
  children: PropTypes.any,
  color: PropTypes.string,
};

export default alert;

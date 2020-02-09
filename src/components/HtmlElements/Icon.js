import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/destructuring-assignment
const Icon = props => <i onClick={props.onClick} className={`fas fa-${props.icon} ${props.spin ? 'fa-spin' : ''}`} />;

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.func,
  spin: PropTypes.bool,
};

export default Icon;

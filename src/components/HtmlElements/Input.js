import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { colorUtils } from '../../../public/static/utils/colors';
import Icon from './Icon';

const Wrapper = styled('div')`
  position: relative;
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${colorUtils.PRIMARY};
  }
  .MuiFormHelperText-root.Mui-error {
    color: ${colorUtils.PRIMARY};
    font-size: 9px;
  }
  > div {
    width: 100%;
    text-transform: uppercase;
    input,
    label {
      font-size: 11px;
      text-transform: uppercase;
    }
  }
  i {
    position: absolute;
    right: 26px;
    top: 18px;
    font-size: 16px;
    color: ${colorUtils.BLACK};
    cursor: pointer;
  }
  input {
    width: ${props => (props.icon ? '80%' : '100%')};
  }
`;

const Input = props => {
  const { name, type, min, max, placeholder, value, onChange, icon, required, error, disabled } = props;
  const inputRef = useRef(name);
  const [password, setPassword] = useState(false);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <Wrapper icon={icon}>
      <TextField
        type={password ? 'text' : type}
        name={name}
        value={value}
        label={placeholder}
        variant="outlined"
        onChange={onChange}
        min={min}
        required={required}
        ref={inputRef}
        max={max}
        disabled={disabled}
        error={error && error[0] ? true : false}
        helperText={error && error[0]}
      />
      {type !== 'password' && icon && <Icon onClick={focusInput} icon={icon} />}
      {type === 'password' && icon && (
        <Icon onClick={() => setPassword(!password)} icon={!password ? 'eye' : 'eye-slash'} />
      )}
    </Wrapper>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
  icon: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  min: PropTypes.any,
  max: PropTypes.any,
  error: PropTypes.any,
};

export default Input;

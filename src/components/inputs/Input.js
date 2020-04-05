import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import cn from './Input.module.scss';

export const Input = React.memo(
  ({
    autoComplete,
    type,
    placeholder,
    disabled,
    height,
    width,
    maxLength,
    minLength,
    readOnly,
    required,
    onChange,
    variant,
  }) => (
    <input
      className={classNames(cn.input, cn[variant])}
      autoComplete={autoComplete}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      height={height}
      width={width}
      maxLength={maxLength}
      minLength={minLength}
      readOnly={readOnly}
      required={required}
      onChange={event => onChange(event.target.value)}
    />
  ),
);

Input.defaultProps = {
  autoComplete: 'off',
  type: 'text',
  placeholder: '',
  disabled: false,
  height: '',
  width: '',
  maxLength: '',
  minLength: '',
  readOnly: false,
  required: false,
  onChange: () => {},
  variant: '',
};
Input.propTypes = {
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  variant: PropTypes.string,
};

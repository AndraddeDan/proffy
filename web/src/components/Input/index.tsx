import React from 'react';
import { Props } from './props';
import './style.scss';

const Input: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;

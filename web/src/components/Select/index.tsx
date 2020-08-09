import React from 'react';
import { Props } from './props';
import './style.scss';

const Select: React.FC<Props> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>

        {options.map((option, index) =>
          (<option key={index} value={option.value}>{option.label}</option>))}
      </select>
    </div>
  );
}

export default Select;

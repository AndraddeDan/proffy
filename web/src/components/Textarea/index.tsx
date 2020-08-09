import React from 'react';
import { Props } from './props';
import './style.scss';

const Textarea: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default Textarea;

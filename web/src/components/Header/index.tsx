import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/img/logo.svg';

import { Props } from './props';
import './style.scss';

const Header: React.FC<Props> = (props) => {
  return (
    <header className="page-header" >
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>

    </header >
  );
}

export default Header;

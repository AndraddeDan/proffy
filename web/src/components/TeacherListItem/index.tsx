import React from 'react';

import whatsAppIcon from '../../assets/icons/whatsapp.svg'

import './style.scss'

function TeacherListItem() {
  return (
    <article className="teacher-item">

      <header>
        <img src="https://avatars0.githubusercontent.com/u/28069006?s=460&u=4f137b01ea9adc9651c3ba52da8c493e99605f34&v=4" alt="Daniel Andrade" />
        <div>
          <strong>Daniel Andrade</strong>
          <span>Música</span>
        </div>
      </header>

      <p>
        +55011... Desenvolvedor Front-End, Designer digital, apaixonado por livros e games, ilustrador por hobby.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhattsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherListItem;

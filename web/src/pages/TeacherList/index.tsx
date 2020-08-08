import React from 'react';

import Header from './../../components/Header/index';

import whatsAppIcon from '../../assets/icons/whatsapp.svg'

import './style.scss';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis." >
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;

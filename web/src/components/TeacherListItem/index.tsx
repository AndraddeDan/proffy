import React from 'react';

import whatsAppIcon from '../../assets/icons/whatsapp.svg'

import { Props } from './props';

import './style.scss'
import api from '../../services/api';

const TeacherListItem: React.FC<Props> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', { user_id: teacher.id });
  }

  return (
    <article className="teacher-item">

      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span> {teacher.subject} </span>
        </div>
      </header>

      <p> {teacher.bio} </p>

      <footer>
        <p>
          <span> Preço/hora </span>
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}?text=Olá`} target="_blank">
          <img src={whatsAppIcon} alt="WhattsApp" />
          <span> Entrar em contato </span>
        </a>
      </footer>
    </article>
  );
}

export default TeacherListItem;

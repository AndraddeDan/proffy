import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import TeacherList from './pages/TeacherList/index';
import TeacherForm from './pages/TeacherForm/index';

function Routes() {
  return (
    <BrowserRouter >
      <Route path="/" exact component={Home} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;

import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Form from './pages/form';
import Table from './pages/table';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route path='/patients/:id?' component={Form}></Route>
        <Route path='/allPatients' component={Table}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
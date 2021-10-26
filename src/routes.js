import React from  'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MovieItem from './components/MovieItem';
import Main from './components/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/movie/:name" component={MovieItem}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;

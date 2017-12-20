import React from 'react';
import { Route, Switch } from 'react-router';

// components
import Home from './home';
import PageNotFound from './common/components/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>

    <Route path="*" component={PageNotFound} />

  </Switch>
);
import React from 'react';

import { Route, Switch} from 'react-router-dom';

import Authors from './Authors/Authors';
import Books from './Books/Books';
import Home from './Home/Home';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/authors/' component={Authors}/>
      <Route exact path='/books/' component={Books}/>
    </Switch>
  );
};

export default AppRouter;
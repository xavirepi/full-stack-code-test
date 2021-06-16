import React from 'react';

import { Route, Switch} from 'react-router-dom';

import Home from './Home/Home';
import Authors from './Authors/Authors';
import CreateAuthor from './Authors/Forms/CreateAuthor';
import Books from './Books/Books';
import CreateBook from './Books/Forms/CreateBook';
import AuthorDetail from './Authors/AuthorDetail/AuthorDetail';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/authors/' component={Authors}/>
      <Route exact path='/authors/create/' component={CreateAuthor}/>
      <Route exact path='/author/:id/' component={AuthorDetail}/>
      <Route exact path='/books/' component={Books}/>
      <Route exact path='/books/create/' component={CreateBook}/>
    </Switch>
  );
};

export default AppRouter;
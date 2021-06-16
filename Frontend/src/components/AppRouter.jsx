import React from 'react';

import { Route, Switch} from 'react-router-dom';

import Home from './Home/Home';
import Authors from './Authors/Authors';
import CreateAuthor from './Authors/Forms/AuthorForm';
import Books from './Books/Books';
import CreateBook from './Books/Forms/BookForm';
import AuthorDetail from './Authors/AuthorDetail/AuthorDetail';
import BookDetail from './Books/BookDetail/BookDetail';
import EditAuthor from './Authors/Forms/EditAuthor';
import EditBook from './Books/Forms/EditBook';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/authors/' component={Authors}/>
      <Route exact path='/author/create/' component={CreateAuthor}/>
      <Route exact path='/author/update/:id' component={EditAuthor}/>
      <Route exact path='/author/:id/' component={AuthorDetail}/>
      <Route exact path='/books/' component={Books}/>
      <Route exact path='/book/create/' component={CreateBook}/>
      <Route exact path='/book/update/:id' component={EditBook}/>
      <Route exact path='/book/:id/' component={BookDetail}/>
    </Switch>
  );
};

export default AppRouter;
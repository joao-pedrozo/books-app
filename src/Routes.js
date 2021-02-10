import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/'
import BooksList from './pages/BooksList';

const Routes = () => {
   return (
    <Router>
        <Route exact path="/" component={HomePage}/>
        <Route path="/bookslist" component={BooksList}/>
    </Router>
   )
};

export default Routes;
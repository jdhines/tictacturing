import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const createRoutes = () => {
  return (
    <div>
      <header>
        <h1>TicTacTuring</h1>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </main>
    </div>
  )
}

const Routes = createRoutes();

export default Routes;

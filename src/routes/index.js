import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

const createRoutes = () => {
  return (
    <MuiThemeProvider>
      <div>
        <header>
          <h1>TicTacTuring</h1>
          <RaisedButton
            label="test button"
            primary={true}
            onTouchTap={()=>{console.log('hello, I work')}}
          />
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </main>
      </div>
    </MuiThemeProvider>
  )
}

const Routes = createRoutes();

export default Routes;

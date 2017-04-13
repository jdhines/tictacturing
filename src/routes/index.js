import React from 'react';
import { Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TicTacToe from '../containers/TicTacToe';
import Profile from '../containers/Profile';
import NavDrawer from '../components/NavDrawer';
import {Header, Main} from '../components/styled/Templates';

injectTapEventPlugin();

const createRoutes = () => {
  return (
    <MuiThemeProvider>
      <div>
        <NavDrawer />
        <Header>
          TicTacTuring
        </Header>
        <Main>
          <Route exact path="/" component={TicTacToe} />
          <Route path="/profile" component={Profile} />
        </Main>
      </div>
    </MuiThemeProvider>
  )
}

const Routes = createRoutes();

export default Routes;

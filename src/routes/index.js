import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import NavDrawer from '../components/NavDrawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const createRoutes = () => {
  return (
    <MuiThemeProvider>
      <div>
        <NavDrawer />
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

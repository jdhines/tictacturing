import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';
import Routes from './routes'; //same as ...from './routes'

import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();
ReactDOM.render(
  <Router
    history={newHistory}
    children={Routes}
  />,
  document.getElementById('root')
);
